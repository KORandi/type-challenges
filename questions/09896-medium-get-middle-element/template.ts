type GetMiddleElement<T, Agr extends unknown[] = []> =
T extends [infer L, ...infer R]
  ? R['length'] extends [...Agr, L]['length']
    ? [[...Agr, L][Agr['length']], R[0]]
    : R['length'] extends Agr['length']
      ? [L]
      : GetMiddleElement<R, [...Agr, L]>
  : T
