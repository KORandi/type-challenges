type TupleToUnion<T extends Readonly<Array<unknown>>> = T extends [infer T1, ...infer T2]
  ? T1 | TupleToUnion<T2>
  : never
