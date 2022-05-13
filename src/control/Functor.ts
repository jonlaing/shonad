import { Implementations, Typeclass } from "../base/Typeclass";

export type ExtractFunctorVal<T> = T extends Functor<infer X, any> ? X : never;
export type ExtractFunctor<T> = T extends FunctorFactory<infer X, any>
  ? X
  : never;
export type ExtractFMap<T> = T extends FunctorFactory<any, infer X> ? X : never;
export type IsolateFunctor<T extends Functor<any, any>> = Pick<T, "__functor">;

export type FMapFn<
  A = any,
  B = any,
  T extends Functor<A, any> = Functor<any, any>,
  U extends Functor<B, any> = Functor<any, any>
> = (f: (a: A) => B, x: T) => U;

export interface FunctorFactory<
  T extends Functor<any, any>,
  Fmap extends FMapFn<any, any, T>
> extends Typeclass<T> {
  functions: {
    fmap: Fmap;
  };
}

export type Functor<T, name extends string> = { __functor: string };

const implementations = new Implementations<FunctorFactory<any, any>>();

export const implementFunctorClass = <T extends FunctorFactory<any, any>>(
  name: string,
  fmap: ExtractFMap<T>
) => {
  const _class = {
    functions: {
      fmap,
    },
  } as T;

  implementations.add(name, _class);
};

export const makeFunctor = <T, U extends Functor<T, any>>(
  name: string,
  x: T
): U => {
  return { ...x, __functor: name } as unknown as U;
};

export function fmap<
  A,
  B,
  T extends Functor<A, any>,
  U extends Functor<B, any>
>(f: (a: A) => B): (x: T) => U;
export function fmap<
  A,
  B,
  T extends Functor<A, any>,
  U extends Functor<B, any>
>(f: (a: A) => B, x: T): U;
export function fmap<
  A,
  B,
  T extends Functor<A, any>,
  U extends Functor<B, any>
>(f: (a: A) => B, x?: T): any {
  if (x === undefined) {
    return (x0: T) => fmap(f, x0) as U;
  }
  return implementations.get(x.__functor).functions.fmap(f, x) as U;
}
