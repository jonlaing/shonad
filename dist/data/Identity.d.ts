import { Functor } from "../control/Functor";
export declare class Identity<A> extends Functor<A> {
    fmap: <B>(f: (a: A) => B) => B;
    unwrap: (fallback?: A | undefined) => A;
}
export declare const unwrap: <A>(fallback: A, i: Identity<A>) => A;
export declare const makeId: <A>(a: A) => Identity<A>;
