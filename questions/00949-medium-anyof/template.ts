type AnyOf<T extends readonly any[]> =
  T[number] extends false | 0 | 0n | '' | null | undefined | [] | Record<PropertyKey, never> ? true : false
