type IsOdd<T extends number> =
  number extends T ? false :
  `${T}` extends `${string}${1 | 3 | 5 | 7 | 9}` ?
    `${T}` extends `${string}${'e' | 'E' | '.'}${string}` ? false : true
    : false
