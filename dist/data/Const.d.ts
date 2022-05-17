import { Functor } from "../control/Functor";
export declare class Const<A, B> extends Functor<A> {
    fmap: (f: any) => this;
    unwrap: (fallback?: any) => A;
}
export declare const fmap: import("../control/Functor").StaticFMap<Functor<any>>;
export declare const unwrap: <A>(fallback: A, c: Const<A, any>) => A;
export declare const makeConst: <A>(a: A) => Const<A, unknown>;
