type MyAwaited<T> = T extends PromiseLike<infer R> ? MyAwaited<R> : T
