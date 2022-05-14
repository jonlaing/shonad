import { Function } from "ts-toolbelt";
import { Applicative, StaticApplyFn } from "./Applicative";
export declare type StaticBindFn<T extends Monad<any>, U extends Monad<any>> = Function.Curry<Function.Function<[any, U], T>>;
export declare abstract class Monad<A> extends Applicative<A> {
    static bind: Function.Curry<(x: Monad<any>, f: (a: any) => Monad<any>) => Monad<any>>;
    static apply: StaticApplyFn<Monad<Function.Function>, Monad<any>>;
    abstract bind: (f: (a: any) => Monad<any>) => Monad<any>;
}
