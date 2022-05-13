export function allPass<T>(fs: ((x: T) => boolean)[]): (x: T) => boolean;
export function allPass<T>(fs: ((x: T) => boolean)[], x: T): boolean;
export function allPass<T>(fs: ((x: T) => boolean)[], x?: T): any {
  if (x === undefined) return (x: T) => allPass(fs, x);

  return fs.reduce((acc, f) => (acc ? f(x) : acc), true);
}

export function and(a: boolean): (b: boolean) => boolean;
export function and(a: boolean, b: boolean): boolean;
export function and(a: boolean, b?: boolean): any {
  if (b === undefined) return (b: boolean) => and(a, b);

  return a && b;
}

export function anyPass<T>(fs: ((x: T) => boolean)[]): (x: T) => boolean;
export function anyPass<T>(fs: ((x: T) => boolean)[], x: T): boolean;
export function anyPass<T>(fs: ((x: T) => boolean)[], x?: T): any {
  if (x === undefined) return (x: T) => anyPass(fs, x);

  return fs.reduce((acc, f) => (acc ? acc : f(x)), false);
}

export function both<T>(
  f: (x: T) => boolean
): (g: (x: T) => boolean, x: T) => boolean;
export function both<T>(
  f: (x: T) => boolean,
  g: (x: T) => boolean
): (x: T) => boolean;
export function both<T>(
  f: (x: T) => boolean,
  g: (x: T) => boolean,
  x: T
): boolean;
export function both<T>(
  f: (x: T) => boolean,
  g?: (x: T) => boolean,
  x?: T
): any {
  if (g === undefined) return (g: (x: T) => boolean, x: T) => both(f, g, x);
  if (x === undefined) return (x: T) => both(f, g, x);

  return f(x) && g(x);
}

export function either<T>(
  f: (x: T) => boolean
): (g: (x: T) => boolean, x: T) => boolean;
export function either<T>(
  f: (x: T) => boolean,
  g: (x: T) => boolean
): (x: T) => boolean;
export function either<T>(
  f: (x: T) => boolean,
  g: (x: T) => boolean,
  x: T
): boolean;
export function either<T>(
  f: (x: T) => boolean,
  g?: (x: T) => boolean,
  x?: T
): any {
  if (g === undefined) return (g: (x: T) => boolean, x: T) => either(f, g, x);
  if (x === undefined) return (x: T) => either(f, g, x);

  return f(x) || g(x);
}

export function not<T>(f: (x: T) => boolean): (x: T) => boolean;
export function not<T>(f: (x: T) => boolean, x: T): boolean;
export function not<T>(f: (x: T) => boolean, x?: T): any {
  if (x === undefined) return (x: T) => not(f, x);

  return !f(x);
}

export function or(a: boolean): (b: boolean) => boolean;
export function or(a: boolean, b: boolean): boolean;
export function or(a: boolean, b?: boolean): any {
  if (b === undefined) return (b: boolean) => or(a, b);

  return a || b;
}

export function unless<T>(
  pred: (x: T) => boolean
): (f: (x: T) => any, x: T) => any;
export function unless<T>(
  pred: (x: T) => boolean,
  f: (x: T) => any
): (x: T) => any;
export function unless<T>(pred: (x: T) => boolean, f: (x: T) => any, x: T): any;
export function unless<T>(
  pred: (x: T) => boolean,
  f?: (x: T) => any,
  x?: T
): any {
  if (f === undefined) return (f: (x: T) => any, x: T) => unless(pred, f, x);
  if (x === undefined) return (x: T) => unless(pred, f, x);

  return pred(x) ? x : f(x);
}

export function when<T>(
  pred: (x: T) => boolean
): (f: (x: T) => any, x: T) => any;
export function when<T>(
  pred: (x: T) => boolean,
  f: (x: T) => any
): (x: T) => any;
export function when<T>(pred: (x: T) => boolean, f: (x: T) => any, x: T): any;
export function when<T>(
  pred: (x: T) => boolean,
  f?: (x: T) => any,
  x?: T
): any {
  if (f === undefined) return (f: (x: T) => any, x: T) => when(pred, f, x);
  if (x === undefined) return (x: T) => when(pred, f, x);

  return pred(x) ? f(x) : x;
}

export function until<T>(pred: (x: T) => boolean): (f: (x: T) => T, x: T) => T;
export function until<T>(pred: (x: T) => boolean, f: (x: T) => T): (x: T) => T;
export function until<T>(pred: (x: T) => boolean, f: (x: T) => T, x: T): T;
export function until<T>(pred: (x: T) => boolean, f?: (x: T) => T, x?: T): any {
  if (f === undefined) return (f: (x: T) => T, x: T) => until(pred, f, x);
  if (x === undefined) return (x: T) => until(pred, f, x);

  return pred(x) ? x : until(pred, f, f(x));
}
