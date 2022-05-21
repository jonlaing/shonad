import { Function } from "ts-toolbelt";
import * as Maybe from "./Maybe";
export declare type Dict<A> = Record<string, A>;
declare function _get<A extends Dict<any>>(key: string): (dict: A) => Maybe.Maybe<any>;
declare function _get<A extends Dict<any>>(key: string, dict: A): Maybe.Maybe<any>;
export declare const get: typeof _get;
declare function _getUnsafe<A extends Dict<any>>(key: string): (dict: A) => any;
declare function _getUnsafe<A extends Dict<any>>(key: string, dict: A): any;
export declare const getUnsafe: typeof _getUnsafe;
declare function _set<A extends Dict<any>>(key: string): {
    (val: any, dict: A): A;
    (val: any): (dict: A) => A;
};
declare function _set<A extends Dict<any>>(key: string, val: any): (dict: A) => A;
declare function _set<A extends Dict<any>>(key: string, val: any, dict: A): A;
export declare const set: typeof _set;
declare function _unset<A extends Dict<any>>(k: string): (dict: A) => Partial<A>;
declare function _unset<A extends Dict<any>>(k: string, dict: A): Partial<A>;
export declare const unset: typeof _unset;
declare function _eqProps<A extends Dict<any>>(k: string): {
    (d0: A, d1: A): boolean;
    (d0: A): (d1: A) => boolean;
};
declare function _eqProps<A extends Dict<any>>(k: string, d0: A): (d1: A) => boolean;
declare function _eqProps<A extends Dict<any>>(k: string, d0: A, d1: A): boolean;
export declare const eqProps: typeof _eqProps;
declare function _map<A extends Dict<any>>(f: Function.Function): (dict: A) => A;
declare function _map<A extends Dict<any>>(f: Function.Function, dict: A): A;
export declare const map: typeof _map;
declare function _mapi<A extends Dict<any>>(f: (value: any, key: string) => any): (dict: A) => A;
declare function _mapi<A extends Dict<any>>(f: (value: any, key: string) => any, dict: A): A;
export declare const mapi: typeof _mapi;
declare function _evolve<A extends Dict<any>>(e: Record<string, Function.Function>): (d: A) => A;
declare function _evolve<A extends Dict<any>>(e: Record<string, Function.Function>, d: A): A;
export declare const evolve: typeof _evolve;
declare function _has<A extends Dict<any>>(k: string): (d: A) => boolean;
declare function _has<A extends Dict<any>>(k: string, d: A): boolean;
export declare const has: typeof _has;
export declare const isEmpty: <A extends Dict<any>>(a: A) => boolean;
declare function _propEq<A extends Dict<any>>(k: string): {
    (val: any, dict: A): boolean;
    (val: any): (dict: A) => boolean;
};
declare function _propEq<A extends Dict<any>>(k: string, val: any): (dict: A) => boolean;
declare function _propEq<A extends Dict<any>>(k: string, val: any, dict: A): boolean;
export declare const propEq: typeof _propEq;
declare function _merge<T extends Dict<any>, A extends Dict<any> = any>(a: A): (dict: T) => T;
declare function _merge<T extends Dict<any>, A extends Dict<any> = any>(a: A, dict: T): T;
export declare const merge: typeof _merge;
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
 *
 * // careful, this doensn't work the way you might expect
 * helped.c()       // { d: () => number, e: () => number }
 * ```
 *
 * @see {@link makeDictOptHelper}
 * @param map A map of default values
 * @returns A Dict Helper
 */
export declare const makeDictHelper: <T extends Dict<any>>(map: LeafsToFallback<T>) => (obj: Maybe.Maybe<T>) => LeafsToVals<Required<T>>;
declare type OptVal<T> = {
    get: () => T;
    opt: () => Maybe.Maybe<T>;
};
declare type LeafsToOptVals<T> = T extends string ? OptVal<string> : T extends boolean ? OptVal<boolean> : T extends number ? OptVal<number> : {
    [P in keyof T]-?: T[P] extends (infer U)[] ? OptVal<LeafsToVals<U>[]> : LeafsToOptVals<Required<T[P]>> & OptVal<T[P]>;
};
export declare type DictOptHelper<T> = LeafsToOptVals<Required<T>>;
/**
 * Similar to {@link makeDictHelper}, except it allows you to access the Maybe
 * type within. It also acts a little more predictably with nested
 * objects than {@link makeDictHelper}.
 *
 * @remarks
 * Since `get` and `opt` are part of the interface, you can't use either
 * of those words as keys in your object. If you try it will throw an
 * exception when making the helper.
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
 * const helper = makeDictOptHelper(map);
 * const helped = helper(thing);
 * helped.a.get()       // 5 <-- value in `thing`
 * helped.a.opt()       // Just(5)
 * helped.b.get()       // 2 <-- value in `map`
 * helped.b.opt()       // Nothing
 * helped.c.get()       // { d: 3, e: 4 }
 * helped.c.d.get()     // 3
 * helped.c.e.get()     // 4
 * ```
 *
 * @see {@link makeDictHelper}
 * @param map A map of default values
 * @returns A Dict Opt Helper
 */
export declare const makeDictOptHelper: <T extends Dict<any>>(map: LeafsToFallback<T>) => (obj: Maybe.Maybe<T>) => LeafsToOptVals<Required<T>>;
export {};
