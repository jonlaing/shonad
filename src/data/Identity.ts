import { Functor } from "../control/Functor";

export class Identity<A> extends Functor<A> {
  fmap = <B>(f: (a: A) => B) => f(this.val);
}

export const getId = <A>(i: Identity<A>) => i.val;
export const makeId = <A>(a: A) => new Identity(a);
