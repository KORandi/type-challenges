type PasscalAdjCal<T extends number[], Prev extends number = 0> =
T extends [infer L extends number, ...infer R extends number[]]
  ? Prev extends 0
    ? PasscalAdjCal<R, L>
    : [[...ConstructTuple<Prev>, ...ConstructTuple<L>]['length'], ...PasscalAdjCal<R, L>]
  : []

type PascalImpl<N extends number, PreviousPascal extends number[] = []> =
N extends 0
  ? [1]
  : [1, ...PasscalAdjCal<PreviousPascal>, 1]

type Pascal<N extends number, Counter extends unknown[] = [], PreviousPascal extends number[] = []> =
Counter['length'] extends N
  ? []
  : PascalImpl<Counter['length'], PreviousPascal> extends infer PS extends number[]
    ? [PS, ...Pascal<N, [...Counter, unknown], PS>]
    : never
