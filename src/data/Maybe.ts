import { Function } from "ts-toolbelt";
import { Monad } from "../control/Monad";
import * as Fn from "../base/Function";
import * as Util from "../base/Util";

export abstract class Maybe<A> extends Monad<A> {
  static pure(a: any) {
    return new Just(a);
  }
  static return_ = Maybe.pure;
}

export const fmap = Maybe.fmap;
export const apply = Maybe.apply;
export const bind = Maybe.bind;
export const pure = Maybe.pure;
export const return_ = Maybe.return_;

export class Just<A> extends Maybe<A> {
  isJust = Fn.always(true);
  isNothing = Fn.always(false);

  fmap = <B>(f: (a: A) => B): Maybe<B> => new Just(f(this.val));
  apply = (f: Maybe<Function.Function>): Maybe<any> => {
    return (isJust(f) ? fmap(f.val, this) : nothing()) as Maybe<any>;
  };
  bind = (f: (a: any) => Maybe<any>): Maybe<any> => f(this.val);
}

export class Nothing<A> extends Maybe<A> {
  isJust = Fn.always(false);
  isNothing = Fn.always(true);

  fmap = <B>(f: (a: A) => any): Maybe<B> =>
    new Nothing(this.val as unknown as B);
  apply = (f: Maybe<Function.Function>): Maybe<any> => this;
  bind = (f: (a: any) => Maybe<any>) => this;
}

export const just = <A>(x: A) => new Just<A>(x);
export const nothing = <A>(x?: A) => new Nothing<A>(x as A);

export const isJust = (x: Maybe<any>) => (x as Just<any>).isJust();
export const isNothing = (x: Maybe<any>) => (x as Nothing<any>).isNothing();

export const maybe = Fn.curry(
  (fallback: any, f: (a: any) => any, x: Maybe<any>) =>
    isJust(x) ? f(x.val) : fallback
);

export const fromMaybe = Fn.curry(
  <A>(fallback: A, x: Maybe<A>): A => (isJust(x) ? x.val : fallback)
);

export const maybeNil = <A>(a: A | undefined): Maybe<A> =>
  Util.isNil(a) ? nothing(a) : just(a as A);

export const listToMaybe = (a: any[]): Maybe<any> =>
  a.length > 0 ? just(a[0]) : nothing();

export const maybeToList = <A>(x: Maybe<A>): A[] =>
  fromMaybe(
    [],
    Maybe.fmap((a) => [a], x)
  );

export const catMaybes = <A>(xs: Maybe<A>[]): A[] =>
  xs.reduce((acc: A[], x) => (isJust(x) ? [...acc, x.val] : acc), [] as A[]);

export const mapMaybe = Fn.curry(
  (f: (a: any) => Maybe<any>, as: any[]): any[] =>
    as.reduce((acc, a) => {
      const res = f(a);
      return isJust(res) ? [...acc, res.val] : acc;
    }, [])
);

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
