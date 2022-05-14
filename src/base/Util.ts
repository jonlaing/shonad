import * as Fn from "./Function";

export const isNil = (a: any): boolean => a === undefined || a === null;

export const eq = Fn.curry((a: any, b: any): boolean => a === b);

export const eqBy = Fn.curry((f: (x: any) => any, a: any, b: any): any =>
  eq(f(a), f(b))
);
