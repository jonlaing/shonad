import { Functor } from "../control/Functor";
export declare class Const<A, B> extends Functor<A> {
    fmap: (f: any) => this;
    unwrap: (fallback?: any) => A;
}
export declare const fmap: import("../control/Functor").StaticFMap<Functor<any>>;
declare function _unwrap<A>(fallback: A): (c: Const<A, any>) => A;
declare function _unwrap<A>(fallback: A, c: Const<A, any>): A;
export declare const unwrap: typeof _unwrap;
export declare const makeConst: <A>(a: A) => Const<A, unknown>;
export {};
