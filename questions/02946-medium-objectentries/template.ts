type ObjectEntries<T> =
Required<T> extends infer U
  ? { [P in keyof U]: [P, [U[P]] extends [never] ? undefined : U[P]] }[keyof U]
  : never
