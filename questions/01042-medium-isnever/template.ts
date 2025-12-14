type IsNever<T = unknown> = [T] extends [never] ? true : false
