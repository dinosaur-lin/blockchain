open Note
open Brr
open Brr_io
open Brr_note
open Brr_note_kit

let display_result str =
  El.append_children (Document.body G.document) El.[txt str]

let display_chain str = 
  let d = Document.find_el_by_id G.document (Jstr.of_string "chain_text") in
  match d with
  | Some chain_text -> 
    begin
      El.set_prop El.Prop.value str chain_text
    end 
  | None -> display_result (Jstr.of_string "No button find")

let extract_display_chain (response: Fetch.Response.t Fut.or_error) =
  let open Fut.Result_syntax in 
  let* r = response in
  let b = Fetch.Response.as_body r in
  let* json = Fetch.Body.json b in
  Fut.ok (display_chain (Json.encode json))

let extract_display_new_transaction (response: Fetch.Response.t Fut.or_error) =
  let open Fut.Result_syntax in 
  let* r = response in
  let b = Fetch.Response.ok r in
  Fut.ok (if b then display_result (Jstr.of_string "new transaction ok") 
  else display_result (Jstr.of_string "new transaction failed"))  

let bind_chain_event () = 
  let chain_button_opt = Document.find_el_by_id G.document (Jstr.of_string "chain_button") in
  match chain_button_opt with
  | Some chain_btn -> 
    begin      
      let target = El.as_target chain_btn in 
      Ev.listen Ev.click (fun _ -> 
        let result = Fetch.url (Jstr.of_string "http://localhost:3000/chain") in
        ignore (extract_display_chain result)) target
    end 
  | None -> display_result (Jstr.of_string "No button find")

let get_input_content id = 
  let input_opt = Document.find_el_by_id G.document (Jstr.of_string id) in
  Option.map (fun i -> Jstr.to_string (El.prop El.Prop.value i)) input_opt

let bind_new_transaction_event () = 
  let (let*) x f = Option.bind x f in
  let* add_new_trans_btn = Document.find_el_by_id G.document (Jstr.of_string "add_new_transaction_button") in
  let _ = Brr.Console.info ["found transaction button"] in
  let target = El.as_target add_new_trans_btn in      
  let headers = Fetch.Headers.of_assoc List.[(Jstr.of_string "Content-Type", Jstr.of_string "application/json")] in
  Some (Ev.listen Ev.click (fun _ -> 
        ignore (let* author = get_input_content "author" in
        let* content = get_input_content "content" in
        let _ = Brr.Console.info ["author"; author; "content"; content] in
        let body = Fetch.Body.of_jstr (Jstr.of_string ({|{"author":"|} ^ author ^ {|", "content":"|} ^ content ^ {|"}|})) in
        let req_init = Fetch.Request.init ~method':(Jstr.of_string "POST") ~body:body ~headers:headers () in
        let request = Fetch.Request.v ~init:req_init (Jstr.of_string "http://localhost:3000/new_transaction") in
        let _ = Brr.Console.info ["clicked on transaction button"] in
        let response = Fetch.request request in
        Some (extract_display_new_transaction response))
      ) target) 

let () =
  let () = Brr_poke.define () in
  let _ = bind_chain_event () in
  ignore (bind_new_transaction_event ())