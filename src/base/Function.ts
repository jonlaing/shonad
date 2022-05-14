import { Function } from "ts-toolbelt";

export type MaybeCurried<F extends Function.Function> = F | Function.Curry<F>;

const _curryN = (
  n: number,
  args: any[],
  f: Function.Function
): Function.Function | any => {
  if (n <= 0) return f(...args);

  return function () {
    return _curryN(n - arguments.length, [...args, ...arguments], f);
  };
};
export const curryN = <Fn extends Function.Function>(
  n: number,
  f: Fn
): Function.Curry<Fn> => _curryN(n, [], f);

export const curry = <Fn extends Function.Function>(
  f: Fn
): Function.Curry<Fn> => curryN(f.length, f);

export const compose: Function.Compose = (...funcs: Function.Function[]) => {
  return (x: any) =>
    funcs.reduceRight((acc: any, f: Function.Function) => f(acc), x);
};

export const pipe: Function.Pipe = (...funcs: Function.Function[]) => {
  return (x: any) => funcs.reduce((acc: any, f: (y: any) => any) => f(acc), x);
};

export const always =
  <A>(x: A): ((a?: any) => A) =>
  () =>
    x;

export const false_ = always(false);

export const true_ = always(true);

export const identity = <A>(x: A) => x;

export const flip = curry(
  <F extends Function.Function>(
    f: F,
    a: Parameters<F>[1],
    b: Parameters<F>[0],
    ...args: any[]
  ) => {
    return f(b, a, ...args);
  }
);
