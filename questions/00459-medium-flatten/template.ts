type Flatten<T extends Array<unknown>> = T extends [infer A, ...infer B]
  ? A extends Array<unknown>
    ? [...Flatten<A>, ...Flatten<B>]
    : [A, ...Flatten<B>]
  : T
