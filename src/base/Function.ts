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
