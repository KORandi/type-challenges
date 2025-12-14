type MyCapitalize<S extends string> = S extends `${infer L}${infer R}`
  ? `${Capitalize<L>}${R}`
  : S
