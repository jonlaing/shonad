import { Function } from "ts-toolbelt";
import { Applicative, StaticApplyFn } from "./Applicative";
import * as Fn from "../base/Function";
export declare abstract class Monad<A> extends Applicative<A> {
    static bind: Function.Curry<(x: Monad<any>, f: (a: any) => Monad<any>) => Monad<any>>;
    static apply: StaticApplyFn<Monad<Function.Function>, Monad<any>>;
    abstract bind: (f: Fn.Function<any, Monad<any>>) => Monad<any>;
}
declare const fixYield: <A>(val: any) => A;
export declare type DoFuncReturn<T> = Generator<T, any, T | undefined>;
/**
 * Makes type spcefic `do` notation for a Monad.
 *
 * @remarks In the final do, the generator function takes a parameter that "fixes" the
 * type of the `yield`. Without it, the types don't work properly, because yield defaults
 * to the type of the Monad, rather than the containing type.
 *
 * @example
 *
 * export const _do = makeDo<Maybe<any>>(pure, bind);
 *
 * const ma = maybe.just(1)
 * const mb = maybe.just(2)
 *
 * _do(function* (_) {
 *    const a: number = _(yield ma) // forces ma to be a number
 *    const b: number = _(yield mb) // force mb to be a number
 *
 *    return a + b
 * }) // maybe.just(3)
 *
 * @param pure - the `pure` function from the Applicative interface.
 * @param bind - the `bind` function from the Monad interface
 * @returns `do` notation function that takes a `fix` param to cast Monads into their containing type (See example)
 */
export declare const makeDo: <T extends Monad<any>>(pure: Fn.Function<any, T>, bind: Function.Function<[T, Fn.Function<any, T>], T>) => (f: (fix: typeof fixYield) => DoFuncReturn<T>) => T;
/**
 * Utility function meant to be used in tests to ensure your Monad obeys the monad laws
 *
 * @param mx - M x
 * @param g - x => Monad y
 * @param h - y => Monad z
 * @returns `true` or `false`
 */
export declare function obeysMonadLaws<T extends Monad<any>>(mx: T, g: (a: any) => T, h: (a: any) => T): boolean;
export {};
