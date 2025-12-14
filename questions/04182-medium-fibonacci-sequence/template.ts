type Fibonacci<
  T extends number,
  CurrentIndex extends unknown[] = [unknown],
  Prev extends unknown[] = [],
  Current extends unknown[] = [unknown],
> = CurrentIndex['length'] extends T
  ? Current['length']
  : Fibonacci<T, [...CurrentIndex, unknown], Current, [...Prev, ...Current]>
