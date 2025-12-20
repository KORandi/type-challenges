type FirstUniqueCharIndex<T extends string, Acc extends string[] = []> =
T extends `${infer L}${infer R}`
  ? L extends Acc[number]
    ? FirstUniqueCharIndex<R, [...Acc, L]>
    : R extends `${string}${L}${string}`
      ? FirstUniqueCharIndex<R, [...Acc, L]>
      : Acc['length']
  : -1
