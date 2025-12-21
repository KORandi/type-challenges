type DeepOmit<T, U extends string> =
U extends `${infer L extends string}.${infer R extends string}`
  ? { [K in keyof T]: K extends L
      ? DeepOmit<T[K], R>
      : T[K] }
  : U extends `${infer L extends string}`
    ?
      {
        [K in keyof Omit<T, L>]: T[K]
      }
    : never
