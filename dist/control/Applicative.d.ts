import { Function } from "ts-toolbelt";
import { Functor } from "./Functor";
export declare type StaticApplyFn<T extends Applicative<Function.Function>, U extends Applicative<any>> = Function.Curry<Function.Function<[T, U], U>>;
export declare abstract class Applicative<A> extends Functor<A> {
    static apply: StaticApplyFn<Applicative<Function.Function>, Applicative<any>>;
    abstract apply: (f: any) => Applicative<any>;
}
