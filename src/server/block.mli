type t = {
  index: int;
  transactions: string list;
  timestamp: float;
  mutable hash: string;
  previous_hash: string;
  mutable nonce: int;
} [@@deriving yojson]

val compute_hash: t -> string

val create: int -> string list -> float -> string -> t