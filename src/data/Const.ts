import * as Fn from "../base/Function";
import { Functor } from "../control/Functor";

export class Const<A, B> extends Functor<A> {
  fmap = (f: any) => this;
  unwrap = (fallback?: any) => this.val;
}

export const fmap = Const.fmap;

declare function _unwrap<A>(fallback: A): (c: Const<A, any>) => A;
declare function _unwrap<A>(fallback: A, c: Const<A, any>): A;
export const unwrap: typeof _unwrap = Fn.curry(
  <A>(fallback: A, c: Const<A, any>): A => c.val
);

export const makeConst = <A>(a: A) => new Const(a);
