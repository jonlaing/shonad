import { Function } from "ts-toolbelt";

export type Predicate<A> = (a: A) => boolean;

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

declare function _compose<A, B>(...funcs: Function.Function[]): Function<A, B>;

export const compose: typeof _compose = (...funcs: Function.Function[]) => {
  return (x: any) =>
    funcs.reduceRight((acc: any, f: Function.Function) => f(acc), x);
};

export const pipe: typeof _compose = (...funcs: Function.Function[]) => {
  return (x: any) => funcs.reduce((acc: any, f: (y: any) => any) => f(acc), x);
};

export const always =
  <A>(x: A): ((a?: any) => A) =>
  () =>
    x;

export const false_ = always(false);

export const true_ = always(true);

export const identity = <A>(x: A) => x;

// declare function _flip<F extends Function.Function>(
//   f: F
// ): (a: Parameters<F>[1], b: Parameters<F>[0]) => Function.Return<F>;
// declare function _flip<F extends Function.Function>(
//   f: F,
//   a: Parameters<F>[1]
// ): (b: Parameters<F>[0]) => Function.Return<F>;
// declare function _flip<F extends Function.Function>(
//   f: F,
//   a: Parameters<F>[1],
//   b: Parameters<F>[0],
//   ...args: any[]
// ): Function.Return<F>;

export const flip = curry(
  <F extends Function.Function>(
    f: F,
    a: Parameters<F>[1],
    b: Parameters<F>[0]
  ) => {
    return f(b, a);
  }
);

export type Function<A, B> = Function.Function<[A], B>;

declare function _fmap<A, B, C>(
  f: Function<B, C>
): (x: Function<A, B>) => Function<A, C>;
declare function _fmap<A, B, C>(
  f: Function<B, C>,
  x: Function<A, B>
): Function<A, C>;

export const fmap: typeof _fmap = curry(
  <A, B, C>(f: Function<B, C>, x: Function<A, B>): Function<A, C> =>
    compose(f, x)
);
