import { Function } from "ts-toolbelt";
import * as Maybe from "../data/Maybe";

/**
 * Helper type to make writing higher order functions less of
 * a slog.
 */
export type Function<A = any, B = any> = (a: A) => B;

/** Helper type to make writing filter functions less of
 * a slog
 */
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

/**
 * Curries N arguments for the supplied function.
 *
 * @example
 *
 * const add = (a: number, b: number) => number
 * const addC = curryN(1, add)
 * const add3 = addC(3)
 *
 * add3(4) // -> 7
 *
 * @see curry
 *
 * @param f - Function to be curried
 * @returns A curried function
 */
export const curryN = <Fn extends Function.Function>(
  n: number,
  f: Fn
): Function.Curry<Fn> => _curryN(n, [], f);

/**
 * Curries all arguments for the supplied function.
 *
 * @example
 *
 * const add = (a: number, b: number) => number
 * const addC = curry(add)
 * const add3 = addC(3)
 *
 * add3(4) // -> 7
 *
 * @see curryN
 *
 * @param f - Function to be curried
 * @returns A curried function
 */
export const curry = <Fn extends Function.Function>(
  f: Fn
): Function.Curry<Fn> => curryN(f.length, f);

declare function _compose<A, B>(...funcs: Function.Function[]): Function<A, B>;

/**
 * Composes functions together, right-to-left.
 *
 * @example
 *
 * compose(f, g, h)(x) === f(g(h(x)))
 *
 * @see pipe
 *
 * @param funcs - A variadic list of functions to compose
 * @returns A right-to-left composition of the supplied functions
 */
export const compose: typeof _compose = (...funcs: Function[]) => {
  return (x: any) => funcs.reduceRight((acc: any, f: Function) => f(acc), x);
};

interface Chainable<A> {
  bind: (b: any) => Chainable<any>;
}
declare function _composeK<C extends Chainable<any> = Chainable<any>>(
  ...funcs: Function.Function<any, Chainable<any>>[]
): Function<any, C>;

/**
 * Returns right-to-left Kleisi composition of supplied functions.
 *
 * @example
 *
 * composeK(
 *  maybe.fmap(num.add(4)),
 *  dict.get('b),
 *  dict.get('a'),
 * )({ a: { b: 3 }}) // -> 7
 *
 * @see pipeK
 * @see compose
 * @see pipe
 *
 *
 * @param funcs - variadic list of functions that return a Monad
 * @returns right-to-left composition of supplied function
 */
export const composeK: typeof _composeK = <
  C extends Chainable<any> = Chainable<any>
>(
  ...funcs: Function<any, Chainable<any>>[]
) => {
  const copy = funcs.slice();
  const [hd, ...tl] = copy.reverse();
  return (x: any): C =>
    tl.reduce(
      (acc: Chainable<any>, f: Function<any, Chainable<any>>) => acc.bind(f),
      hd(x)
    ) as C;
};

/**
 * Returns left-to-right Kleisi composition of supplied functions.
 *
 * @example
 *
 * composeK(
 *  dict.get('a'),
 *  dict.get('b),
 *  maybe.fmap(num.add(4)),
 * )({ a: { b: 3 }}) // -> 7
 *
 * @see composeK
 * @see compose
 * @see pipe
 *
 *
 * @param funcs - variadic list of functions that return a Monad
 * @returns left-to-right composition of supplied function
 */
export const pipeK: typeof _composeK = <
  C extends Chainable<any> = Chainable<any>
>(
  ...funcs: Function<any, Chainable<any>>[]
) => {
  const [hd, ...tl] = funcs;
  return (x: any): C =>
    tl.reduce(
      (acc: Chainable<any>, f: Function<any, Chainable<any>>) => acc.bind(f),
      hd(x)
    ) as C;
};

/**
 * Composes functions together, left-to-right.
 *
 * @example
 *
 * pipe(f, g, h)(x) === h(g(f(x)))
 *
 * @see compose
 *
 * @param funcs - A variadic list of functions to compose
 * @returns A left-to-right composition of the supplied functions
 */
export const pipe: typeof _compose = (...funcs: Function.Function[]) => {
  return (x: any) => funcs.reduce((acc: any, f: (y: any) => any) => f(acc), x);
};

/**
 * Returns a function that always returns the same value regardless
 * of the input.
 *
 * @example
 *
 * const true_ = always(true)
 *
 * @param x - value to always return
 * @returns (a?: any) => x
 */
export const always =
  <A>(x: A): ((a?: any) => A) =>
  () =>
    x;

export const false_ = always(false);

export const true_ = always(true);

export const identity = <A>(x: A) => x;

/**
 * Flips the first two paramters of a function.
 *
 * @remarks This is a curried function
 *
 * @example
 *
 * const lessThan = (a: number, b: number) => a < b
 * const greaterThan = flip(lessThan)
 *
 * @param f - (a: A, b: B) => C
 * @param [b] B
 * @param [a] A
 * @returns f(a, b)
 */
export const flip = curry(
  <F extends Function.Function>(
    f: F,
    b: Parameters<F>[1],
    a: Parameters<F>[0]
  ) => {
    return f(a, b);
  }
);

declare function _fmap<A, B, C>(
  f: Function<B, C>
): (x: Function<A, B>) => Function<A, C>;
declare function _fmap<A, B, C>(
  f: Function<B, C>,
  x: Function<A, B>
): Function<A, C>;

/**
 * Implementing Functor for Function Arrows. This is synonymous
 * with {@link compose}.
 *
 * @param f - b => c
 * @param x - a => b
 * @returns a => c
 */
export const fmap: typeof _fmap = curry(
  <A, B, C>(f: Function<B, C>, x: Function<A, B>): Function<A, C> =>
    compose(f, x)
);
