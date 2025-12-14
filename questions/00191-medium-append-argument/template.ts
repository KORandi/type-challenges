type AppendArgument<Fn extends (...args: any[]) => any, A> =
Fn extends (...args: infer FA) => infer R
  ? (...args: [...FA, A]) => R
  : never
