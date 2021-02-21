type t = {
  difficulty: int;
  mutable unconfirmed_transactions: string list;
  mutable chain: Block.t list;  
} [@@deriving yojson]

val create: unit -> t

val last_block: t -> Block.t

val proof_of_work: int -> Block.t -> string

val add_block: t -> Block.t -> string -> bool

val add_new_transaction: t -> string -> unit

val mine: t -> bool