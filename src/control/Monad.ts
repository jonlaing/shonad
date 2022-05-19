import { Function } from "ts-toolbelt";
import { Applicative, StaticApplyFn } from "./Applicative";
import * as Fn from "../base/Function";
import { bind } from "../data/Maybe";

/**
 * Abstract Monad class. See `Maybe` and `Either` for detailed usage.
 *
 * @example
 *
 * export abstract class Maybe<A> extends Monad<A> {
 *  static pure(a: any) {
 *    return new Just(a);
 *  }
 * }
 *
 * export class Just<A> extends Maybe<A> {
 *  isJust = Fn.always(true);
 *  isNothing = Fn.always(false);
 *
 *  fmap = <B>(f: (a: A) => B): Maybe<B> => new Just(f(this.val)) as Maybe<B>;
 *  apply = (ma: Maybe<any>): Maybe<any> => {
 *    return (
 *      isJust(ma)
 *        ? ma.fmap((this as unknown as Just<Function.Function>).val)
 *        : nothing()
 *    ) as Maybe<any>;
 *  };
 *  bind = (f: (a: any) => Maybe<any>): Maybe<any> => f(this.val);
 *  unwrap = (fallback: A) => this.val;
 *  equals = (a: A) => this.fmap(Util.eq(a)).unwrap(false);
 * }
 *
 * export class Nothing<A> extends Maybe<A> {
 *  isJust = Fn.always(false);
 *  isNothing = Fn.always(true);
 *
 *  fmap = <B>(f: (a: A) => any): Maybe<B> =>
 *    new Nothing(this.val as unknown as B);
 *  apply = (f: Maybe<any>): Maybe<any> => this;
 *  bind = (f: (a: any) => Maybe<any>) => this;
 *
 *  unwrap = (fallback: A) => fallback;
 *  equals = Fn.always(false);
 * }
 *
 * @see Functor
 * @see Applicative
 * @see Maybe
 * @see Either
 *
 */
export abstract class Monad<A> extends Applicative<A> implements IMonad<A> {
  static bind = Fn.curry((x: Monad<any>, f: (a: any) => Monad<any>) =>
    x.bind(f)
  );
  declare static apply: StaticApplyFn<Monad<Function.Function>, Monad<any>>;

  abstract fmap: (f: (a: A) => any) => Monad<any>;
  abstract apply: (f: any) => Monad<any>;
  abstract bind: (f: Fn.Function<any, Monad<any>>) => Monad<any>;
}

const fixYield = <A>(val: any): A => val as unknown as A;

export type DoFuncReturn<T> = Generator<T, any, T | undefined>;

export interface IMonad<A> extends Applicative<A> {
  fmap: (f: (a: A) => any) => IMonad<any>;
  apply: (f: any) => IMonad<any>;
  bind: (f: Fn.Function<any, IMonad<any>>) => IMonad<any>;
}

/**
 * Makes type spcefic `do` notation for a Monad.
 *
 * @remarks In the final do, the generator function takes a parameter that "fixes" the
 * type of the `yield`. Without it, the types don't work properly, because yield defaults
 * to the type of the Monad, rather than the containing type.
 *
 * @example
 *
 * export const _do = makeDo<Maybe<any>>(pure, bind);
 *
 * const ma = maybe.just(1)
 * const mb = maybe.just(2)
 *
 * _do(function* (_) {
 *    const a: number = _(yield ma) // forces ma to be a number
 *    const b: number = _(yield mb) // force mb to be a number
 *
 *    return a + b
 * }) // maybe.just(3)
 *
 * @param pure - the `pure` function from the Applicative interface.
 * @param bind - the `bind` function from the Monad interface
 * @returns `do` notation function that takes a `fix` param to cast Monads into their containing type (See example)
 */
export const makeDo =
  <T extends Monad<any>>(
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

/**
 * Utility function meant to be used in tests to ensure your Monad obeys the monad laws
 *
 * @remarks

 * Since all Monads are Functors and Applicatives, you should also use
 * {@link obeysFunctorLaws} and {@link obeysApplicativeLaws} in your tests.
 *
 * @param mx - M x
 * @param g - x => Monad y
 * @param h - y => Monad z
 * @returns `true` or `false`
 */
export function obeysMonadLaws<T extends Monad<any>>(
  mx: T,
  g: (a: any) => T,
  h: (a: any) => T
): boolean {
  return (
    mx.bind(g).bind(h).unwrap({}) ===
    mx.bind((x: any) => g(x).bind(h)).unwrap({})
  );
}
