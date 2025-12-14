type Mutable<T extends Record<PropertyKey, unknown> | Readonly<Array<unknown>>> =
{ -readonly[P in keyof T]: T[P] }
