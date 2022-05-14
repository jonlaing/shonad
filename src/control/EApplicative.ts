import { Function } from "ts-toolbelt";
import * as Fn from "../base/Function";
import { Functor } from "./EFunctor";

export type StaticApplyFn<
  T extends Applicative<Function.Function>,
  U extends Applicative<any>
> = Function.Curry<Function.Function<[T, U], U>>;

export abstract class Applicative<A> extends Functor<A> {
  static apply: StaticApplyFn<
    Applicative<Function.Function>,
    Applicative<any>
  > = Fn.curry(
    (
      f: Applicative<Function.Function>,
      x: Applicative<any>
    ): Applicative<any> => x.apply(f)
  );

  abstract apply: (f: any) => Applicative<any>;
}