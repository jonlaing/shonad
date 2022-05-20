import { Function } from "ts-toolbelt";
import * as Fn from "./Function";

export const isNil = (a: any): boolean => a === undefined || a === null;

declare function _eq<A>(a: A): (b: A) => boolean;
declare function _eq<A>(a: A, b: A): boolean;

export const eq: typeof _eq = Fn.curry((a: any, b: any): boolean => a === b);

declare function _eqBy<A>(f: Function.Function<[A], any>): {
  (a: A, b: A): boolean;
  (a: A): (b: A) => boolean;
};
declare function _eqBy<A>(
  f: Function.Function<[A], any>,
  a: A
): (b: A) => boolean;
declare function _eqBy<A>(f: Function.Function<[A], any>, a: A, b: A): boolean;

export const eqBy: typeof _eqBy = Fn.curry(
  (f: (x: any) => any, a: any, b: any): any => eq(f(a), f(b))
);

export const isObject = (x: any) =>
  Object.prototype.toString.call(x) === "[object Object]";
