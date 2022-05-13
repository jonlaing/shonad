export function compose(...funcs: ((...x: any) => any)[]): (z: any) => any {
  return (x: any) => funcs.reduce((acc: any, f: (y: any) => any) => f(acc), x);
}

export function pipe(...funcs: ((x: any) => any)[]): (z: any) => any {
  return (x: any) =>
    funcs.reduceRight((acc: any, f: (y: any) => any) => f(acc), x);
}

export const always =
  <A>(x: A): (() => A) =>
  () =>
    x;

export const false_ = always(false);

export const true_ = always(true);

export const identity = <A>(x: A) => x;

export function flip<F extends (b: B, a: A) => any, A, B>(
  f: F
): (a: A, b?: B) => ReturnType<F>;
export function flip<F extends (b: B, a: A) => any, A, B>(
  f: F,
  a: A
): (b: B) => ReturnType<F>;
export function flip<F extends (b: B, a: A) => any, A, B>(
  f: F,
  a: A,
  b: B
): ReturnType<F>;
export function flip<F extends (b: B, a: A) => any, A, B>(
  f: F,
  a?: A,
  b?: B
): any {
  if (a === undefined) return (a: A, b: B) => flip(f, a, b);
  if (b === undefined) return (b: B) => flip(f, a, b);

  return f(b, a);
}
