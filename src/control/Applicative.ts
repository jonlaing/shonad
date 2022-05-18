import { Function, T } from "ts-toolbelt";
import * as Fn from "../base/Function";
import { Functor } from "./Functor";

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
    ): Applicative<any> => f.apply(x)
  );

  abstract fmap: (f: (a: A) => any) => Applicative<any>;
  abstract apply: (f: any) => Applicative<any>;
}

/**
 * Utility function meant to be used in tests to ensure your Applicative
 * obeys the applicative laws
 *
 * @remarks
 *
 * Since all Applicatives are Functors, you should also
 * use {@link obeysFunctorLaws} in your tests.
 *
 * @param pure - x => M x
 * @param f - x => y
 * @param u - M (x => y => z)
 * @param v - M x
 * @param w - M y
 * @returns `true` or `false`
 */
export function obeysApplicativeLaws<U extends Applicative<any>>(
  pure: (a: any) => U,
  x: any,
  f: Fn.Function<any, any>,
  u: Applicative<(a: any) => (b: any) => any>,
  v: U,
  w: U
): boolean {
  return (
    pure(Fn.identity).apply(v).unwrap({}) === v.unwrap({}) &&
    pure(f).apply(pure(x)).unwrap({}) === pure(f(x)).unwrap({}) &&
    pure(Fn.compose).apply(u).apply(v).apply(w).unwrap({}) ===
      u.apply(v).apply(w).unwrap({})
  );
}
