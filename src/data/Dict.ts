import { Function } from "ts-toolbelt";
import * as Maybe from "./Maybe";
import * as Fn from "../base/Function";
import * as Util from "../base/Util";

declare function _get(
  key: string
): (dict: Record<string, any>) => Maybe.Maybe<any>;
declare function _get(key: string, dict: Record<string, any>): Maybe.Maybe<any>;

export const get: typeof _get = Fn.curry(
  (key: string, dict: Record<string, any>): Maybe.Maybe<any> =>
    Maybe.maybeNil(dict[key])
);

declare function _set(
  key: string
): (val: any, dict: Record<string, any>) => Record<string, any>;
declare function _set(
  key: string,
  val: any
): (dict: Record<string, any>) => Record<string, any>;
declare function _set(
  key: string,
  val: any,
  dict: Record<string, any>
): Record<string, any>;

export const set: typeof _set = Fn.curry(
  (key: string, val: any, dict: Record<string, any>): Record<string, any> => ({
    ...dict,
    [key]: val,
  })
);

declare function _unset<A extends Record<string, any>>(
  k: string
): (dict: A) => Partial<A>;
declare function _unset<A extends Record<string, any>>(
  k: string,
  dict: A
): Partial<A>;

export const unset: typeof _unset = Fn.curry(
  (k: string, dict: Record<string, any>): Record<string, any> =>
    Object.keys(dict).reduce(
      (acc, _k) => (k === _k ? acc : { [_k]: dict[_k] }),
      {}
    )
);

declare function _eqProps(
  k: string
): (d0: Record<string, any>, d1: Record<string, any>) => boolean;
declare function _eqProps(
  k: string,
  d0: Record<string, any>
): (d1: Record<string, any>) => boolean;
declare function _eqProps(
  k: string,
  d0: Record<string, any>,
  d1: Record<string, any>
): boolean;

export const eqProps: typeof _eqProps = Fn.curry(
  (k: string, d0: Record<string, any>, d1: Record<string, any>): boolean =>
    Fn.pipe<Maybe.Maybe<any>, boolean>(
      Maybe.apply_<any, any>(get(k, d0)),
      Maybe.apply_<any, any>(get(k, d1)),
      Maybe.fromMaybe(false)
    )(Maybe.just(Util.eq))
);

declare function _map(
  f: Function.Function
): (dict: Record<string, any>) => Record<string, any>;
declare function _map(
  f: Function.Function,
  dict: Record<string, any>
): Record<string, any>;

export const map: typeof _map = Fn.curry(
  (f: Function.Function, dict: Record<string, any>): Record<string, any> =>
    Object.keys(dict).reduce(
      (acc, k: string) => ({ ...acc, [k]: f(dict[k]) }),
      {}
    )
);

declare function _mapi(
  f: (value: any, key: string) => any
): (dict: Record<string, any>) => Record<string, any>;
declare function _mapi(
  f: (value: any, key: string) => any,
  dict: Record<string, any>
): Record<string, any>;

export const mapi: typeof _mapi = Fn.curry(
  (f: Function.Function, dict: Record<string, any>): Record<string, any> =>
    Object.keys(dict).reduce(
      (acc: Record<string, any>, k: string) => ({ ...acc, [k]: f(dict[k], k) }),
      {}
    )
);

declare function _evolve(
  e: Record<string, Function.Function>
): (d: Record<string, any>) => Record<string, any>;
declare function _evolve(
  e: Record<string, Function.Function>,
  d: Record<string, any>
): Record<string, any>;

export const evolve: typeof _evolve = Fn.curry(
  (
    e: Record<string, Function.Function>,
    d: Record<string, any>
  ): Record<string, any> =>
    mapi(
      (v: any, k: string) =>
        Maybe.fromMaybe(v, Maybe.apply(get(k, e), get(k, d))),
      d
    )
);

declare function _has(k: string): (d: Record<string, any>) => boolean;
declare function _has(k: string, d: Record<string, any>): boolean;

export const has: typeof _has = Fn.curry(
  (k: string, d: Record<string, any>): boolean =>
    Maybe.fromMaybe(false, Maybe.fmap(Fn.true_, get(k, d)))
);
