type CheckRepeatedChars<T extends string, Res extends string = ''> =
T extends `${infer L}${infer R}`
  ? L extends Res
    ? true
    : CheckRepeatedChars<R, Res | L>
  : false
