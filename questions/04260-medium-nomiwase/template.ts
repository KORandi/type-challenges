type AllCombinations<
  S extends string,
  T extends string = S,
> = S extends `${infer L}${infer R}`
  ?
  | `${L}${AllCombinations<R>}`
  | (`${R}${L}` extends T
    ? ''
    : AllCombinations<`${R}${L}`, T>)
  : ''

type X1 = AllCombinations<''>
type X2 = AllCombinations<'A'>
type X3 = AllCombinations<'AB'>
type X4 = AllCombinations<'ABC'>
type X5 = AllCombinations<'ABCD'>
