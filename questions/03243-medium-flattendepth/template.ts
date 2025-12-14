type FlattenDepthImpl<
  T extends Array<unknown>,
  D extends number,
  Counter extends unknown[],
> = Counter['length'] extends D
  ? T
  : T extends [infer L, ...infer R extends Array<unknown>]
    ? L extends Array<unknown>
      ? [
          ...FlattenDepthImpl<L, D, [...Counter, unknown]>,
          ...FlattenDepthImpl<R, D, Counter>,
        ]
      : [L, ...FlattenDepthImpl<R, D, Counter>]
    : T

type FlattenDepth<
  T extends Array<unknown>,
  D extends number = 1,
> = FlattenDepthImpl<T, D, []>
