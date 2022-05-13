import { ApplyFn, PureFn } from "../control/Applicative";
import { FMapFn } from "../control/Functor";
import * as M from "../control/Monad";
import * as Maybe from "./Maybe";
import * as Util from "../base/Util";

export type Left<A> = { __left: A } & M.Monad<A, "either">;
export type Right<B> = { __right: B } & M.Monad<B, "either">;

export type Either<A, B> = Left<A> | Right<B>;

type EitherFmap<A, B> = FMapFn<B, any, Either<A, B>, Either<A, any>>;
type EitherPure<A, B> = PureFn<Either<A, B>>;
type EitherApply<A, B, C> = ApplyFn<
  Either<A, (b: B) => C>,
  Either<A, B>,
  Either<A, C>
>;
type EitherBind<A, B, C> = M.BindFn<B, C, Either<A, B>, Either<A, C>>;

type EitherClass = M.MonadFactory<
  Either<any, any>,
  EitherFmap<any, any>,
  EitherPure<any, any>,
  EitherApply<any, any, any>,
  EitherBind<any, any, any>
>;

export const left = <A>(a: A) =>
  M.makeMonad<{ __left: A }, Left<A>>("either", { __left: a });

export const right = <B>(b: B) =>
  M.makeMonad<{ __right: B }, Right<B>>("either", { __right: b });

export const isLeft = (x: Either<any, any>) =>
  (x as Left<any>).__left !== undefined;
export const isRight = (x: Either<any, any>) =>
  (x as Right<any>).__right !== undefined;

export const either = <A, B, C>(
  f0: (a: A) => C,
  f1: (b: B) => C,
  x: Either<A, B>
): C => (isLeft(x) ? f0((x as Left<A>).__left) : f1((x as Right<B>).__right));

export const lefts = <A>(xs: Either<A, any>[]): A[] =>
  xs.reduce(
    (acc, x) => (isLeft(x) ? [...acc, (x as Left<A>).__left] : acc),
    [] as A[]
  );

export const rights = <B>(xs: Either<any, B>[]): B[] =>
  xs.reduce(
    (acc, x) => (isRight(x) ? [...acc, (x as Right<B>).__right] : acc),
    [] as B[]
  );

export const fromLeft = <A>(fallback: A, x: Either<A, any>): A =>
  isLeft(x) ? (x as Left<A>).__left : fallback;

export const fromRight = <B>(fallback: B, x: Either<any, B>): B =>
  isRight(x) ? (x as Right<B>).__right : fallback;

export const partitionEithers = <A, B>(xs: Either<A, B>[]): [A[], B[]] =>
  xs.reduce(
    (acc: [A[], B[]], x) =>
      isLeft(x)
        ? [[...acc[0], (x as Left<A>).__left], acc[1]]
        : [acc[0], [...acc[1], (x as Right<B>).__right]],
    [[], []]
  );

export const fromMaybe = <A, B>(error: A, m: Maybe.Maybe<B>): Either<A, B> =>
  Maybe.isNothing(m) ? left(error) : (M.bind(m, right) as Either<A, B>);

export const eitherNil = <A, B>(error: A, x: B | undefined): Either<A, B> =>
  Util.isNil(x) ? left(error) : right(x as B);

export const fmap = <A, B, C>(f: (b: B) => C, x: Either<A, B>): Either<A, C> =>
  (isRight(x) ? right(f((x as Right<any>).__right)) : x) as Either<A, C>;

export const pure = right;

export const apply = <A, B, C, T extends Either<A, (b: B) => C>>(
  x: T,
  y: Either<any, B>
): Either<A, C> =>
  fmap((g: (b: B) => C) => g((y as Right<any>).__right), x) as Either<A, C>;

export const bind = <A, B, C>(
  x: Either<A, B>,
  f: (b: B) => Either<A, C>
): Either<A, C> =>
  (isRight(x) ? f((x as Right<B>).__right) : x) as Either<A, C>;

M.implementMonadClass<EitherClass>("either", { fmap, pure, apply, bind });
