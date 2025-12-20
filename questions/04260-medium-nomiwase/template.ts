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
