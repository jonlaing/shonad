import { Functor } from "../control/Functor";

export class Identity<A> extends Functor<A> {
  fmap = <B>(f: (a: A) => B) => f(this.val);
  unwrap = (fallback?: A) => this.val;
}

export const unwrap = <A>(fallback: A, i: Identity<A>) => i.unwrap(fallback);
export const makeId = <A>(a: A) => new Identity(a);
