import { Function } from "ts-toolbelt";
import * as Maybe from "./Maybe";
import * as Fn from "../base/Function";
import * as Ap from "../control/Applicative";
import * as Util from "../base/Util";

export const get = Fn.curry(
  (key: string, dict: Record<string, any>): Maybe.Maybe<any> =>
    Maybe.maybeNil(dict[key])
);

export const set = Fn.curry(
  (key: string, val: any, dict: Record<string, any>): Record<string, any> => ({
    ...dict,
    [key]: val,
  })
);

export const unset = Fn.curry(
  (k: string, dict: Record<string, any>): Record<string, any> =>
    Object.keys(dict).reduce(
      (acc, _k) => (k === _k ? acc : { [_k]: dict[_k] }),
      {}
    )
);

export const eqProps = Fn.curry(
  (k: string, d0: Record<string, any>, d1: Record<string, any>): any =>
    Fn.pipe(
      Ap.apply_(get(k, d0)),
      Ap.apply_(get(k, d1)),
      Maybe.fromMaybe(false)
    )(Maybe.just(Util.eq))
);

export const map = Fn.curry(
  (f: Function.Function, dict: Record<string, any>): Record<string, any> =>
    Object.keys(dict).reduce(
      (acc, k: string) => ({ ...acc, [k]: f(dict[k]) }),
      {}
    )
);

export const mapi = Fn.curry(
  (f: Function.Function, dict: Record<string, any>): Record<string, any> =>
    Object.keys(dict).reduce(
      (acc: Record<string, any>, k: string) => ({ ...acc, [k]: f(dict[k], k) }),
      {}
    )
);

export const evolve = Fn.curry(
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

export const has = Fn.curry((k: string, d: Record<string, any>): boolean =>
  Maybe.fromMaybe(false, Maybe.fmap(Fn.true_, get(k, d)))
);
