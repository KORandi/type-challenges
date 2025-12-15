type Trunc<T extends number | string, Agr extends string = ''> = `${T}` extends `${infer L}${infer R}`
  ? L extends '.'
    ? Agr extends '' | '-'
      ? `${Agr}0`
      : Agr
    : Trunc<R, `${Agr}${L}`>
  : Agr
