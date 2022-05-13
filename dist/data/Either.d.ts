import * as M from "../control/Monad";
import * as Maybe from "./Maybe";
export declare type Left<A> = {
    __left: A;
} & M.Monad<A, "either">;
export declare type Right<B> = {
    __right: B;
} & M.Monad<B, "either">;
export declare type Either<A, B> = Left<A> | Right<B>;
export declare const left: <A>(a: A) => Left<A>;
export declare const right: <B>(b: B) => Right<B>;
export declare const isLeft: (x: Either<any, any>) => boolean;
export declare const isRight: (x: Either<any, any>) => boolean;
export declare const either: <A, B, C>(f0: (a: A) => C, f1: (b: B) => C, x: Either<A, B>) => C;
export declare const lefts: <A>(xs: Either<A, any>[]) => A[];
export declare const rights: <B>(xs: Either<any, B>[]) => B[];
export declare const fromLeft: <A>(fallback: A, x: Either<A, any>) => A;
export declare const fromRight: <B>(fallback: B, x: Either<any, B>) => B;
export declare const partitionEithers: <A, B>(xs: Either<A, B>[]) => [A[], B[]];
export declare const fromMaybe: <A, B>(error: A, m: Maybe.Maybe<B>) => Either<A, B>;
export declare const eitherNil: <A, B>(error: A, x: B | undefined) => Either<A, B>;
export declare const fmap: <A, B, C>(f: (b: B) => C, x: Either<A, B>) => Either<A, C>;
export declare const pure: <B>(b: B) => Right<B>;
export declare const apply: <A, B, C, T extends Either<A, (b: B) => C>>(x: T, y: Either<any, B>) => Either<A, C>;
export declare const bind: <A, B, C>(x: Either<A, B>, f: (b: B) => Either<A, C>) => Either<A, C>;
