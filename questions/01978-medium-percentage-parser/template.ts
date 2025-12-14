type PercentageParser<T> = [
  T extends `${infer X extends '+' | '-'}${string}` ? X : '',
  T extends `${T extends `${infer X extends '+' | '-'}${string}` ? X : ''}${infer X}${T extends `${string}${infer X extends '%'}` ? X : ''}` ? X : '',
  T extends `${string}${infer X extends '%'}` ? X : '',
]
