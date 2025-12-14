type KebabCase<S extends string> =
  S extends `${infer Head}${infer Tail}`
    ? `${Lowercase<Head>}${Tail extends Uncapitalize<Tail> ? '' : '-'}${KebabCase<Tail>}`
    : S
