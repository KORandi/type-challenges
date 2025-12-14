type Flip<T extends Record<PropertyKey, PropertyKey | boolean>> =
{
  [P in keyof T as T[P] extends PropertyKey
    ? T[P]
    : T[P] extends boolean
      ? `${T[P]}`
      : never]: P
}
