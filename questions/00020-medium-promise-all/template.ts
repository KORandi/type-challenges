declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
  [P in keyof T]: Awaited<T[P]>
}>
