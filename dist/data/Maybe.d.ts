import { ApplyFn } from "../control/Applicative";
import { Monad } from "../control/Monad";
export declare type Just<A> = {
    __val: A;
} & Monad<A, "maybe">;
export declare type Nothing<A> = {} & Monad<A, "maybe">;
export declare type Maybe<A> = Just<A> | Nothing<A>;
declare type MaybeApply<A, B> = ApplyFn<Maybe<(a: A) => B>, Maybe<A>, Maybe<B>>;
export declare const just: <A>(a: A) => Just<A>;
export declare const nothing: <A>(a?: undefined) => Nothing<A>;
export declare const maybe: <A, B>(fallback: B, f: (a: A) => B, x: Maybe<A>) => B;
export declare const isJust: (x: Maybe<any>) => boolean;
export declare const isNothing: (x: Maybe<any>) => boolean;
export declare function fromMaybe<A>(fallback: A): (x: Maybe<A>) => A;
export declare function fromMaybe<A>(fallback: A, x: Maybe<A>): A;
export declare const maybeNil: <A>(a: A | undefined) => Maybe<A>;
export declare const listToMaybe: <A>(a: A[]) => Maybe<A>;
export declare const maybeToList: <A>(x: Maybe<A>) => A[];
export declare const catMaybes: <A>(xs: Maybe<A>[]) => A[];
export declare const mapMaybe: <A, B>(f: (a: A) => Maybe<B>, as: A[]) => B[];
export declare const fmap: <A, B>(f: (a: A) => B, x: Maybe<A>) => Maybe<B>;
export declare const pure: <A>(a: A) => Just<A>;
export declare const apply: MaybeApply<any, any>;
export declare const bind: <A, B>(x: Maybe<A>, f: (a: A) => Maybe<B>) => Maybe<B>;
export declare type MaybeRecord<T extends Record<string, any>> = {
    [k in keyof T]: Maybe<T[k]>;
};
export declare const maybeRecord: <T extends Record<string, any>>(x: T) => MaybeRecord<T>;
export {};
