import { Function } from "ts-toolbelt";
import { Typeclass } from "../base/Typeclass";
export declare type ExtractFunctorVal<T> = T extends Functor<infer X, any> ? X : never;
export declare type ExtractFunctor<T> = T extends FunctorFactory<infer X, any> ? X : never;
export declare type ExtractFMap<T> = T extends FunctorFactory<any, infer X> ? X : never;
export declare type IsolateFunctor<T extends Functor<any, any>> = Pick<T, "__functor">;
export declare type FMapFn<A = any, B = any, T extends Functor<A, any> = Functor<any, any>, U extends Functor<B, any> = Functor<any, any>> = (f: (a: A) => B, x: T) => U;
export interface FunctorFactory<T extends Functor<any, any>, Fmap extends FMapFn<any, any, T>> extends Typeclass<T> {
    functions: {
        fmap: Fmap;
    };
}
export declare type Functor<T, name extends string> = {
    __functor: string;
};
export declare const implementFunctorClass: <T extends FunctorFactory<any, any>>(name: string, fmap: ExtractFMap<T>) => void;
export declare const makeFunctor: <T, U extends Functor<T, any>>(name: string, x: T) => U;
export declare const fmap: Function.Curry<(f: Function.Function, x: Functor<any, any>) => Functor<any, any>>;
