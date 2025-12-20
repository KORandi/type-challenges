type ParseUrlParams<T extends string> =
T extends `${string}:${infer K}`
  ? K extends `${infer L extends string}/${infer R extends string}`
    ? L | ParseUrlParams<R>
    : K
  : never
