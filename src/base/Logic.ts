import * as Fn from "./Function";
import { Function } from "ts-toolbelt";

export const allPass = Fn.curry((fs: Function.Function[], x: any): boolean =>
  fs.reduce((acc: boolean, f) => (acc ? f(x) : acc), true)
);

export const and = Fn.curry((a: boolean, b: boolean): boolean => a && b);

export const anyPass = Fn.curry((fs: Function.Function[], x: any): boolean =>
  fs.reduce((acc: boolean, f) => (acc ? acc : f(x)), false)
);

export const both = Fn.curry(
  (f: Function.Function, g: Function.Function, x: any): boolean => f(x) && g(x)
);

export const either = Fn.curry(
  (f: Function.Function, g: Function.Function, x: any): boolean => f(x) || g(x)
);

export const not = Fn.curry(
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
