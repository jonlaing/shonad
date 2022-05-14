import { Function } from "ts-toolbelt";
import { Monad } from "../control/Monad";
export declare abstract class Maybe<A> extends Monad<A> {
    static pure(a: any): Just<any>;
    static return_: typeof Maybe.pure;
}
export declare const fmap: import("../control/Functor").StaticFMap<import("../control/Functor").Functor<any>>;
export declare const apply: import("../control/Applicative").StaticApplyFn<Monad<Function.Function<any, any>>, Monad<any>>;
export declare const bind: Function.Curry<(x: Monad<any>, f: (a: any) => Monad<any>) => Monad<any>>;
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
export declare const maybe: Function.Curry<(fallback: any, f: (a: any) => any, x: Maybe<any>) => any>;
export declare const fromMaybe: Function.Curry<(<A>(fallback: A, x: Maybe<A>) => A)>;
export declare const maybeNil: <A>(a: A | undefined) => Maybe<A>;
export declare const listToMaybe: (a: any[]) => Maybe<any>;
export declare const maybeToList: <A>(x: Maybe<A>) => A[];
export declare const catMaybes: <A>(xs: Maybe<A>[]) => A[];
export declare const mapMaybe: Function.Curry<(f: (a: any) => Maybe<any>, as: any[]) => any[]>;
export declare type MaybeRecord<T extends Record<string, any>> = {
    [k in keyof T]: Maybe<T[k]>;
};
export declare const maybeRecord: <T extends Record<string, any>>(x: T) => MaybeRecord<T>;
