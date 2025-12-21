type MergeAll<XS> =
XS extends [infer L extends Record<any, any>, ...infer R extends Record<any, any>[]]
  ? MergeAll<R> extends infer S
    ? {
        [K in keyof L | keyof S]: K extends keyof L
          ? K extends keyof S
            ? L[K] | S[K]
            : L[K]
          : K extends keyof S
            ? S[K]
            : never
      }
    : never
  : {}
