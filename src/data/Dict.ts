import { Function } from "ts-toolbelt";
import * as Maybe from "./Maybe";
import * as Fn from "../base/Function";
import * as Util from "../base/Util";

export type Dict<A> = Record<string, A>;

declare function _get<A extends Dict<any>>(
  key: string
): (dict: A) => Maybe.Maybe<any>;
declare function _get<A extends Dict<any>>(
  key: string,
  dict: A
): Maybe.Maybe<any>;

export const get: typeof _get = Fn.curry(
  <A extends Dict<any>>(key: string, dict: A): Maybe.Maybe<any> =>
    Maybe.maybeNil(dict[key])
);

declare function _getUnsafe<A extends Dict<any>>(key: string): (dict: A) => any;
declare function _getUnsafe<A extends Dict<any>>(key: string, dict: A): any;
export const getUnsafe: typeof _getUnsafe = Fn.curry(
  <A extends Dict<any>>(key: string, dict: A): any => dict[key]
);

declare function _set<A extends Dict<any>>(
  key: string
): {
  (val: any, dict: A): A;
  (val: any): (dict: A) => A;
};
declare function _set<A extends Dict<any>>(
  key: string,
  val: any
): (dict: A) => A;
declare function _set<A extends Dict<any>>(key: string, val: any, dict: A): A;

export const set: typeof _set = Fn.curry(
  <A extends Dict<any>>(key: string, val: any, dict: A): A => ({
    ...dict,
    [key]: val,
  })
);

declare function _unset<A extends Dict<any>>(
  k: string
): (dict: A) => Partial<A>;
declare function _unset<A extends Dict<any>>(k: string, dict: A): Partial<A>;

export const unset: typeof _unset = Fn.curry(
  <A extends Dict<any>>(k: string, dict: A): Partial<A> =>
    Object.keys(dict).reduce(
      (acc, _k) => (k === _k ? acc : { [_k]: dict[_k] }),
      {}
    )
);

declare function _eqProps<A extends Dict<any>>(
  k: string
): {
  (d0: A, d1: A): boolean;
  (d0: A): (d1: A) => boolean;
};
declare function _eqProps<A extends Dict<any>>(
  k: string,
  d0: A
): (d1: A) => boolean;
declare function _eqProps<A extends Dict<any>>(
  k: string,
  d0: A,
  d1: A
): boolean;

export const eqProps: typeof _eqProps = Fn.curry(
  <A extends Dict<any>>(k: string, d0: A, d1: A): boolean =>
    Fn.pipe<Maybe.Maybe<any>, boolean>(
      Maybe.apply_<any, any>(get(k, d0)),
      Maybe.apply_<any, any>(get(k, d1)),
      Maybe.fromMaybe(false)
    )(Maybe.just(Util.eq))
);

declare function _map<A extends Dict<any>>(
  f: Function.Function
): (dict: A) => A;
declare function _map<A extends Dict<any>>(f: Function.Function, dict: A): A;

export const map: typeof _map = Fn.curry(
  <A extends Dict<any>>(f: Function.Function, dict: A): A =>
    Object.keys(dict).reduce<A>(
      (acc, k: string) => ({ ...acc, [k]: f(dict[k]) }),
      {} as A
    )
);

declare function _mapi<A extends Dict<any>>(
  f: (value: any, key: string) => any
): (dict: A) => A;
declare function _mapi<A extends Dict<any>>(
  f: (value: any, key: string) => any,
  dict: A
): A;

export const mapi: typeof _mapi = Fn.curry(
  <A extends Dict<any>>(f: Function.Function, dict: A): A =>
    Object.keys(dict).reduce<A>(
      (acc: A, k: string) => ({ ...acc, [k]: f(dict[k], k) } as A),
      {} as A
    )
);

declare function _evolve<A extends Dict<any>>(
  e: Record<string, Function.Function>
): (d: A) => A;
declare function _evolve<A extends Dict<any>>(
  e: Record<string, Function.Function>,
  d: A
): A;

export const evolve: typeof _evolve = Fn.curry(
  <A extends Dict<any>>(e: Record<string, Function.Function>, d: A): A =>
    mapi(
      (v: any, k: string) =>
        Maybe.fromMaybe(v, Maybe.apply(get(k, e), get(k, d))),
      d
    )
);

