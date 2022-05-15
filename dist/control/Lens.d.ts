import * as Maybe from "../data/Maybe";
import * as Either from "../data/Either";
import { Function } from "ts-toolbelt";
export declare type GetterFn<A, B> = Function.Function<[A], B>;
export declare type SetterFn<A, B> = Function.Function;
export declare type Lens<A, B> = {
    get: GetterFn<A, B>;
    set: SetterFn<A, B>;
};
export declare const lens: <A, B>(getter: GetterFn<A, B>, setter: SetterFn<A, B>) => Lens<A, B>;
declare function _view<A, B>(lens: Lens<A, B>): (data: A) => B;
declare function _view<A, B>(lens: Lens<A, B>, data: A): B;
export declare const view: typeof _view;
declare function _viewE<A, B>(lens: Lens<A, Maybe.Maybe<B>>): (error: string, data?: A) => Either.Either<string, B>;
declare function _viewE<A, B>(lens: Lens<A, Maybe.Maybe<B>>, error: string): (data: A) => Either.Either<string, B>;
declare function _viewE<A, B>(lens: Lens<A, Maybe.Maybe<B>>, error: string, data: A): Either.Either<string, B>;
export declare const viewE: typeof _viewE;
declare function _set<A, B>(lens: Lens<A, B>): (val: B, data: A) => A;
declare function _set<A, B>(lens: Lens<A, B>, val: B): (data: A) => A;
declare function _set<A, B>(lens: Lens<A, B>, val: B, data: A): A;
export declare const set: typeof _set;
declare function _over<A, B>(lens: Lens<A, B>): (f: (b: B) => B, data: A) => A;
declare function _over<A, B>(lens: Lens<A, B>, f: (b: B) => B): (data: A) => A;
declare function _over<A, B>(lens: Lens<A, B>, f: (b: B) => B, data: A): A;
export declare const over: typeof _over;
export declare const pipe: <A, B>(...lenses: Lens<any, any>[]) => Lens<A, B>;
export declare const compose: <A, B>(...lenses: Lens<any, any>[]) => Lens<A, B>;
export declare const optional: <A>(fallback: A) => Lens<Maybe.Maybe<A>, A>;
export declare const head: Lens<any[], Maybe.Maybe<any>>;
export declare const tail: Lens<any[], Maybe.Maybe<any[]>>;
export declare const index: <A>(i: number) => Lens<A[], Maybe.Maybe<A>>;
export declare const prop: <A>(k: string) => Lens<Record<string, A>, Maybe.Maybe<A>>;
export {};
