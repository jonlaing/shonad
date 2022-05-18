import * as Fn from "../base/Function";
import * as Maybe from "../data/Maybe";
import * as List from "../data/List";
import * as Dict from "../data/Dict";
import * as Either from "../data/Either";
import { Function } from "ts-toolbelt";

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
  set: (mx: Maybe.Maybe<any>, xs: any[]) =>
    Maybe._do(function* (_) {
      const head: any = _(yield mx);
      const tail: any[] = _(yield List.tail(xs));
      return [head, ...tail];
    }).unwrap(xs),
};

export const tail: Lens<any[], Maybe.Maybe<any[]>> = {
  get: List.tail,
  set: (mxs: Maybe.Maybe<any[]>, xs: any[]) =>
    Maybe._do(function* (_) {
      const tail: any[] = _(yield mxs);
      const head: any = _(yield List.head(xs));
      return [head, ...tail];
    }).unwrap(xs),
};

export const index = <A>(i: number): Lens<A[], Maybe.Maybe<A>> => ({
  get: List.nth(i),
  set: (mx: Maybe.Maybe<A>, xs) =>
    mx.fmap((x) => List.update(x, i, xs)).unwrap(xs),
});

export const prop = <A>(k: string): Lens<any, Maybe.Maybe<A>> => ({
  get: Dict.get(k),
  set: (mv: Maybe.Maybe<any>, dict: any) =>
    mv.fmap(Dict.set(k)).apply(Maybe.pure(dict)).unwrap(dict),
});

/**
 * Forks a lens. If the second lens returns `Nothing` then it will use
 * the first lens.
 *
 * @remarks
 *
 * This is backward from how you might expect `or' to work. This is to
 * support currying and partial application
 *
 * @param l1 - Lens that returns a `Maybe c`
 * @param l0 - Lens that returns a `Maybe b`
 * @returns  a Lens of `Maybe b` or `Maybe c`
 */
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
      l0
        .get(a)
        .fmap((_) => l0.set(mv, a))
        .unwrap(l1.set(mv, a))
  );

export const when = <A>(pred: Fn.Predicate<A>) =>
  lens(List.find<A>(pred), (mv: Maybe.Maybe<A>, xs: A[]) =>
    mv.fmap(List.updateWhen(pred)).apply(Maybe.pure(xs)).unwrap(xs)
  );

export const nonEmptyString = lens<string, Maybe.Maybe<string>>(
  (a) => (a === "" ? Maybe.nothing<string>() : Maybe.just(a)),
  (mv: Maybe.Maybe<string>, a) => mv.unwrap("")
);

export const nonEmptyList = lens<any[], Maybe.Maybe<any[]>>(
  (a) => (List.isEmpty(a) ? Maybe.nothing<any[]>() : Maybe.just(a)),
  (mv: Maybe.Maybe<any[]>, a) => mv.unwrap([])
);

export const nonEmptyDict = lens<Dict.Dict<any>, Maybe.Maybe<Dict.Dict<any>>>(
  (a) => (Dict.isEmpty(a) ? Maybe.nothing<Dict.Dict<any>>() : Maybe.just(a)),
  (mv: Maybe.Maybe<Dict.Dict<any>>, a) => mv.unwrap({})
);
