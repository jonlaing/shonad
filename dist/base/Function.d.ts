import { Function } from "ts-toolbelt";
/**
 * Helper type to make writing higher order functions less of
 * a slog.
 */
export declare type Function<A = any, B = any> = (a: A) => B;
/** Helper type to make writing filter functions less of
 * a slog
 */
export declare type Predicate<A> = (a: A) => boolean;
/**
 * Curries N arguments for the supplied function.
 *
 * @example
 *
 * ```typescript
 * const add = (a: number, b: number) => number
 * const addC = curryN(1, add)
 * const add3 = addC(3)
 *
 * add3(4) // -> 7
 * ```
 *
 * @see curry
 *
 * @param f - Function to be curried
 * @returns A curried function
 */
export declare const curryN: <Fn extends Function.Function<any, any>>(n: number, f: Fn) => Function.Curry<Fn>;
/**
 * Curries all arguments for the supplied function.
 *
 * @example
 * ```typescript
 * const add = (a: number, b: number) => number
 * const addC = curry(add)
 * const add3 = addC(3)
 *
 * add3(4) // -> 7
 * ```
 *
 * @see curryN
 *
 * @param f - Function to be curried
 * @returns A curried function
 */
export declare const curry: <Fn extends Function.Function<any, any>>(f: Fn) => Function.Curry<Fn>;
declare function _compose<A, B>(...funcs: Function.Function[]): Function<A, B>;
/**
 * Composes functions together, right-to-left.
 *
 * @example
 *
 * ```typescript
 * compose(f, g, h)(x) === f(g(h(x)))
 * ```
 *
 * @see pipe
 *
 * @param funcs - A variadic list of functions to compose
 * @returns A right-to-left composition of the supplied functions
 */
export declare const compose: typeof _compose;
interface Chainable<A> {
    bind: (b: any) => Chainable<any>;
}
declare function _composeK<C extends Chainable<any> = Chainable<any>>(...funcs: Function.Function<any, Chainable<any>>[]): Function<any, C>;
/**
 * Returns right-to-left Kleisi composition of supplied functions.
 *
 * @example
 *
 * ```typescript
 * composeK(
 *  maybe.fmap(num.add(4)),
 *  dict.get('b),
 *  dict.get('a'),
 * )({ a: { b: 3 }}) // -> 7
 * ```
 *
 * @see pipeK
 * @see compose
 * @see pipe
 *
 *
 * @param funcs - variadic list of functions that return a Monad
 * @returns right-to-left composition of supplied function
 */
export declare const composeK: typeof _composeK;
/**
 * Returns left-to-right Kleisi composition of supplied functions.
 *
 * @example
 *
 * ```typescript
 * composeK(
 *  dict.get('a'),
 *  dict.get('b),
 *  maybe.fmap(num.add(4)),
 * )({ a: { b: 3 }}) // -> 7
 * ```
 *
 * @see composeK
 * @see compose
 * @see pipe
 *
 *
 * @param funcs - variadic list of functions that return a Monad
 * @returns left-to-right composition of supplied function
 */
export declare const pipeK: typeof _composeK;
/**
 * Composes functions together, left-to-right.
 *
 * @example
 *
 * ```typescript
 * pipe(f, g, h)(x) === h(g(f(x)))
 * ```
 *
 * @see compose
 *
 * @param funcs - A variadic list of functions to compose
 * @returns A left-to-right composition of the supplied functions
 */
export declare const pipe: typeof _compose;
/**
 * Returns a function that always returns the same value regardless
 * of the input.
 *
 * @example
 *
 * ```typescript
 * const true_ = always(true)
 * ```
 *
 * @param x - value to always return
 * @returns (a?: any) => x
 */
export declare const always: <A>(x: A) => (a?: any) => A;
export declare const false_: (a?: any) => boolean;
export declare const true_: (a?: any) => boolean;
export declare const identity: <A>(x: A) => A;
declare function _flip<F extends Function.Function, A extends Parameters<F>[0] = Parameters<F>[0], B extends Parameters<F>[1] = Parameters<F>[0]>(f: F): {
    (b: B, a: A): Function.Return<F>;
    (b: B): (a: A) => Function.Return<F>;
};
declare function _flip<F extends Function.Function, A extends Parameters<F>[0] = Parameters<F>[0], B extends Parameters<F>[1] = Parameters<F>[0]>(f: F, b: Parameters<F>[1]): (a: Parameters<F>[0]) => Function.Return<F>;
declare function _flip<F extends Function.Function, A extends Parameters<F>[0] = Parameters<F>[0], B extends Parameters<F>[1] = Parameters<F>[0]>(f: F, b: B, a: A): Function.Return<F>;
/**
 * Flips the first two paramters of a function.
 *
 * @remarks This is a curried function
 *
 * @example
 *
 * ```typescript
 * const lessThan = (a: number, b: number) => a < b
 * const greaterThan = flip(lessThan)
 * ```
 *
 * @param f - (a: A, b: B) => C
 * @param [b] B
 * @param [a] A
 * @returns f(a, b)
 */
export declare const flip: typeof _flip;
declare function _fmap<A, B, C>(f: Function<B, C>): (x: Function<A, B>) => Function<A, C>;
declare function _fmap<A, B, C>(f: Function<B, C>, x: Function<A, B>): Function<A, C>;
/**
 * Implementing {@link Functor} for Function Arrows. This is synonymous
 * with {@link compose}.
 *
 * @param f - b => c
 * @param x - a => b
 * @returns a => c
 */
export declare const fmap: typeof _fmap;
/**
 * Helper class to perform tail recursive calls. It's really only
 * exported to assist with typing.
 *
 * @see {@link rec}
 */
export declare class Rec<T> {
    f: () => any;
    constructor(f: () => T);
    run(): T;
}
/**
 * Tail call recursion helper
 * @example
 * ```typescript
 * function factorial(n: number): number {
 *   const fac = (n: number, acc: number): Rec<number> =>
 *     rec<number>(() => (n < 2 ? acc : fac(n - 1, n * acc)));
 *
 *   return fac(n, 1).run();
 * }
 *
 * factorial(6); // 720
 * ```
 * @param f function to perform tail calls
 * @returns
 */
export declare const rec: <T>(f: () => any) => Rec<T>;
export {};
