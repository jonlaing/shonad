import {
  Applicative,
  ApplicativeFactory,
  ApplyFn,
  ExtractApplicative,
  implementApplicativeClass,
  PureFn,
} from "./Applicative";
import { FMapFn } from "./Functor";
import { Implementations } from "../base/Typeclass";

export type ExtractMonadVal<T> = T extends Monad<infer X, any> ? X : never;
export type ExtractMonad<T> = T extends MonadFactory<
  infer X,
  any,
  any,
  any,
  any,
  any
>
  ? X
  : never;

export type Monad<T, name extends string> = { __monad: name } & Applicative<
  T,
  name
>;

export type BindFn<
  A = any,
  B = any,
  T extends Monad<A, any> = Monad<A, any>,
  U extends Monad<B, any> = Monad<B, any>
> = (x: T, f: (a: A) => U) => U;

export type ReturnFn<T extends Monad<any, any>> = (x: ExtractMonadVal<T>) => T;

export interface MonadFactory<
  T extends Monad<any, any>,
  FMap extends FMapFn<any, any, T, T>,
  Pure extends PureFn<T>,
  Apply extends ApplyFn<any, any, any>,
  Bind extends BindFn<any, any, T, T>,
  Return extends ReturnFn<T> | Pure = Pure
> extends ApplicativeFactory<T, FMap, Pure, Apply> {
  functions: {
    fmap: FMap;
    pure: Pure;
    apply: Apply;
    return: Return;
    bind: Bind;
  };
}

const implementations = new Implementations<
  MonadFactory<any, any, any, any, any, any>
>();

interface ImplementMonadArgs<T extends Monad<any, any>> {
  fmap: FMapFn<any, any, T, T>;
  pure: PureFn<any>;
  apply: ApplyFn<any, any, any>;
  return?: ReturnFn<any>;
  bind: BindFn<any, any, T, T>;
}

export const implementMonadClass = <
  T extends MonadFactory<any, any, any, any, any, any>
>(
  name: string,
  {
    fmap,
    pure,
    apply,
    return: return_,
    bind,
  }: ImplementMonadArgs<ExtractMonad<T>>
) => {
  const _class = {
    functions: {
      return: return_ || pure,
      bind,
    },
  } as T;

  implementations.add(name, _class);
  implementApplicativeClass(name, {
    fmap: fmap as unknown as FMapFn<ExtractApplicative<T>>,
    pure,
    apply,
  });
};

export const makeMonad = <T, U extends Monad<T, any>>(
  name: string,
  x: T
): U => {
  return {
    ...x,
    __monad: name,
    __applicative: name,
    __functor: name,
  } as unknown as U;
};

export function bind<A, T extends Monad<A, any>, U extends Monad<any, any>>(
  x: T
): (f: (a: A) => U) => U;
export function bind<A, T extends Monad<A, any>, U extends Monad<any, any>>(
  x: T,
  f: (a: A) => U
): U;
export function bind<A, T extends Monad<A, any>, U extends Monad<any, any>>(
  x: T,
  f?: (a: A) => U
): any {
  if (f === undefined) {
    return (f: (a: A) => U) => bind(x, f);
  }
  return implementations.get(x.__monad).functions.bind(x, f);
}
