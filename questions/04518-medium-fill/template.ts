type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Active extends boolean = false,
  Counter extends readonly unknown [] = [],
> = Start extends End
  ? T
  : T extends readonly [infer L, ...infer R]
    ? Counter['length'] extends Start
      ? [N, ...Fill<R, N, Start, End, true, [...Counter, unknown]>]
      : Counter['length'] extends End
        ? [L, ...Fill<R, N, Start, End, false, [...Counter, unknown]>]
        : Active extends true
          ? [N, ...Fill<R, N, Start, End, Active, [...Counter, unknown]>]
          : [L, ...Fill<R, N, Start, End, Active, [...Counter, unknown]>]
    : T
