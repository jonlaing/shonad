import { Function } from "ts-toolbelt";
import { StaticApplyFn } from "../control/EApplicative";
import { StaticFMap } from "../control/EFunctor";
import { Monad, StaticBindFn } from "../control/EMonad";

export default abstract class Maybe<A> extends Monad<A> {
  static fmap: StaticFMap<Maybe<any>>;
  static apply: StaticApplyFn<Maybe<Function.Function>, Maybe<any>>;
  static bind: StaticBindFn<Maybe<any>, Maybe<any>>;

  static pure(a: any) {
    return new Just(a);
  }
  static return_ = Maybe.pure;
}

export class Just<A> extends Maybe<A> {
  fmap = <B>(f: (a: A) => B): Maybe<B> => new Just(f(this.val));
  apply = (f: Maybe<Function.Function>) => f.val(this.val);
  bind = (f: (a: any) => Maybe<any>) => f(this.val);
}

export class Nothing<A> extends Maybe<A> {
  fmap = <B>(f: (a: A) => any): Maybe<B> =>
    new Nothing(this.val as unknown as B);
  apply = (f: Maybe<Function.Function>): Maybe<any> => this;
  bind = (f: (a: any) => Maybe<any>) => this;
}

export const just = <A>(x: A) => new Just<A>(x);
export const nothing = <A>(x?: A) => new Nothing<A>(x as A);

const c = just(1).fmap((x) => x + 1);
