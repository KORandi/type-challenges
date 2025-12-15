type ArrayToUnion<T> = T extends [infer L, ...infer R]
  ? L | ArrayToUnion<R>
  : T

type Without<T extends unknown[], U, UU = ArrayToUnion<U>> =
T extends [infer L, ...infer R]
  ? L extends UU
    ? [...Without<R, U, UU>]
    : [L, ...Without<R, U, UU>]
  : T

type Res = Without<[1, 2], 1> // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]> // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]> // expected to be []
