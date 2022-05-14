import { A, C, Function } from "ts-toolbelt";
import { Monad } from "../control/Monad";
import * as Fn from "../base/Function";
import * as Maybe from "./Maybe";
import * as Util from "../base/Util";

export abstract class Either<A, B> extends Monad<A | B> {
  static pure(a: any) {
    return new Right(a);
  }

  static return_ = Either.pure;
}

export class Left<A> extends Either<A, any> {
  isLeft = Fn.always(true);
  isRight = Fn.always(false);

  fmap = <B>(f: (a: A) => B): Either<A, B> => this;
  apply = (f: Either<any, any>) => this;
  bind = (f: (a: any) => Either<A, any>): Either<A, any> => this;
}

export class Right<B> extends Either<any, B> {
  isLeft = Fn.always(false);
  isRight = Fn.always(true);

  fmap = <C>(f: (b: B) => C): Either<any, C> => new Right(f(this.val));
  apply = (f: Either<any, Function.Function>) => f.val(this.val);
  bind = (f: (a: any) => Either<any, any>): Either<any, any> => f(this.val);
}

export const left = <A>(a: A): Either<A, any> => new Left(a);
export const right = <B>(b: B): Either<any, B> => new Right(b);

export const isLeft = (x: Either<any, any>) => (x as Left<any>).isLeft();
export const isRight = (x: Either<any, any>) => (x as Right<any>).isRight();

export const either = Fn.curry(
  <A, B, C>(f0: (a: A) => C, f1: (b: B) => C, x: Either<A, B>): C =>
    isLeft(x) ? f0(x.val as A) : f1(x.val as B)
);

export const lefts = <A>(xs: Either<A, any>[]): A[] =>
  xs.reduce((acc, x) => (isLeft(x) ? [...acc, x.val] : acc), [] as A[]);

export const rights = <B>(xs: Either<any, B>[]): B[] =>
  xs.reduce((acc, x) => (isRight(x) ? [...acc, x.val] : acc), [] as B[]);

export const fromLeft = Fn.curry(
  <A>(fallback: A, x: Either<A, any>): A => (isLeft(x) ? x.val : fallback)
);

export const fromRight = Fn.curry(
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

export const fromMaybe = Fn.curry(
  <A, B>(error: A, m: Maybe.Maybe<B>): Either<A, B> =>
    Maybe.isNothing(m) ? left(error) : right(m.val)
);

export const eitherNil = Fn.curry(
  <A, B>(error: A, x: B | undefined): Either<A, B> =>
    Util.isNil(x) ? left(error) : right(x as B)
);

export const fmap = Either.fmap;
export const pure = Either.pure;
export const apply = Either.apply;
export const apply_ = Fn.flip(apply);
export const bind = Either.bind;
