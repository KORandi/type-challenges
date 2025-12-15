type WhiteSpace = ' ' | '\t' | '\n'

type TrimRight<S extends string> = S extends `${infer Rest}${WhiteSpace}`
  ? TrimRight<Rest>
  : S

type Trimmed = TrimRight<'   Hello World    '>
