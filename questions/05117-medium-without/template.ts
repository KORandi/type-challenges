type ArrayToUnion<T> = T extends [infer L, ...infer R]
  ? L | ArrayToUnion<R>
  : T

type Without<T extends unknown[], U, UU = ArrayToUnion<U>> =
T extends [infer L, ...infer R]
  ? L extends UU
    ? [...Without<R, U, UU>]
    : [L, ...Without<R, U, UU>]
  : T
