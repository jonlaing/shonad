import { Function } from "ts-toolbelt";
import * as Fn from "../base/Function";
import { Functor } from "./Functor";
export declare type StaticApplyFn<T extends Applicative<Function.Function>, U extends Applicative<any>> = Function.Curry<Function.Function<[T, U], U>>;
export declare abstract class Applicative<A> extends Functor<A> {
    static apply: StaticApplyFn<Applicative<Function.Function>, Applicative<any>>;
    abstract fmap: (f: (a: A) => any) => Applicative<any>;
    abstract apply: (f: any) => Applicative<any>;
}
/**
 * Utility function meant to be used in tests to ensure your Applicative
 * obeys the applicative laws
 *
 * @remarks
 *
 * Since all Applicatives are Functors, you should also
 * use {@link obeysFunctorLaws} in your tests.
 *
 * @param pure - x => M x
 * @param f - x => y
 * @param u - M (x => y => z)
 * @param v - M x
 * @param w - M y
 * @returns `true` or `false`
 */
export declare function obeysApplicativeLaws<U extends Applicative<any>>(pure: (a: any) => U, x: any, f: Fn.Function<any, any>, u: Applicative<(a: any) => (b: any) => any>, v: U, w: U): boolean;
