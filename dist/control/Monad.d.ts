import { Function } from "ts-toolbelt";
import { Applicative, StaticApplyFn } from "./Applicative";
import * as Fn from "../base/Function";
export declare type StaticBindFn<T extends Monad<any>, U extends Monad<any>> = Function.Curry<Function.Function<[any, U], T>>;
export declare abstract class Monad<A> extends Applicative<A> {
    static bind: Function.Curry<(x: Monad<any>, f: (a: any) => Monad<any>) => Monad<any>>;
    static apply: StaticApplyFn<Monad<Function.Function>, Monad<any>>;
    abstract bind: (f: (a: any) => Monad<any>) => Monad<any>;
}
declare const fixYield: <A>(val: any) => A;
export declare type DoFuncReturn<T> = Generator<T, any, T | undefined>;
export declare const makeDo: <T>(pure: Fn.Function<any, T>, bind: Function.Function<[T, Fn.Function<any, T>], T>) => (f: (fix: typeof fixYield) => DoFuncReturn<T>) => T;
export {};
