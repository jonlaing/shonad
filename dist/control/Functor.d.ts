import { Function } from "ts-toolbelt";
import { Typeclass } from "../base/Typeclass";
export declare type Mapper = Function.Function<[any], any>;
export declare type StaticFMap<T extends Functor<any>> = Function.Curry<Function.Function<[Mapper, T], T>>;
export declare abstract class Functor<T> extends Typeclass<T> {
    static fmap: StaticFMap<Functor<any>>;
    abstract fmap: (f: (a: T) => any) => Functor<any>;
}
