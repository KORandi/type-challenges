type PartialByKeys<T, K extends keyof T = keyof T> =
{ [P in Exclude<keyof T, K> ]: T[P] } & { [P in K]?: T[P] } extends infer O
  ? { [P in keyof O]: O[P] }
  : never
