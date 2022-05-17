import { Functor } from "../control/Functor";
import * as Fn from "../base/Function";

export class Identity<A> extends Functor<A> {
  fmap = <B>(f: (a: A) => B) => f(this.val);
  unwrap = (fallback?: A) => this.val;
}

declare function _unwrap<A>(fallback: A): (c: Identity<A>) => A;
declare function _unwrap<A>(fallback: A, c: Identity<A>): A;
export const unwrap: typeof _unwrap = Fn.curry(
  <A>(fallback: A, i: Identity<A>) => i.unwrap(fallback)
);
export const makeId = <A>(a: A) => new Identity(a);
