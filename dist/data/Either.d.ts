import { Function } from "ts-toolbelt";
import { Monad } from "../control/Monad";
import * as Maybe from "./Maybe";
export declare abstract class Either<A, B> extends Monad<A | B> {
    static pure(a: any): Right<unknown>;
    static return_: typeof Either.pure;
}
export declare class Left<A> extends Either<A, any> {
    isLeft: (a?: any) => boolean;
    isRight: (a?: any) => boolean;
    fmap: <B>(f: (a: A) => B) => Either<A, B>;
    apply: (f: Either<any, any>) => this;
    bind: (f: (a: any) => Either<A, any>) => Either<A, any>;
    unwrap: (fallback: any) => any;
}
export declare class Right<B> extends Either<any, B> {
    isLeft: (a?: any) => boolean;
    isRight: (a?: any) => boolean;
    fmap: <C>(f: (b: B) => C) => Either<any, C>;
    apply: (f: Either<any, Function.Function>) => any;
    bind: (f: (a: any) => Either<any, any>) => Either<any, any>;
    unwrap: (fallback: B) => any;
}
export declare const left: <A>(a: A) => Either<A, any>;
export declare const right: <B>(b: B) => Either<any, B>;
export declare const isLeft: (x: Either<any, any>) => boolean;
export declare const isRight: (x: Either<any, any>) => boolean;
declare function _either<A, B, C>(f0: (a: A) => C): (f1: (b: B) => C, x: Either<A, B>) => C;
declare function _either<A, B, C>(f0: (a: A) => C, f1: (b: B) => C): (x: Either<A, B>) => C;
declare function _either<A, B, C>(f0: (a: A) => C, f1: (b: B) => C, x: Either<A, B>): C;
export declare const either: typeof _either;
export declare const lefts: <A>(xs: Either<A, any>[]) => A[];
export declare const rights: <B>(xs: Either<any, B>[]) => B[];
declare function _fromLeft<A>(fallback: A): (x: Either<A, any>) => A;
declare function _fromLeft<A>(fallback: A, x: Either<A, any>): A;
export declare const fromLeft: typeof _fromLeft;
declare function _fromRight<B>(fallback: B): (x: Either<any, B>) => B;
declare function _fromRight<B>(fallback: B, x: Either<any, B>): B;
export declare const fromRight: typeof _fromRight;
export declare const partitionEithers: <A, B>(xs: Either<A, B>[]) => [A[], B[]];
declare function _fromMaybe<A, B>(error: A): (m: Maybe.Maybe<B>) => Either<A, B>;
declare function _fromMaybe<A, B>(error: A, m: Maybe.Maybe<B>): Either<A, B>;
export declare const fromMaybe: typeof _fromMaybe;
export declare const eitherNil: Function.Curry<(<A, B>(error: A, x: B | undefined) => Either<A, B>)>;
export declare const equals: Function.Curry<(<A>(a: A, mx: Either<any, A>) => boolean)>;
export declare const unwrap: <A, B>(fallback: B, e: Either<A, B>) => B;
export declare const fmap: import("../control/Functor").StaticFMap<import("../control/Functor").Functor<any>>;
export declare const pure: typeof Either.pure;
export declare const apply: import("../control/Applicative").StaticApplyFn<Monad<Function.Function<any, any>>, Monad<any>>;
export declare const apply_: Function.Curry<(a: any, b: any) => any>;
export declare const bind: Function.Curry<(x: Monad<any>, f: (a: any) => Monad<any>) => Monad<any>>;
export {};
