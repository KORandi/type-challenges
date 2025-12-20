type ToPrimitive<T> = T extends object ? (
  T extends (...args: unknown[]) => unknown ? Function : {
    [K in keyof T]: ToPrimitive<T[K]>
  }
) : (
  T extends { valueOf: () => infer P } ? P : T
)
