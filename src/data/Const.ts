import { A } from "ts-toolbelt";
import { Functor } from "../control/Functor";

export class Const<A, B> extends Functor<A> {
  fmap = (f: any) => this;
  unwrap = (fallback?: any) => this.val;
}

export const fmap = Const.fmap;

export const unwrap = <A>(fallback: A, c: Const<A, any>): A => c.val;

export const makeConst = <A>(a: A) => new Const(a);
