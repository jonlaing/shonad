import { Function } from "ts-toolbelt";
import * as Fn from "../base/Function";
import { Typeclass } from "./Typeclass";

export type Mapper = Function.Function<[any], any>;
export type StaticFMap<T extends Functor<any>> = Function.Curry<
  Function.Function<[Mapper, T], T>
>;

export abstract class Functor<T> extends Typeclass<T> {
  static fmap: StaticFMap<Functor<any>> = Fn.curry(
    <A, B>(f: (a: A) => B, x: Functor<A>) => x.fmap(f)
  );

  abstract fmap: (f: (a: T) => any) => Functor<any>;
}
