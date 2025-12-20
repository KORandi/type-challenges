type CountElementNumberToObject<T extends unknown[], Agr extends Record<PropertyKey, unknown[]> = {}, TT = Flatten<T>> =
Includes<T, never> extends true
  ? {}
  : TT extends [infer L extends PropertyKey, ... infer P]
    ? L extends keyof Agr
      ? CountElementNumberToObject<P, {
        [K in keyof Agr]: Agr[K] extends unknown[]
          ? L extends K
            ? [...Agr[K], unknown]
            : Agr[K]
          : never
      } >
      : CountElementNumberToObject<P, Agr & { [K in L]: [unknown] }>
    : {
        [K in keyof Agr]: Agr[K] extends unknown[]
          ? Agr[K]['length']
          : never
      }
