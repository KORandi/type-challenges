type ArrayToUnionPrefix<U extends string, T extends readonly string[]> = [T[number]] extends [never] ? '' : `${U}${T[number]}`

type BEM<B extends string, E extends string[], M extends string[]> =
  `${B}${ArrayToUnionPrefix<'__', E>}${ArrayToUnionPrefix<'--', M>}`
