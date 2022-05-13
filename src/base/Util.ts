export const isNil = (a: any): boolean => a === undefined || a === null;

export function eq<T>(a: T): (b: T) => boolean;
export function eq<T>(a: T, b: T): boolean;
export function eq<T>(a: T, b?: T): any {
  if (b === undefined) return (b: T) => eq(a, b);
  return a === b;
}

export function eqBy<T, U>(f: (x: T) => U): (a: T, b: T) => boolean;
export function eqBy<T, U>(f: (x: T) => U, a: T): (b: T) => boolean;
export function eqBy<T, U>(f: (x: T) => U, a: T, b: T): boolean;
export function eqBy<T, U>(f: (x: T) => U, a?: T, b?: T): any {
  if (a === undefined) return (a: T, b: T) => eqBy(f, a, b);
  if (b === undefined) return (b: T) => eqBy(f, a, b);

  return eq(f(a), f(b));
}
