type MergeObj<T> = {
  [K in keyof T]: T[K]
}

type JSONSchema2TSProps =
  |
  {
    type: 'string'
    enum?: string[]
  }
  |
  {
    type: 'boolean'
    enum?: boolean[]
  }
  |
  {
    type: 'number'
    enum?: number[]
  }
  |
  {
    type: 'object'
    properties?: Record<PropertyKey, JSONSchema2TSProps>
    required?: string[]
  }
  |
  {
    type: 'array'
    items?: JSONSchema2TSProps
  }

type JSONSchema2TS<T extends JSONSchema2TSProps> =
T extends { type: 'string', enum: infer E extends string[] }
  ? E[number]
  : T extends { type: 'boolean', enum: infer E extends boolean[] }
    ? E[number]
    : T extends { type: 'number', enum: infer E extends number[] }
      ? E[number]
      : T extends { type: 'string' }
        ? string
        : T extends { type: 'boolean' }
          ? boolean
          : T extends { type: 'number' }
            ? number
            : T extends { type: 'object', properties: infer P extends Record<PropertyKey, JSONSchema2TSProps> }
              ? T extends { required: infer R extends Array<keyof P> }
                ? MergeObj<
                  { [K in R[number]]: JSONSchema2TS<P[K]> }
                   &
                  { [K in Exclude<keyof P, R[number]>]?: JSONSchema2TS<P[K]> }
                  >
                : { [K in keyof P]?: JSONSchema2TS<P[K]> }
              : T extends { type: 'object' }
                ? Record<string, unknown>
                : T extends { type: 'array', items: infer I extends JSONSchema2TSProps }
                  ? JSONSchema2TS<I>[]
                  : T extends { type: 'array' }
                    ? unknown[]
                    : never
