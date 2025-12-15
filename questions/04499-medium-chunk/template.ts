type ChunkImpl<
  T extends readonly unknown[],
  U extends number,
  Agr extends unknown[] = [],
  Counter extends unknown[] = [],
> = T extends readonly [infer L, ...infer R]
  ? Counter['length'] extends U
    ? [Agr, ...ChunkImpl<R, U, [L], [unknown]>]
    : ChunkImpl<R, U, [...Agr, L], [...Counter, unknown]>
  : Agr extends [] ? [] : [Agr]

type Chunk<T extends readonly unknown[], U extends number> = ChunkImpl<T, U>

type Element = { name: string, value: unknown }

function processChunk(data: Chunk<[Element, Element, Element, Element], 2>) {
  // eslint-disable-next-line no-console
  console.log(data)
}

processChunk([[{ name: '', value: undefined }, { name: 'string', value: 'unknown' }], [{ name: 'string', value: 'unknown' }, { name: 'string', value: 'unknown' }]])
