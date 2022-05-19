"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fmap = exports.flip = exports.identity = exports.true_ = exports.false_ = exports.always = exports.pipe = exports.pipeK = exports.composeK = exports.compose = exports.curry = exports.curryN = void 0;
const _curryN = (n, args, f) => {
    if (n <= 0)
        return f(...args);
    return function () {
        return _curryN(n - arguments.length, [...args, ...arguments], f);
    };
};
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
const curryN = (n, f) => _curryN(n, [], f);
exports.curryN = curryN;
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
const curry = (f) => (0, exports.curryN)(f.length, f);
exports.curry = curry;
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
const compose = (...funcs) => {
    return (x) => funcs.reduceRight((acc, f) => f(acc), x);
};
exports.compose = compose;
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
const composeK = (...funcs) => {
    const copy = funcs.slice();
    const [hd, ...tl] = copy.reverse();
    return (x) => tl.reduce((acc, f) => acc.bind(f), hd(x));
};
exports.composeK = composeK;
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
const pipeK = (...funcs) => {
    const [hd, ...tl] = funcs;
    return (x) => tl.reduce((acc, f) => acc.bind(f), hd(x));
};
exports.pipeK = pipeK;
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
const pipe = (...funcs) => {
    return (x) => funcs.reduce((acc, f) => f(acc), x);
};
exports.pipe = pipe;
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
const always = (x) => () => x;
exports.always = always;
exports.false_ = (0, exports.always)(false);
exports.true_ = (0, exports.always)(true);
const identity = (x) => x;
exports.identity = identity;
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
exports.flip = (0, exports.curry)((f, b, a) => {
    return f(a, b);
});
/**
 * Implementing {@link Functor} for Function Arrows. This is synonymous
 * with {@link compose}.
 *
 * @param f - b => c
 * @param x - a => b
 * @returns a => c
 */
exports.fmap = (0, exports.curry)((f, x) => (0, exports.compose)(f, x));
//# sourceMappingURL=Function.js.map