import { Function } from "ts-toolbelt";
import { makeDo, Monad } from "../control/Monad";
import * as Fn from "../base/Function";
import * as Util from "../base/Util";
import { Dict } from "./Dict";

export abstract class Maybe<A> extends Monad<A> {
  static pure<T>(a: T) {
    return new Just(a) as Maybe<T>;
  }

  abstract fmap: <B>(f: (a: A) => B) => Maybe<B>;
  abstract apply: (ma: Maybe<any>) => Maybe<any>;
  abstract bind: (f: Fn.Function<any, Maybe<any>>) => Maybe<any>;
}

declare function _fmap<F extends Function.Function>(
  f: F
): (x: Maybe<Function.Parameters<F>[0]>) => Maybe<Function.Return<F>>;
declare function _fmap<F extends Function.Function>(
  f: F,
  x: Maybe<Function.Parameters<F>[0]>
): Maybe<Function.Return<F>>;

export const fmap: typeof _fmap = Maybe.fmap;

declare function _apply<F extends Function.Function>(
  f: Maybe<F>
): (x: Maybe<Function.Parameters<F>[0]>) => Maybe<Function.Return<F>>;
declare function _apply<F extends Function.Function>(
  f: Maybe<F>,
  x: Maybe<Function.Parameters<F>[0]>
): Maybe<Function.Return<F>>;

export const apply: typeof _apply = Maybe.apply;

declare function _apply_<A, B>(
  x: Maybe<A>
): (f: Maybe<Function.Function<[A], B>>) => Maybe<B>;
declare function _apply_<A, B>(
  x: Maybe<A>,
  f: Maybe<Function.Function<[A], B>>
): Maybe<B>;

export const apply_: typeof _apply_ = Fn.flip<typeof _apply>(Maybe.apply);

declare function _bind<A, B>(
  x: Maybe<A>
): (f: Function.Function<[A], Maybe<B>>) => Maybe<B>;
declare function _bind<A, B>(
  x: Maybe<A>,
  f: Function.Function<[A], Maybe<B>>
): Maybe<B>;

export const bind: typeof _bind = Maybe.bind;
export const pure = Maybe.pure;

export class Just<A> extends Maybe<A> {
  isJust = Fn.always(true);
  isNothing = Fn.always(false);

  fmap = <B>(f: (a: A) => B): Maybe<B> => new Just(f(this.val)) as Maybe<B>;
  apply = (ma: Maybe<any>): Maybe<any> => {
    return (
      isJust(ma)
        ? ma.fmap((this as unknown as Just<Function.Function>).val)
        : nothing()
    ) as Maybe<any>;
  };
  bind = (f: (a: any) => Maybe<any>): Maybe<any> => f(this.val);
  unwrap = (fallback: A) => this.val;

  equals = (a: A) => this.fmap(Util.eq(a)).unwrap(false);
}

export class Nothing<A> extends Maybe<A> {
  isJust = Fn.always(false);
  isNothing = Fn.always(true);

  fmap = <B>(f: (a: A) => any): Maybe<B> =>
    new Nothing(this.val as unknown as B);
  apply = (f: Maybe<any>): Maybe<any> => this;
  bind = (f: (a: any) => Maybe<any>) => this;

  unwrap = (fallback: A) => fallback;
  equals = Fn.always(false);
}

export const just = <A>(x: A) => new Just<A>(x) as Maybe<A>;
export const nothing = <A>(x?: A) => new Nothing<A>(x as A) as Maybe<A>;

export const isJust = (x: Maybe<any>) => (x as Just<any>).isJust();
export const isNothing = (x: Maybe<any>) => (x as Nothing<any>).isNothing();

declare function _maybe<A, B>(
  fallback: B
): {
  (f: Function.Function<[A], B>, x: Maybe<A>): B;
  (f: Function.Function<[A], B>): (x: Maybe<A>) => B;
};
declare function _maybe<A, B>(
  fallback: B,
  f: Function.Function<[A], B>
): (x: Maybe<A>) => B;
declare function _maybe<A, B>(
  fallback: B,
  f: Function.Function<[A], B>,
  x: Maybe<A>
): B;

export const maybe: typeof _maybe = Fn.curry(
  <A, B>(fallback: B, f: Function.Function<[A], B>, x: Maybe<A>): B =>
    isJust(x) ? f(x.val) : fallback
);

declare function _fromMaybe<A>(fallback: A): (x: Maybe<A>) => A;
declare function _fromMaybe<A>(fallback: A, x: Maybe<A>): A;

export const fromMaybe: typeof _fromMaybe = Fn.curry(
  <A>(fallback: A, x: Maybe<A>): A => (isJust(x) ? x.val : fallback)
);

export const maybeNil = <A>(a: A | undefined): Maybe<A> =>
  Util.isNil(a) ? nothing(a) : just(a as A);

export const listToMaybe = (a: any[]): Maybe<any> =>
  a.length > 0 ? just(a[0]) : nothing();

export const maybeToList = <A>(ma: Maybe<A>): A[] =>
  ma.fmap((a) => [a]).unwrap([]);

export const catMaybes = <A>(xs: Maybe<A>[]): A[] =>
  xs.reduce((acc: A[], x) => (isJust(x) ? [...acc, x.val] : acc), [] as A[]);

declare function _mapMaybe<A, B>(
  f: Function.Function<[A], Maybe<B>>
): (as: A[]) => B[];
declare function _mapMaybe<A, B>(
  f: Function.Function<[A], Maybe<B>>,
  as: A[]
): B[];

export const mapMaybe: typeof _mapMaybe = Fn.curry(
  <A, B>(f: (a: A) => Maybe<B>, as: A[]): B[] =>
    as.reduce((acc, a) => {
      const res = f(a);
      return isJust(res) ? [...acc, res.val] : acc;
    }, [] as B[])
);

export type MaybeRecord<T extends Dict<any>> = {
  [k in keyof T]: Maybe<T[k]>;
};

export const maybeRecord = <T extends Dict<any>>(x: T): MaybeRecord<T> =>
  Object.keys(x).reduce(
    (acc, k) => ({ ...acc, [k]: maybeNil(x[k]) }),
    {} as MaybeRecord<T>
  );

export const equals = Fn.curry(<A>(a: A, mx: Maybe<A>): boolean =>
  fromMaybe(false, fmap(Util.eq(a), mx))
);

// first f is the fallback, reverse of what you might expect to
// support currying
declare function _or<A, B>(
  f1: () => Maybe<B>
): (f0: () => Maybe<A>) => Maybe<A> | Maybe<B>;
declare function _or<A, B>(
  f1: () => Maybe<B>,
  f0: () => Maybe<A>
): Maybe<A> | Maybe<B>;

export const or: typeof _or = Fn.curry(
  <A, B>(f1: () => Maybe<B>, f0: () => Maybe<A>): Maybe<A> | Maybe<B> => {
    const ma = f0();
    return isJust(ma) ? ma : f1();
  }
);

declare function _unwrap<A>(fallback: A): (c: Maybe<A>) => A;
declare function _unwrap<A>(fallback: A, c: Maybe<A>): A;
export const unwrap: typeof _unwrap = Fn.curry(
  <A>(fallback: A, mx: Maybe<A>): A => mx.unwrap(fallback)
);

export const _do = makeDo<Maybe<any>>(pure, bind);
