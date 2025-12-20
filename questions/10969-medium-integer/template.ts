type Integer<T extends number> = `${T}` extends `${infer N extends number}`
  ? `${N}` extends `${number}.${number}`
    ? never
    : number extends N
      ? never
      : N
  : never
