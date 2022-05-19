import { Function } from "ts-toolbelt";
import { makeDo, Monad } from "../control/Monad";
import * as Fn from "../base/Function";
import * as Maybe from "./Maybe";
import * as Util from "../base/Util";

export abstract class Either<A, B> extends Monad<A | B> {
  static pure(a: any) {
    return new Right(a);
  }

  abstract fmap: <C>(f: (b: any) => C) => Either<A, C>;
  abstract apply: (ma: Either<any, any>) => Either<any, any>;
  abstract bind: (f: Fn.Function<any, Either<any, any>>) => Either<any, any>;
}

export class Left<A> extends Either<A, any> {
  isLeft = Fn.always(true);
  isRight = Fn.always(false);

  fmap = <C>(f: (b: any) => C): Either<A, C> => this as Either<A, C>;
  apply = (ma: Either<any, any>) => this;
  bind = <C>(f: (a: any) => Either<A, any>): Either<A, any> => this;
  unwrap = (fallback: any) => fallback;

  equals = Fn.always(false);
}

export class Right<B> extends Either<any, B> {
  isLeft = Fn.always(false);
  isRight = Fn.always(true);

  fmap = <C>(f: (b: B) => C): Either<any, C> =>
    new Right(f(this.val)) as unknown as Either<any, C>;
  apply = (ma: Either<any, any>) =>
    ma.fmap((this as unknown as Either<any, Function.Function>).val) as Either<
      any,
      any
    >;
  bind = <C>(f: (b: B) => Either<any, C>): Either<any, C> => f(this.val);
  unwrap = (fallback: B) => this.val;

  equals = (b: B) => this.fmap(Util.eq(b)).unwrap(false);
}

export const left = <A>(a: A): Either<A, any> => new Left(a);
export const right = <B>(b: B): Either<any, B> => new Right(b);

export const isLeft = (x: Either<any, any>) => (x as Left<any>).isLeft();
export const isRight = (x: Either<any, any>) => (x as Right<any>).isRight();

declare function _either<A, B, C>(
  f0: (a: A) => C
): {
  (f1: (b: B) => C, x: Either<A, B>): C;
  (f1: (b: B) => C): (x: Either<A, B>) => C;
};
declare function _either<A, B, C>(
  f0: (a: A) => C,
  f1: (b: B) => C
): (x: Either<A, B>) => C;
declare function _either<A, B, C>(
  f0: (a: A) => C,
  f1: (b: B) => C,
  x: Either<A, B>
): C;

export const either: typeof _either = Fn.curry(
  <A, B, C>(f0: (a: A) => C, f1: (b: B) => C, x: Either<A, B>): C =>
    isLeft(x) ? f0(x.val as A) : f1(x.val as B)
);

export const lefts = <A>(xs: Either<A, any>[]): A[] =>
  xs.reduce((acc, x) => (isLeft(x) ? [...acc, x.val] : acc), [] as A[]);

export const rights = <B>(xs: Either<any, B>[]): B[] =>
  xs.reduce((acc, x) => (isRight(x) ? [...acc, x.val] : acc), [] as B[]);

declare function _fromLeft<A>(fallback: A): (x: Either<A, any>) => A;
declare function _fromLeft<A>(fallback: A, x: Either<A, any>): A;

export const fromLeft: typeof _fromLeft = Fn.curry(
  <A>(fallback: A, x: Either<A, any>): A => (isLeft(x) ? x.val : fallback)
);

declare function _fromRight<B>(fallback: B): (x: Either<any, B>) => B;
declare function _fromRight<B>(fallback: B, x: Either<any, B>): B;

export const fromRight: typeof _fromRight = Fn.curry(
  <B>(fallback: B, x: Either<any, B>): B => (isRight(x) ? x.val : fallback)
);

export const partitionEithers = <A, B>(xs: Either<A, B>[]): [A[], B[]] =>
  xs.reduce(
    (acc: [A[], B[]], x) =>
      (isLeft(x)
        ? [[...acc[0], x.val], acc[1]]
        : [acc[0], [...acc[1], x.val]]) as [A[], B[]],
    [[], []]
  );

declare function _fromMaybe<A, B>(
  error: A
): (m: Maybe.Maybe<B>) => Either<A, B>;
declare function _fromMaybe<A, B>(error: A, m: Maybe.Maybe<B>): Either<A, B>;
export const fromMaybe: typeof _fromMaybe = Fn.curry(
  <A, B>(error: A, m: Maybe.Maybe<B>): Either<A, B> =>
    Maybe.isNothing(m) ? left(error) : right(m.val)
);

export const eitherNil = Fn.curry(
  <A, B>(error: A, x: B | undefined): Either<A, B> =>
    Util.isNil(x) ? left(error) : right(x as B)
);

export const equals = Fn.curry(<A>(a: A, mx: Either<any, A>): boolean =>
  fromRight(false, fmap(Util.eq(a), mx))
);

declare function _unwrap<B>(fallback: B): (c: Either<any, B>) => B;
declare function _unwrap<B>(fallback: B, c: Either<any, B>): B;
export const unwrap: typeof _unwrap = Fn.curry(
  <B>(fallback: B, e: Either<any, B>): B => e.unwrap(fallback) as B
);

declare function _fmap<A, B, C>(
  f: (b: B) => C
): (mx: Either<A, B>) => Either<A, C>;
declare function _fmap<A, B, C>(f: (b: B) => C, mx: Either<A, B>): Either<A, C>;

declare function _apply<A, B, C>(
  f: Either<A, Fn.Function<B, C>>
): (mx: Either<A, B>) => Either<A, C>;
declare function _apply<A, B, C>(
  f: Either<A, Fn.Function<B, C>>,
  mx: Either<A, B>
): Either<A, C>;

declare function _apply_<A, B, C>(
  f: Either<A, Fn.Function<B, C>>
): (mx: Either<A, B>) => Either<A, C>;
declare function _apply_<A, B, C>(
  f: Either<A, Fn.Function<B, C>>,
  mx: Either<A, B>
): Either<A, C>;

declare function _bind<A, B, C>(
  mx: Either<A, B>
): (f: (b: B) => Either<A, C>) => Either<A, C>;
declare function _bind<A, B, C>(
  mx: Either<A, B>,
  f: (b: B) => Either<A, C>
): Either<A, C>;

export const fmap: typeof _fmap = Either.fmap;
export const pure: (a: any) => Either<any, any> = Either.pure;
export const apply: typeof _apply = Either.apply;
export const apply_: typeof _apply_ = Fn.flip<typeof _apply>(apply);
export const bind: typeof _bind = Either.bind;

export const _do = makeDo<Either<any, any>>(pure, bind);
