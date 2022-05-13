import {
  FMapFn,
  Functor,
  FunctorFactory,
  implementFunctorClass,
} from "./Functor";
import { Implementations } from "../base/Typeclass";

export type ExtractApplicativeVal<T> = T extends Applicative<infer X, any>
  ? X
  : never;
export type ExtractApplicativeName<T> = T extends Applicative<any, infer X>
  ? X
  : never;
export type ExtractApplicativeParam<
  T extends Applicative<(a: any) => any, any>
> = T extends Applicative<(a: infer X) => any, any> ? X : never;
export type ExtractApplicativeReturn<
  T extends Applicative<(a: any) => any, any>
> = T extends Applicative<(a: any) => infer X, any> ? X : never;
export type ExtractApplicative<T> = T extends ApplicativeFactory<
  infer X,
  any,
  any,
  any
>
  ? X
  : never;
export type IsolateApplicative<T extends Applicative<any, any>> = Pick<
  T,
  "__applicative" | "__functor"
>;

export type Applicative<T, name extends string> = {
  __applicative: name;
} & Functor<T, name>;

export type ApplyFn<
  T extends Applicative<(a: any) => any, any>,
  U extends Applicative<ExtractApplicativeParam<T>, any>,
  R extends Applicative<ReturnType<ExtractApplicativeVal<T>>, any>
> = (x: T, y: U) => R;

export type PureFn<T extends Applicative<any, any>> = (
  x: ExtractApplicativeVal<T>
) => T;

export interface ApplicativeFactory<
  T extends Applicative<any, any>,
  FMap extends FMapFn<any, any, T, T>,
  Pure extends PureFn<T>,
  Apply extends ApplyFn<any, any, any>
> extends FunctorFactory<T, FMap> {
  functions: {
    fmap: FMap;
    pure: Pure;
    apply: Apply;
  };
}

const implementations = new Implementations<
  ApplicativeFactory<any, any, any, any>
>();

interface ImplementApplicativeArgs<T extends Applicative<any, any>> {
  fmap: FMapFn<any, any, T, T>;
  pure: PureFn<any>;
  apply: ApplyFn<any, any, any>;
}
export const implementApplicativeClass = <
  T extends ApplicativeFactory<any, any, any, any>
>(
  name: string,
  { fmap, pure, apply }: ImplementApplicativeArgs<ExtractApplicative<T>>
) => {
  const _class = {
    functions: {
      pure,
      apply,
    },
  } as T;

  implementations.add(name, _class);
  implementFunctorClass(name, fmap);
};

export const makeApplicative = <T, U extends Applicative<T, any>>(
  name: string,
  x: T
): U => {
  return { ...x, __applicative: name, __functor: name } as unknown as U;
};

export function apply<T extends Applicative<(a: any) => any, any>>(
  f: T
): (
  x: Applicative<ExtractApplicativeParam<T>, ExtractApplicativeName<T>>
) => Applicative<ExtractApplicativeReturn<T>, ExtractApplicativeName<T>>;
export function apply<T extends Applicative<(a: any) => any, any>>(
  f: T,
  x: Applicative<ExtractApplicativeParam<T>, ExtractApplicativeName<T>>
): Applicative<ExtractApplicativeReturn<T>, ExtractApplicativeName<T>>;
export function apply<T extends Applicative<(a: any) => any, any>>(
  f: T,
  x?: Applicative<ExtractApplicativeParam<T>, ExtractApplicativeName<T>>
): any {
  if (x === undefined)
    return (
      x: Applicative<ExtractApplicativeParam<T>, ExtractApplicativeName<T>>
    ) => apply(f, x);
  return implementations.get(x.__applicative).functions.apply(f, x);
}
