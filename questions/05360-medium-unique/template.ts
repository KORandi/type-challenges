type Unique<T extends unknown[], Res extends unknown[] = []> =
T extends [infer L, ...infer R]
  ? IndexOf<Res, L> extends -1
    ? Unique<R, [...Res, L]>
    : Unique<R, Res>
  : Res
