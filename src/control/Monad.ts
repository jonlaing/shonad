import { Function } from "ts-toolbelt";
import { Applicative, StaticApplyFn } from "./Applicative";
import * as Fn from "../base/Function";

export type StaticBindFn<
  T extends Monad<any>,
  U extends Monad<any>
> = Function.Curry<Function.Function<[any, U], T>>;

export abstract class Monad<A> extends Applicative<A> {
  static bind = Fn.curry((x: Monad<any>, f: (a: any) => Monad<any>) =>
    x.bind(f)
  );
  static apply: StaticApplyFn<Monad<Function.Function>, Monad<any>>;

  abstract bind: (f: (a: any) => Monad<any>) => Monad<any>;
}
