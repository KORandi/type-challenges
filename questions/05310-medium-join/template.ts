type Join<T extends string[], U extends string | number = ','> =
T extends [infer L extends string, ...infer R extends string[]]
  ? R['length'] extends 0
    ? L
    : `${L}${U}${Join<R, U>}`
  : ''
