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

declare function _set<A extends Dict<any>>(
  key: string
): (val: any, dict?: A) => A;
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
): (d0: A, d1: A) => boolean;
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
): (val: any, dict?: A) => boolean;
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

declare function _merge<A extends Dict<A>>(a: Partial<A>): (dict: A) => A;
declare function _merge<A extends Dict<A>>(a: Partial<A>, dict: A): A;

export const merge: typeof _merge = Fn.curry(
  <A extends Dict<A>>(a: Partial<A>, dict: A): A => ({
    ...dict,
    ...a,
  })
);
