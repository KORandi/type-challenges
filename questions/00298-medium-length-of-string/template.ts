type StrToArray<S> = S extends `${infer _}${infer R}` ? [1, ...StrToArray<R>] : []
type LengthOfString<S extends string> = StrToArray<S>['length']
