type Transpose<M extends number[][]> =
M[0] extends infer M0 extends Array<number>
  ? { [K in keyof M0]: M extends infer MK extends Array<number[]>
      ?
        {
          [J in keyof MK]: J extends keyof M
            ? K extends keyof M[J]
              ? M[J][K]
              : never
            : never
        }
      : never
    }
  : []
