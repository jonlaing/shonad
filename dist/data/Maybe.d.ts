import { Function } from "ts-toolbelt";
import { Monad } from "../control/Monad";
export declare abstract class Maybe<A> extends Monad<A> {
    static pure(a: any): Just<any>;
    static return_: typeof Maybe.pure;
}
declare function _fmap<F extends Function.Function>(f: F): (x: Maybe<Function.Parameters<F>[0]>) => Maybe<Function.Return<F>>;
declare function _fmap<F extends Function.Function>(f: F, x: Maybe<Function.Parameters<F>[0]>): Maybe<Function.Return<F>>;
export declare const fmap: typeof _fmap;
declare function _apply<F extends Function.Function>(f: Maybe<F>): (x: Maybe<Function.Parameters<F>[0]>) => Maybe<Function.Return<F>>;
declare function _apply<F extends Function.Function>(f: Maybe<F>, x: Maybe<Function.Parameters<F>[0]>): Maybe<Function.Return<F>>;
export declare const apply: typeof _apply;
declare function _apply_<A, B>(x: Maybe<A>): (f: Maybe<Function.Function<[A], B>>) => Maybe<B>;
declare function _apply_<A, B>(x: Maybe<A>, f: Maybe<Function.Function<[A], B>>): Maybe<B>;
export declare const apply_: typeof _apply_;
declare function _bind<A, B>(x: Maybe<A>): (f: Function.Function<[A], Maybe<B>>) => Maybe<B>;
declare function _bind<A, B>(x: Maybe<A>, f: Function.Function<[A], Maybe<B>>): Maybe<B>;
export declare const bind: typeof _bind;
export declare const pure: typeof Maybe.pure;
export declare const return_: typeof Maybe.pure;
export declare class Just<A> extends Maybe<A> {
    isJust: (a?: any) => boolean;
    isNothing: (a?: any) => boolean;
    fmap: <B>(f: (a: A) => B) => Maybe<B>;
    apply: (f: Maybe<Function.Function>) => Maybe<any>;
    bind: (f: (a: any) => Maybe<any>) => Maybe<any>;
}
export declare class Nothing<A> extends Maybe<A> {
    isJust: (a?: any) => boolean;
    isNothing: (a?: any) => boolean;
    fmap: <B>(f: (a: A) => any) => Maybe<B>;
    apply: (f: Maybe<Function.Function>) => Maybe<any>;
    bind: (f: (a: any) => Maybe<any>) => this;
}
export declare const just: <A>(x: A) => Just<A>;
export declare const nothing: <A>(x?: A | undefined) => Nothing<A>;
export declare const isJust: (x: Maybe<any>) => boolean;
export declare const isNothing: (x: Maybe<any>) => boolean;
declare function _maybe<A, B>(fallback: B): (f: Function.Function<[A], B>, x: Maybe<A>) => B;
declare function _maybe<A, B>(fallback: B, f: Function.Function<[A], B>): (x: Maybe<A>) => B;
declare function _maybe<A, B>(fallback: B, f: Function.Function<[A], B>, x: Maybe<A>): B;
export declare const maybe: typeof _maybe;
declare function _fromMaybe<A>(fallback: A): (x: Maybe<A>) => A;
declare function _fromMaybe<A>(fallback: A, x: Maybe<A>): A;
export declare const fromMaybe: typeof _fromMaybe;
export declare const maybeNil: <A>(a: A | undefined) => Maybe<A>;
export declare const listToMaybe: (a: any[]) => Maybe<any>;
export declare const maybeToList: <A>(x: Maybe<A>) => A[];
export declare const catMaybes: <A>(xs: Maybe<A>[]) => A[];
declare function _mapMaybe<A, B>(f: Function.Function<[A], Maybe<B>>): (as: A[]) => B[];
declare function _mapMaybe<A, B>(f: Function.Function<[A], Maybe<B>>, as: A[]): B[];
export declare const mapMaybe: typeof _mapMaybe;
export declare type MaybeRecord<T extends Record<string, any>> = {
    [k in keyof T]: Maybe<T[k]>;
};
export declare const maybeRecord: <T extends Record<string, any>>(x: T) => MaybeRecord<T>;
export declare const equals: Function.Curry<(<A>(a: A, mx: Maybe<A>) => boolean)>;
export declare const or: Function.Curry<(<A, B>(f1: () => Maybe<B>, f0: () => Maybe<A>) => Maybe<A> | Maybe<B>)>;
export {};
