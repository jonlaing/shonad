import * as Fn from "../base/Function";
import { Typeclass } from "../base/Typeclass";

export abstract class Functor<T> extends Typeclass<T> {
  static fmap = Fn.curry(<A, B>(f: (a: A) => B, x: Functor<A>) => x.fmap(f));

  abstract fmap: (f: (a: T) => any) => Functor<any>;
}

/**
 * Utility function meant to be used in tests to ensure your Functor obeys the functor laws
 *
 * @param mx - M x
 * @param f - x => y
 * @param g - y => z
 * @returns `true` or `false`
 */
export function obeysFunctorLaws<T extends Functor<any>>(
  mx: T,
  f: (a: any) => any,
  g: (a: any) => any
): boolean {
  return (
    mx.fmap(Fn.identity).unwrap({}) === Fn.identity(mx).unwrap({}) &&
    mx.fmap(Fn.compose(g, f)).unwrap({}) ===
      Fn.compose<Functor<any>, Functor<any>>(
        Functor.fmap(g),
        Functor.fmap(f)
      )(mx).unwrap({})
  );
}
