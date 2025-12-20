type DeepMutable<T extends object> =
  T extends (...args: any[]) => any
    ? T
    : T extends object
      ? { -readonly [K in keyof T]: T[K] extends object ? DeepMutable<T[K]> : T[K] }
      : T
