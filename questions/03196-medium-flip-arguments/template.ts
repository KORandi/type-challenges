type FlipArguments<T extends (...args: any) => unknown> =
T extends (...args: infer Args) => unknown
  ? (...args: Reverse<Args>) => ReturnType<T>
  : never
