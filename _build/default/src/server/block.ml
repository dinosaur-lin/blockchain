type t = {
  index: int;
  transactions: string list;
  timestamp: float;
  mutable hash: string;
  previous_hash: string;
  mutable nonce: int;
} [@@deriving yojson]

type hashtable_t = {
  index: int;
  transactions: string list;
  timestamp: float;
  previous_hash: string;
  nonce: int;
} [@@deriving yojson]

(* compute the hash from all fields except the hash field
 or assuming the hash field is empty *)
let compute_hash (t: t) = 
  let h = { 
    index = t.index;
    transactions = t.transactions;
    timestamp = t.timestamp;
    previous_hash = t.previous_hash;
    nonce = t.nonce
  } in 
  let block_str = Yojson.Safe.to_string (hashtable_t_to_yojson h) in
  Digestif.SHA256.to_hex (Digestif.SHA256.digest_string block_str)

let create index transactions timestamp previous_hash = 
  let b = {
    index = index; 
    transactions = transactions; 
    timestamp = timestamp; 
    hash = "0"; 
    previous_hash = previous_hash;
    nonce = 0;
  } in
  let hash = compute_hash b in
  begin
    b.hash <- hash;
    b
  end

