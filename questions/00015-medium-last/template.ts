type Last<T extends any[]> = T extends [...infer _, infer T1] ? T1 : never
