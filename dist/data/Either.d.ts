import { Function } from "ts-toolbelt";
import { Monad } from "../control/Monad";
import * as Fn from "../base/Function";
import * as Maybe from "./Maybe";
export declare abstract class Either<A, B> extends Monad<A | B> {
    static pure(a: any): Right<unknown>;
}
export declare class Left<A> extends Either<A, any> {
    isLeft: (a?: any) => boolean;
    isRight: (a?: any) => boolean;
    fmap: <C>(f: (b: any) => C) => Either<A, C>;
    apply: (ma: Either<any, any>) => this;
    bind: <C>(f: (a: any) => Either<A, any>) => Either<A, any>;
    unwrap: (fallback: any) => any;
    equals: (a?: any) => boolean;
}
export declare class Right<B> extends Either<any, B> {
    isLeft: (a?: any) => boolean;
    isRight: (a?: any) => boolean;
    fmap: <C>(f: (b: B) => C) => Either<any, C>;
    apply: (ma: Either<any, any>) => Either<any, any>;
    bind: <C>(f: (b: B) => Either<any, C>) => Either<any, C>;
    unwrap: (fallback: B) => any;
    equals: (b: B) => any;
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
declare function _unwrap<B>(fallback: B): (c: Either<any, B>) => B;
declare function _unwrap<B>(fallback: B, c: Either<any, B>): B;
export declare const unwrap: typeof _unwrap;
declare function _fmap<A, B, C>(f: (b: B) => C): (mx: Either<A, B>) => Either<A, C>;
declare function _fmap<A, B, C>(f: (b: B) => C, mx: Either<A, B>): Either<A, C>;
declare function _apply<A, B, C>(f: Either<A, Fn.Function<B, C>>): (mx: Either<A, B>) => Either<A, C>;
declare function _apply<A, B, C>(f: Either<A, Fn.Function<B, C>>, mx: Either<A, B>): Either<A, C>;
declare function _apply_<A, B, C>(f: Either<A, Fn.Function<B, C>>): (mx: Either<A, B>) => Either<A, C>;
declare function _apply_<A, B, C>(f: Either<A, Fn.Function<B, C>>, mx: Either<A, B>): Either<A, C>;
declare function _bind<A, B, C>(mx: Either<A, B>): (f: (b: B) => Either<A, C>) => Either<A, C>;
declare function _bind<A, B, C>(mx: Either<A, B>, f: (b: B) => Either<A, C>): Either<A, C>;
export declare const fmap: typeof _fmap;
export declare const pure: (a: any) => Either<any, any>;
export declare const apply: typeof _apply;
export declare const apply_: typeof _apply_;
export declare const bind: typeof _bind;
export declare const _do: (f: (fix: <A>(val: any) => A) => import("../control/Monad").DoFuncReturn<Either<any, any>>) => Either<any, any>;
export {};
