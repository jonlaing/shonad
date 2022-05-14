import * as Maybe from "../data/Maybe";
import * as Either from "../data/Either";
export declare type GetterFn<A, B> = (a: A) => B;
export declare type SetterFn<A, B> = (b: B, a: A) => A;
export declare type Lens<A, B> = {
    get: GetterFn<A, B>;
    set: SetterFn<A, B>;
};
export declare const lens: <A, B>(getter: GetterFn<A, B>, setter: SetterFn<A, B>) => Lens<A, B>;
export declare function view<A, B>(lens: Lens<A, B>): (data: A) => B;
export declare function view<A, B>(lens: Lens<A, B>, data: A): B;
export declare function viewE<A, B>(lens: Lens<A, Maybe.Maybe<B>>): (error: string, data?: A) => Either.Either<string, B>;
export declare function viewE<A, B>(lens: Lens<A, Maybe.Maybe<B>>, error: string): (data: A) => Either.Either<string, B>;
export declare function viewE<A, B>(lens: Lens<A, Maybe.Maybe<B>>, error: string, data: A): Either.Either<string, B>;
export declare const set: <A, B>(lens: Lens<A, B>, val: B, data: A) => A;
export declare function over<A, B>(lens: Lens<A, B>): (f: (b: B) => B, data?: A) => A;
export declare function over<A, B>(lens: Lens<A, B>, f: (b: B) => B): (data: A) => A;
export declare function over<A, B>(lens: Lens<A, B>, f: (b: B) => B, data: A): A;
export declare const compose: <A, B>(l0: Lens<A, B>, l1: Lens<A, B>) => Lens<A, B>;
export declare const pipe: <A, B>(l0: Lens<A, B>, l1: Lens<A, B>) => Lens<A, B>;
export declare const optional: <A>(fallback: A) => Lens<Maybe.Maybe<A>, A>;
export declare const head: Lens<any[], Maybe.Maybe<any>>;
export declare const tail: Lens<any[], Maybe.Maybe<any[]>>;
export declare const index: (i: number) => Lens<any[], Maybe.Maybe<any>>;
export declare const prop: <A extends Record<string, any>, K extends keyof A = keyof A>(k: K) => Lens<A, Maybe.Maybe<A[K]>>;
