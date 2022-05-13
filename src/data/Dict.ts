import * as Maybe from "./Maybe";
import * as Fn from "../base/Function";
import * as Ap from "../control/Applicative";
import * as Util from "../base/Util";
import * as F from "../control/Functor";

export function get<A extends Record<string, any>, K extends keyof A>(
  key: K
): (dict: A) => Maybe.Maybe<A[K]>;
export function get<A extends Record<string, any>, K extends keyof A>(
  key: K,
  dict: A
): Maybe.Maybe<A[K]>;
export function get<A extends Record<string, any>, K extends keyof A>(
  key: K,
  dict?: A
): any {
  if (dict === undefined) return (dict: A) => get(key, dict);

  return Maybe.maybeNil(dict[key]);
}

export function set<A extends Record<string, any>, K extends keyof A>(
  key: K
): (val: A[K], dict: A) => A;
export function set<A extends Record<string, any>, K extends keyof A>(
  key: K,
  val: A[K]
): (dict: A) => A;
export function set<A extends Record<string, any>, K extends keyof A>(
  key: K,
  val: A[K],
  dict: A
): A;
export function set<A extends Record<string, any>, K extends keyof A>(
  key: K,
  val?: A[K],
  dict?: A
): any {
  if (val === undefined) return (val: A[K], dict: A) => set(key, val, dict);
  if (dict === undefined) return (dict: A) => set(key, val, dict);

  return { ...dict, [key]: val };
}

export function unset<T extends Record<string, any>>(
  k: string
): (dict: T) => Partial<T>;
export function unset<T extends Record<string, any>>(
  k: string,
  dict: T
): Partial<T>;
export function unset<T extends Record<string, any>>(k: string, dict?: T): any {
  if (dict === undefined) return (dict: T) => unset(k, dict);

  return Object.keys(dict).reduce(
    (acc, _k) => (k === _k ? acc : { [_k]: dict[_k] }),
    {}
  );
}

export function eqProps<T extends Record<string, any>>(
  k: string
): (d0: T, d1?: T) => boolean;
export function eqProps<T extends Record<string, any>>(
  k: string,
  d0: T
): (d1: T) => boolean;
export function eqProps<T extends Record<string, any>>(
  k: string,
  d0: T,
  d1: T
): boolean;
export function eqProps<T extends Record<string, any>>(
  k: string,
  d0?: T,
  d1?: T
): any {
  if (d0 === undefined) return (d0: T, d1: T) => eqProps(k, d0, d1);
  if (d1 === undefined) return (d1: T) => eqProps(k, d0, d1);

  return Fn.pipe(
    Ap.apply(get(k, d0)),
    Ap.apply(get(k, d1)),
    Maybe.fromMaybe(false)
  )(Maybe.just(Util.eq));
}

export function map<T extends Record<string, any>>(
  f: (a: any) => any
): (dict: T) => any;
export function map<T extends Record<string, any>>(
  f: (a: any) => any,
  dict: T
): any;
export function map<T extends Record<string, any>>(
  f: (a: any) => any,
  dict?: T
): any {
  if (dict === undefined) return (dict: T) => map(f, dict);

  Object.keys(dict).map((k: string) => ({ [k]: f(dict[k]) }));
}

export function mapi<T extends Record<string, any>>(
  f: (a: any, i: string) => any
): (dict: T) => any;
export function mapi<T extends Record<string, any>>(
  f: (a: any, i: string) => any,
  dict: T
): any;
export function mapi<T extends Record<string, any>>(
  f: (a: any, i: string) => any,
  dict?: T
): any {
  if (dict === undefined) return (dict: T) => mapi(f, dict);

  Object.keys(dict).map((k: string) => ({ [k]: f(dict[k], k) }));
}

export function evolve<T extends Record<string, any>>(
  e: Record<string, (a: any) => any>
): (d: T) => Record<string, any>;
export function evolve<T extends Record<string, any>>(
  e: Record<string, (a: any) => any>,
  d: T
): Record<string, any>;
export function evolve<T extends Record<string, any>>(
  e: Record<string, (a: any) => any>,
  d?: T
): any {
  if (d === undefined) return (d: T) => evolve(e, d);

  return mapi((v, k) => Maybe.fromMaybe(v, F.fmap(e[k], get(k, d))));
}

export function has<T extends Record<string, any>>(
  k: string
): (d: T) => boolean;
export function has<T extends Record<string, any>>(k: string, d: T): boolean;
export function has<T extends Record<string, any>>(k: string, d?: T): any {
  if (d === undefined) return (d: T) => has(k, d);

  return Maybe.fromMaybe(false, F.fmap(Fn.true_, get(k, d)));
}
