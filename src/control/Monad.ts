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

const fixYield = <A>(val: any): A => val as unknown as A;

export type DoFuncReturn<T> = Generator<T, any, T | undefined>;

export const makeDo =
  <T>(
    pure: Fn.Function<any, T>,
    bind: Function.Function<[T, Fn.Function<any, T>], T>
  ) =>
  (f: (fix: typeof fixYield) => DoFuncReturn<T>): T => {
    const gen = f(fixYield);
    const doNext = (input?: T): T => {
      const { value, done } = gen.next(input);
      if (done) return pure(value);

      return bind(value, doNext);
    };

    return doNext();
  };
