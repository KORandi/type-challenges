type GreaterThan<T extends number, U extends number, Counter extends Array<unknown> = []> =
Counter['length'] extends T
  ? false
  : Counter['length'] extends U
    ? true
    : GreaterThan<T, U, [unknown, ...Counter]>
