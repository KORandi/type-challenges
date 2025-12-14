type LookUp<U extends { readonly type: string }, T> = U extends { type: T } ? U : never
