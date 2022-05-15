import { Functor } from "../control/Functor";
export declare class Identity<A> extends Functor<A> {
    fmap: <B>(f: (a: A) => B) => B;
}
export declare const getId: <A>(i: Identity<A>) => A;
export declare const makeId: <A>(a: A) => Identity<A>;
