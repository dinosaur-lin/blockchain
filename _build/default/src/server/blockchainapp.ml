open Opium

type chain_t = {
  length: int;
  chain: Block.t list;
} [@@deriving yojson]

type transaction_t = {
  author: string;
  content: string;
} [@@deriving yojson]

let blockchain =
  Blockchain.create ()

let new_transaction req =
  let open Lwt.Syntax in
  let* body = Body.to_string req.Request.body in
  let _ = Logs_lwt.app (fun m -> m "Received: %s" body) in
  let json = Yojson.Safe.from_string body in
  let ret = transaction_t_of_yojson json in
  match ret with 
  | Ok trans_value -> 
    Blockchain.add_new_transaction blockchain trans_value.content;
    Response.of_json (transaction_t_to_yojson trans_value)
   |> Lwt.return
  | Error err_str -> 
    let status = Status.of_code 404 in
    (Response.of_plain_text ~status:status err_str) |> Lwt.return

let get_chain _ =
  let chain = { length = List.length blockchain.chain; chain = blockchain.chain } in
  let blockchain_str = chain_t_to_yojson chain in
  let _ = Logs_lwt.app (fun m -> m "chain request") in
  blockchain_str 
  |> Response.of_json
  |> Lwt.return

let mine _ =
  let result = Blockchain.mine blockchain in 
  let result_str = if not result then "No transaction to mine" else "Block is mined" in
  result_str |> Response.of_plain_text |> Lwt.return

let _ =
  Logs.set_level (Some Logs.Info);
  Logs.set_reporter (Logs.format_reporter ());
  Logs.app (fun m -> m "Blockchain app started...");
  let static =
    Middleware.static_unix ~local_path:"." ~uri_prefix:"/" ()
  in
  App.empty
  |> App.middleware static
  |> App.get "/chain" get_chain
  |> App.post "/new_transaction" new_transaction
  |> App.get "/mine" mine
  |> App.run_command
  