import { getParseTreeNode } from "typescript";
import * as Fn from "../base/Function";
import * as F from "../control/Functor";
import * as Maybe from "../data/Maybe";
import * as List from "../data/List";
import * as Monad from "../control/Monad";
import * as Dict from "../data/Dict";
import * as Either from "../data/Either";

export type GetterFn<A, B> = (a: A) => B;
export type SetterFn<A, B> = (b: B, a: A) => A;
export type Lens<A, B> = {
  get: GetterFn<A, B>;
  set: SetterFn<A, B>;
};

export const lens = <A, B>(
  getter: GetterFn<A, B>,
  setter: SetterFn<A, B>
): Lens<A, B> => ({
  get: getter,
  set: setter,
});

export function view<A, B>(lens: Lens<A, B>): (data: A) => B;
export function view<A, B>(lens: Lens<A, B>, data: A): B;
export function view<A, B>(lens: Lens<A, B>, data?: A): any {
  if (data === undefined) return (data: A) => view(lens, data);

  return lens.get(data);
}

export function viewE<A, B>(
  lens: Lens<A, Maybe.Maybe<B>>
): (error: string, data?: A) => Either.Either<string, B>;
export function viewE<A, B>(
  lens: Lens<A, Maybe.Maybe<B>>,
  error: string
): (data: A) => Either.Either<string, B>;
export function viewE<A, B>(
  lens: Lens<A, Maybe.Maybe<B>>,
  error: string,
  data: A
): Either.Either<string, B>;
export function viewE<A, B>(
  lens: Lens<A, Maybe.Maybe<B>>,
  error?: string,
  data?: A
): any {
  if (error === undefined)
    return (error: string, data: A) => viewE(lens, error, data);
  if (data === undefined) return (data: A) => viewE(lens, error, data);

  return Either.fromMaybe(error, view(lens, data));
}

export const set = <A, B>(lens: Lens<A, B>, val: B, data: A) =>
  lens.set(val, data);

export function over<A, B>(lens: Lens<A, B>): (f: (b: B) => B, data?: A) => A;
export function over<A, B>(lens: Lens<A, B>, f: (b: B) => B): (data: A) => A;
export function over<A, B>(lens: Lens<A, B>, f: (b: B) => B, data: A): A;
export function over<A, B>(lens: Lens<A, B>, f?: (b: B) => B, data?: A): any {
  if (f === undefined) return (f: (b: B) => B, data: A) => over(lens, f, data);
  if (data === undefined) return (data: A) => over(lens, f, data);

  return lens.set(f(lens.get(data)), data);
}

export const compose = <A, B>(l0: Lens<A, B>, l1: Lens<A, B>): Lens<A, B> => ({
  get: Fn.compose(l1.get, l0.get),
  set: Fn.compose(l0.set, over(l1)),
});

export const pipe = <A, B>(l0: Lens<A, B>, l1: Lens<A, B>): Lens<A, B> =>
  compose(l1, l0);

export const optional = <A>(fallback: A): Lens<Maybe.Maybe<A>, A> => ({
  get: (a: Maybe.Maybe<A>) => Maybe.fromMaybe(fallback, a),
  set: (v: A, data: Maybe.Maybe<A>) => Maybe.just(v),
});

export const head: Lens<any[], Maybe.Maybe<any>> = {
  get: List.head,
  set: (v: Maybe.Maybe<any>, xs: any[]) =>
    Maybe.fromMaybe(
      xs,
      Monad.bind(v, (a) => F.fmap((tl: any[]) => [a, ...tl], List.tail(xs)))
    ),
};

export const tail: Lens<any[], Maybe.Maybe<any[]>> = {
  get: List.tail,
  set: (vs: Maybe.Maybe<any[]>, xs: any[]) =>
    Maybe.fromMaybe(
      xs,
      Monad.bind(vs, (as: any[]) =>
        F.fmap((hd: any) => [hd, ...as], List.head(xs))
      )
    ),
};

export const index = (i: number): Lens<any[], Maybe.Maybe<any>> => ({
  get: List.nth(i),
  set: (x, xs) =>
    Maybe.fromMaybe(
      [],
      F.fmap((x: any) => List.update(x, i, xs), x)
    ),
});

export const prop = <A extends Record<string, any>, K extends keyof A>(
  k: K
): Lens<A, Maybe.Maybe<A[K]>> => ({
  get: Dict.get(k),
  set: (v: Maybe.Maybe<A[K]>, dict: A) =>
    Maybe.fromMaybe(
      dict,
      F.fmap((x: A[K]) => Dict.set(k, x, dict), v)
    ),
});
