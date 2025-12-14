type Shift<T extends Array<unknown>> = T extends [infer _, ...infer Rest] ? Rest : []
