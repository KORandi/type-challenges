type FindAll<
  T extends string,
  P extends string,
  Acc extends unknown[] = [],
> = P extends ''
  ? []
  : T extends `${string}${infer R}`
    ? [
        ...(T extends `${P}${string}` ? [Acc['length']] : []),
        ...FindAll<R, P, [...Acc, unknown]>,
      ]
    : []
