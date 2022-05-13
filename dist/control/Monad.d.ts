import { Applicative, ApplicativeFactory, ApplyFn, PureFn } from "./Applicative";
import { FMapFn } from "./Functor";
export declare type ExtractMonadVal<T> = T extends Monad<infer X, any> ? X : never;
export declare type ExtractMonad<T> = T extends MonadFactory<infer X, any, any, any, any, any> ? X : never;
export declare type Monad<T, name extends string> = {
    __monad: name;
} & Applicative<T, name>;
export declare type BindFn<A = any, B = any, T extends Monad<A, any> = Monad<A, any>, U extends Monad<B, any> = Monad<B, any>> = (x: T, f: (a: A) => U) => U;
export declare type ReturnFn<T extends Monad<any, any>> = (x: ExtractMonadVal<T>) => T;
export interface MonadFactory<T extends Monad<any, any>, FMap extends FMapFn<any, any, T, T>, Pure extends PureFn<T>, Apply extends ApplyFn<any, any, any>, Bind extends BindFn<any, any, T, T>, Return extends ReturnFn<T> | Pure = Pure> extends ApplicativeFactory<T, FMap, Pure, Apply> {
    functions: {
        fmap: FMap;
        pure: Pure;
        apply: Apply;
        return: Return;
        bind: Bind;
    };
}
interface ImplementMonadArgs<T extends Monad<any, any>> {
    fmap: FMapFn<any, any, T, T>;
    pure: PureFn<any>;
    apply: ApplyFn<any, any, any>;
    return?: ReturnFn<any>;
    bind: BindFn<any, any, T, T>;
}
export declare const implementMonadClass: <T extends MonadFactory<any, any, any, any, any, any>>(name: string, { fmap, pure, apply, return: return_, bind, }: ImplementMonadArgs<ExtractMonad<T>>) => void;
export declare const makeMonad: <T, U extends Monad<T, any>>(name: string, x: T) => U;
export declare function bind<A, T extends Monad<A, any>, U extends Monad<any, any>>(x: T): (f: (a: A) => U) => U;
export declare function bind<A, T extends Monad<A, any>, U extends Monad<any, any>>(x: T, f: (a: A) => U): U;
export {};
