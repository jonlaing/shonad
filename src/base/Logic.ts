import * as Fn from "./Function";
import { Function } from "ts-toolbelt";

declare function _allPass<A>(
  fs: Function.Function<[A], boolean>[]
): (x: A) => boolean;
declare function _allPass<A>(
  fs: Function.Function<[A], boolean>[],
  x: A
): boolean;

export const allPass: typeof _allPass = Fn.curry(
  (fs: Function.Function[], x: any): boolean =>
    fs.reduce((acc: boolean, f) => (acc ? f(x) : acc), true)
);

declare function _and(a: boolean): (b: boolean) => boolean;
declare function _and(a: boolean, b: boolean): boolean;
export const and: typeof _and = Fn.curry(
  (a: boolean, b: boolean): boolean => a && b
);

export const anyPass: typeof _allPass = Fn.curry(
  (fs: Function.Function[], x: any): boolean =>
    fs.reduce((acc: boolean, f) => (acc ? acc : f(x)), false)
);

export const both = Fn.curry(
  (f: Function.Function, g: Function.Function, x: any): boolean => f(x) && g(x)
);

export const either = Fn.curry(
  (f: Function.Function, g: Function.Function, x: any): boolean => f(x) || g(x)
);

declare function _not(f: Function.Function): (x: NonNullable<any>) => boolean;
declare function _not(f: Function.Function, x: NonNullable<any>): boolean;

export const not: typeof _not = Fn.curry(
  (f: Function.Function, x: NonNullable<any>): boolean => !f(x)
);

export const or = Fn.curry((a: boolean, b: boolean) => a || b);

export const unless = Fn.curry(
  (pred: Function.Function, f: Function.Function, x: any): any =>
    pred(x) ? x : f(x)
);

export const when = Fn.curry(
  (pred: Function.Function, f: Function.Function, x: any): any =>
    pred(x) ? f(x) : x
);

export const until = Fn.curry(
  (pred: Function.Function, f: Function.Function, x: any): any =>
    pred(x) ? x : until(pred, f, f(x))
);
