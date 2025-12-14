type AppendToObject<T extends Record<PropertyKey, unknown>, U extends PropertyKey, V> =
T extends Record<PropertyKey, unknown>
  ? { [K in keyof T | U]: K extends keyof T ? T[K] : V }
  : never