declare function _has<A extends Dict<any>>(k: string): (d: A) => boolean;
declare function _has<A extends Dict<any>>(k: string, d: A): boolean;

export const has: typeof _has = Fn.curry(
  <A extends Dict<any>>(k: string, d: A): boolean =>
    Maybe.fromMaybe(false, Maybe.fmap(Fn.true_, get(k, d)))
);

export const isEmpty = <A extends Dict<any>>(a: A): boolean =>
  Object.keys(a).length === 0;

declare function _propEq<A extends Dict<any>>(
  k: string
): {
  (val: any, dict: A): boolean;
  (val: any): (dict: A) => boolean;
};
declare function _propEq<A extends Dict<any>>(
  k: string,
  val: any
): (dict: A) => boolean;
declare function _propEq<A extends Dict<any>>(
  k: string,
  val: any,
  dict: A
): boolean;
export const propEq: typeof _propEq = Fn.curry(
  <A extends Dict<A>>(key: string, val: any, dict: A): boolean =>
    get(key, dict).fmap(Util.eq(val)).unwrap(false)
);

declare function _merge<T extends Dict<any>, A extends Dict<any> = any>(
  a: A
): (dict: T) => T;
declare function _merge<T extends Dict<any>, A extends Dict<any> = any>(
  a: A,
  dict: T
): T;

export const merge: typeof _merge = Fn.curry(
  <T extends Dict<any>, A extends Dict<any> = any>(a: A, dict: T): T => ({
    ...dict,
    ...a,
  })
);

type LeafsToFallback<T> = T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends number
  ? number // If primitive transform to number
  : {
      [P in keyof T]: T[P] extends (infer U)[]
        ? LeafsToFallback<U>[]
        : LeafsToFallback<T[P]>;
    }; // Otherwise recursively map, with a special case for arrays.

type LeafsToVals<T> = T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends number
  ? number // If primitive transform to number
  : {
      [P in keyof T]-?: T[P] extends (infer U)[]
        ? () => LeafsToVals<U>[]
        : () => LeafsToVals<Required<T[P]>>;
    }; // Otherwise recursively map, with a special case for arrays.

export type DictHelper<T> = LeafsToVals<Required<T>>;

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
export const makeDictHelper =
  <T extends Dict<any>>(map: LeafsToFallback<T>) =>
  (obj: Maybe.Maybe<T>): DictHelper<T> =>
    mapi((v, k) => {
      if (Util.isObject(v)) {
        return () => makeDictHelper(v)(get(k, obj.unwrap({} as T)));
      }

      return () => get(k, obj.unwrap({} as T)).unwrap(v);
    }, map) as unknown as DictHelper<T>;

type OptVal<T> = {
  get: () => T;
  opt: () => Maybe.Maybe<T>;
};

type LeafsToOptVals<T> = T extends string
  ? OptVal<string>
  : T extends boolean
  ? OptVal<boolean>
  : T extends number
  ? OptVal<number> // If primitive transform to number
  : {
      [P in keyof T]-?: T[P] extends (infer U)[]
        ? OptVal<LeafsToVals<U>[]> // not screwing with optional arrays
        : LeafsToOptVals<Required<T[P]>> & OptVal<T[P]>;
    }; // Otherwise recursively map, with a special case for arrays.

export type DictOptHelper<T> = LeafsToOptVals<Required<T>>;

const DictOptReservedWords = ["get", "opt"];

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
export const makeDictOptHelper =
  <T extends Dict<any>>(map: LeafsToFallback<T>) =>
  (obj: Maybe.Maybe<T>): DictOptHelper<T> =>
    mapi((v, k) => {
      if (DictOptReservedWords.includes(k)) {
        throw `Key ${k} is reserved word for makeDictOptHelper. Consider using a different key name.`;
      }

      const val: Maybe.Maybe<any> = get(k, obj.unwrap({} as T));

      if (Util.isObject(v)) {
        const props = makeDictOptHelper(v)(val);
        return {
          ...props,
          get: () => val.unwrap(v),
          opt: () => val,
        };
      }

      return {
        get: () => val.unwrap(v),
        opt: () => val,
      };
    }, map) as unknown as DictOptHelper<T>;
