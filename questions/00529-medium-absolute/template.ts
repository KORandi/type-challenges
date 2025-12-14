type Absolute<T extends number | string | bigint> = `${T}` extends `${infer L}${infer R}`
  ? L extends '-'
    ? R
    : `${T}`
  : `${T}`
