type ExtractToObject<T extends Record<PropertyKey, unknown>, U extends PropertyKey> =
  T[U] extends Record<PropertyKey, unknown>
    ? {
        [K in keyof Omit<T, U> | keyof T[U]]: K extends keyof T
          ? T[K]
          : K extends keyof T[U]
            ? T[U][K]
            : never
      }
    : U
