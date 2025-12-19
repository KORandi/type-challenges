type Utils<L, C extends any[] = [], R = L> =
  C['length'] extends L
    ? R
    : Utils<L, [...C, 0], C['length'] | R>

type NumberRange<L, H> = L | Exclude<Utils<H>, Utils<L>>
