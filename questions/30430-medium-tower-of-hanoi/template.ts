type Hanoi<
  N extends number,
  From = 'A',
  To = 'B',
  Intermediate = 'C',
  Counter extends 1[] = [],
> = Counter['length'] extends N
  ? []
  : [
      ...Hanoi<N, From, Intermediate, To, [...Counter, 1]>,
      [From, To],
      ...Hanoi<N, Intermediate, To, From, [...Counter, 1]>,
    ]
