type TupleToNestedObject<T extends Array<unknown>, U> =
T extends [infer L extends string, ...infer R]
  ? { [P in L]: TupleToNestedObject<R, U> }
  : U

type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
