import { Functor } from "../control/Functor";
export declare class Identity<A> extends Functor<A> {
    fmap: <B>(f: (a: A) => B) => B;
    unwrap: (fallback?: A | undefined) => A;
}
declare function _unwrap<A>(fallback: A): (c: Identity<A>) => A;
declare function _unwrap<A>(fallback: A, c: Identity<A>): A;
export declare const unwrap: typeof _unwrap;
export declare const makeId: <A>(a: A) => Identity<A>;
export {};
