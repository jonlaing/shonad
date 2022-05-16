import * as Fn from "../base/Function";
import * as Maybe from "../data/Maybe";
import * as List from "../data/List";
import * as Dict from "../data/Dict";
import * as Either from "../data/Either";
import { A, B, F, Function, I } from "ts-toolbelt";

export type GetterFn<A, B> = Function.Function<[A], B>;
export type SetterFn<A, B> = Function.Function;
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

declare function _view<A, B>(lens: Lens<A, B>): (data: A) => B;
declare function _view<A, B>(lens: Lens<A, B>, data: A): B;

export const view: typeof _view = Fn.curry(
  <A, B>(lens: Lens<A, B>, data: A): B => lens.get(data)
);

declare function _viewE<A, B>(
  lens: Lens<A, Maybe.Maybe<B>>
): (error: string, data?: A) => Either.Either<string, B>;
declare function _viewE<A, B>(
  lens: Lens<A, Maybe.Maybe<B>>,
  error: string
): (data: A) => Either.Either<string, B>;
declare function _viewE<A, B>(
  lens: Lens<A, Maybe.Maybe<B>>,
  error: string,
  data: A
): Either.Either<string, B>;

export const viewE: typeof _viewE = Fn.curry(
  <A, B>(
    lens: Lens<A, Maybe.Maybe<B>>,
    error: string,
    data: A
  ): Either.Either<string, B> => Either.fromMaybe(error, view(lens, data))
);

declare function _set<A, B>(lens: Lens<A, B>): (val: B, data: A) => A;
declare function _set<A, B>(lens: Lens<A, B>, val: B): (data: A) => A;
declare function _set<A, B>(lens: Lens<A, B>, val: B, data: A): A;

export const set: typeof _set = Fn.curry(
  <A, B>(lens: Lens<A, B>, val: B, data: A): B => lens.set(val, data)
);

declare function _over<A, B>(lens: Lens<A, B>): (f: (b: B) => B, data: A) => A;
declare function _over<A, B>(lens: Lens<A, B>, f: (b: B) => B): (data: A) => A;
declare function _over<A, B>(lens: Lens<A, B>, f: (b: B) => B, data: A): A;

export const over: typeof _over = Fn.curry(
  <A, B>(lens: Lens<A, B>, f: (b: B) => B, data: A): A =>
    lens.set(f(lens.get(data)), data)
);

export const pipe = <A, B>(...lenses: Lens<any, any>[]): Lens<A, B> => {
  if (lenses.length === 1) return lenses[0];

  const [l0, l1, ...rest] = lenses;
  const newLens = {
    get: Fn.compose(l0.get, l1.get),
    set: (a: A, x: any) => l1.set(l0.set(a, l1.get(x)), x),
  };

  return pipe(newLens, ...rest);
};

export const compose = <A, B>(...lenses: Lens<any, any>[]): Lens<A, B> =>
  pipe(...List.reverse(lenses));

export const optional = <A>(fallback: A): Lens<Maybe.Maybe<A>, A> => ({
  get: (a: Maybe.Maybe<A>) => Maybe.fromMaybe(fallback, a) as A,
  set: (v: A, data: Maybe.Maybe<A>) => Maybe.just(v),
});

export const head: Lens<any[], Maybe.Maybe<any>> = {
  get: List.head,
  set: (v: Maybe.Maybe<any>, xs: any[]) =>
    Maybe.fromMaybe(
      xs,
      Maybe.bind(v, (a) => Maybe.fmap((tl: any[]) => [a, ...tl], List.tail(xs)))
    ),
};

export const tail: Lens<any[], Maybe.Maybe<any[]>> = {
  get: List.tail,
  set: (vs: Maybe.Maybe<any[]>, xs: any[]) =>
    Maybe.fromMaybe(
      xs,
      Maybe.bind(vs, (as: any[]) =>
        Maybe.fmap((hd: any) => [hd, ...as], List.head(xs))
      )
    ),
};

export const index = <A>(i: number): Lens<A[], Maybe.Maybe<A>> => ({
  get: List.nth(i),
  set: (x: Maybe.Maybe<A>, xs) =>
    Maybe.fromMaybe(
      xs,
      Maybe.fmap((x: A) => List.update(x, i, xs), x)
    ),
});

export const prop = <A>(
  k: string
): Lens<Record<string, A>, Maybe.Maybe<A>> => ({
  get: Dict.get(k),
  set: (v: Maybe.Maybe<any>, dict: Record<string, any>) =>
    Maybe.fromMaybe(
      dict,
      Maybe.fmap((x: any) => Dict.set(k, x, dict), v)
    ),
});

// this is backward from how you might expect 'or' to work to support
// currying and partial application
export const or = <A, B, C>(
  l1: Lens<A, Maybe.Maybe<C>>,
  l0: Lens<A, Maybe.Maybe<B>>
): Lens<A, Maybe.Maybe<B> | Maybe.Maybe<C>> =>
  lens(
    (a: A): Maybe.Maybe<B> | Maybe.Maybe<C> =>
      Maybe.or(
        () => l1.get(a),
        () => l0.get(a)
      ),
    (mv: Maybe.Maybe<B | C>, a: A) =>
      Maybe.fromMaybe(
        l1.set(mv, a),
        Maybe.fmap((_: B) => l0.set(mv, a), l0.get(a))
      )
  );
