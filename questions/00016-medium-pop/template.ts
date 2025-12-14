type Pop<T extends any[]> = T extends [...infer T1, infer _] ? T1 : []
