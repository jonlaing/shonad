import { Typeclass } from "../base/Typeclass";
export declare abstract class Functor<T> extends Typeclass<T> {
    static fmap: import("ts-toolbelt/out/Function/Curry").Curry<(<A, B>(f: (a: A) => B, x: Functor<A>) => Functor<any>)>;
    abstract fmap: (f: (a: T) => any) => Functor<any>;
}
/**
 * Utility function meant to be used in tests to ensure your Functor obeys the functor laws
 *
 * @param mx - M x
 * @param f - x => y
 * @param g - y => z
 * @returns `true` or `false`
 */
export declare function obeysFunctorLaws<T extends Functor<any>>(mx: T, f: (a: any) => any, g: (a: any) => any): boolean;
