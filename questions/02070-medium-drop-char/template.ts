type DropChar<S, C> = S extends `${infer L}${infer R}`
  ? L extends C
    ? DropChar<R, C>
    : `${L}${DropChar<R, C>}`
  : S
