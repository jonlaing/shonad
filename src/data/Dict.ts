import * as Maybe from "./Maybe";

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
