import * as Fn from "../base/Function";
import * as Maybe from "../data/Maybe";
import * as Dict from "../data/Dict";
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
declare function _viewE<A, B>(lens: Lens<A, Maybe.Maybe<B>>): {
    (error: string, data: A): Either.Either<string, B>;
    (error: string): (data: A) => Either.Either<string, B>;
};
declare function _viewE<A, B>(lens: Lens<A, Maybe.Maybe<B>>, error: string): (data: A) => Either.Either<string, B>;
declare function _viewE<A, B>(lens: Lens<A, Maybe.Maybe<B>>, error: string, data: A): Either.Either<string, B>;
export declare const viewE: typeof _viewE;
declare function _set<A, B>(lens: Lens<A, B>): {
    (val: B, data: A): A;
    (val: B): (data: A) => A;
};
declare function _set<A, B>(lens: Lens<A, B>, val: B): (data: A) => A;
declare function _set<A, B>(lens: Lens<A, B>, val: B, data: A): A;
export declare const set: typeof _set;
declare function _over<A, B>(lens: Lens<A, B>): {
    (f: (b: B) => B, data: A): A;
    (f: (b: B) => B): (data: A) => A;
};
declare function _over<A, B>(lens: Lens<A, B>, f: (b: B) => B): (data: A) => A;
declare function _over<A, B>(lens: Lens<A, B>, f: (b: B) => B, data: A): A;
export declare const over: typeof _over;
export declare const pipe: <A, B>(...lenses: Lens<any, any>[]) => Lens<A, B>;
export declare const compose: <A, B>(...lenses: Lens<any, any>[]) => Lens<A, B>;
export declare const optional: <A>(fallback: A) => Lens<Maybe.Maybe<A>, A>;
export declare const head: Lens<any[], Maybe.Maybe<any>>;
export declare const tail: Lens<any[], Maybe.Maybe<any[]>>;
export declare const index: <A>(i: number) => Lens<A[], Maybe.Maybe<A>>;
export declare const prop: <A>(k: string) => Lens<any, Maybe.Maybe<A>>;
/**
 * Forks a lens. If the second lens returns `Nothing` then it will use
 * the first lens.
 *
 * @remarks
 *
 * This is backward from how you might expect `or' to work. This is to
 * support currying and partial application
 *
 * @param l1 - Lens that returns a `Maybe c`
 * @param l0 - Lens that returns a `Maybe b`
 * @returns  a Lens of `Maybe b` or `Maybe c`
 */
export declare const or: <A, B, C>(l1: Lens<A, Maybe.Maybe<C>>, l0: Lens<A, Maybe.Maybe<B>>) => Lens<A, Maybe.Maybe<C> | Maybe.Maybe<B>>;
export declare const when: <A>(pred: Fn.Predicate<A>) => Lens<A[], Maybe.Maybe<A>>;
export declare const nonEmptyString: Lens<string, Maybe.Maybe<string>>;
export declare const nonEmptyList: Lens<any[], Maybe.Maybe<any[]>>;
export declare const nonEmptyDict: Lens<Dict.Dict<any>, Maybe.Maybe<Dict.Dict<any>>>;
declare type LeafsToFallback<T> = T extends string ? string : T extends boolean ? boolean : T extends number ? number : {
    [P in keyof T]: T[P] extends (infer U)[] ? LeafsToFallback<U>[] : LeafsToFallback<T[P]>;
};
declare type LeafsToVals<T> = T extends string ? string : T extends boolean ? boolean : T extends number ? number : {
    [P in keyof T]-?: T[P] extends (infer U)[] ? () => LeafsToVals<U>[] : () => LeafsToVals<Required<T[P]>>;
};
export declare type DictHelper<T> = LeafsToVals<Required<T>>;
/**
 * Transforms an arbitrary Dict into an object that will returns either
 * the value in the Dict or the default value.
 *
 * @example
 * ```typescript
 * interface Thing {
 *  a: number;
 *  b?: number;
 *  c?: {
 *    d: number;
 *    e?: number;
 *  }
 * }
 *
 * const map: Thing = {
 *  a: 1,
 *  b: 2,
 *  c: {
 *    d: 3,
 *    e: 4,
 *  }
 * };
 *
 * const thing: Thing = {
 *  a: 5,
 * };
 *
 * const helper = makeDictHelper(map);
 * const helped = helper(thing);
 * helped.a()       // 5 <-- value in `thing`
 * helped.b()       // 2 <-- value in `map`
 * helped.c().d()   // 3
 * helped.c().e()   // 4
 * ```
 * @param map A map of default values
 * @returns A Dict Lens Helper
 */
export declare const makeDictHelper: <T extends Dict.Dict<any>>(map: LeafsToFallback<T>) => (obj: Maybe.Maybe<T>) => LeafsToVals<Required<T>>;
export {};
