import { ApplyFn, PureFn } from "../control/Applicative";
import { FMapFn } from "../control/Functor";
import {
  BindFn,
  implementMonadClass,
  makeMonad,
  Monad,
  MonadFactory,
} from "../control/Monad";
import * as Util from "../base/Util";

export type Just<A> = { __val: A } & Monad<A, "maybe">;

export type Nothing<A> = {} & Monad<A, "maybe">;

export type Maybe<A> = Just<A> | Nothing<A>;

type MaybeFmap<A> = FMapFn<A, any, Maybe<A>, Maybe<any>>;
type MaybePure<A> = PureFn<Maybe<A>>;
type MaybeApply<A, B> = ApplyFn<Maybe<(a: A) => B>, Maybe<A>, Maybe<B>>;
type MaybeBind<A, B> = BindFn<A, B, Maybe<A>, Maybe<B>>;

type MaybeClass = MonadFactory<
  Maybe<any>,
  MaybeFmap<any>,
  MaybePure<any>,
  MaybeApply<any, any>,
  MaybeBind<any, any>
>;

export const just = <A>(a: A) =>
  makeMonad<{ __val: A }, Just<A>>("maybe", { __val: a });

export const nothing = <A>(a?: undefined) =>
  makeMonad<{}, Nothing<A>>("maybe", {});

export const maybe = <A, B>(fallback: B, f: (a: A) => B, x: Maybe<A>): B =>
  isJust(x) ? f((x as Just<A>).__val) : fallback;

export const isJust = (x: Maybe<any>) => (x as Just<any>).__val !== undefined;
export const isNothing = (x: Maybe<any>) => !isJust(x);

export function fromMaybe<A>(fallback: A): (x: Maybe<A>) => A;
export function fromMaybe<A>(fallback: A, x: Maybe<A>): A;
export function fromMaybe<A>(fallback: A, x?: Maybe<A>): any {
  if (x === undefined) return (x: Maybe<A>) => fromMaybe(fallback, x);
  return isJust(x) ? (x as Just<A>).__val : fallback;
}

export const maybeNil = <A>(a: A | undefined): Maybe<A> =>
  Util.isNil(a) ? nothing() : just(a);

export const listToMaybe = (a: any[]): Maybe<any> =>
  a.length > 0 ? just(a) : nothing();

export const maybeToList = <A>(x: Maybe<A>): A[] =>
  fromMaybe(
    [],
    fmap((a) => [a], x)
  );

export const catMaybes = <A>(xs: Maybe<A>[]): A[] =>
  xs.reduce(
    (acc, x) => (isJust(x) ? [...acc, (x as Just<A>).__val] : acc),
    [] as A[]
  );

export const mapMaybe = <A, B>(f: (a: A) => Maybe<B>, as: A[]): B[] =>
  as.reduce((acc, a) => {
    const res = f(a);
    return isJust(res) ? [...acc, (res as Just<B>).__val] : acc;
  }, [] as B[]);

export const fmap = <A, B>(f: (a: A) => B, x: Maybe<A>) =>
  (isJust(x) ? just(f((x as Just<any>).__val)) : nothing()) as Maybe<B>;

export const pure = just;

export const apply: MaybeApply<any, any> = <
  A,
  B,
  T extends Maybe<(a: A) => B> = Maybe<(a: A) => B>
>(
  x: T,
  y: Maybe<A>
): Maybe<B> => fmap((g: (a: A) => B) => g((y as Just<A>).__val), x);

export const bind = <A, B>(x: Maybe<A>, f: (a: A) => Maybe<B>): Maybe<B> =>
  (isJust(x) ? f((x as Just<A>).__val) : nothing()) as Maybe<B>;

implementMonadClass<MaybeClass>("maybe", { fmap, pure, apply, bind });

export type MaybeRecord<T extends Record<string, any>> = {
  [k in keyof T]: Maybe<T[k]>;
};

export const maybeRecord = <T extends Record<string, any>>(
  x: T
): MaybeRecord<T> =>
  Object.keys(x).reduce(
    (acc, k) => ({ ...acc, [k]: maybeNil(x[k]) }),
    {} as MaybeRecord<T>
  );
