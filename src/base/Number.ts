import * as Fn from "./Function";

declare function _gt(a: number): (b: number) => boolean;
declare function _gt(a: number, b: number): boolean;

export const gt: typeof _gt = Fn.curry(
  (a: number, b: number): boolean => a > b
);

declare function _gte(a: number): (b: number) => boolean;
declare function _gte(a: number, b: number): boolean;

export const gte: typeof _gte = Fn.curry(
  (a: number, b: number): boolean => a >= b
);

declare function _lt(a: number): (b: number) => boolean;
declare function _lt(a: number, b: number): boolean;

export const lt: typeof _lt = Fn.curry(
  (a: number, b: number): boolean => a < b
);

declare function _lte(a: number): (b: number) => boolean;
declare function _lte(a: number, b: number): boolean;

export const lte: typeof _lte = Fn.curry(
  (a: number, b: number): boolean => a <= b
);

declare function _add(a: number): (b: number) => number;
declare function _add(a: number, b: number): number;

export const add: typeof _add = Fn.curry(
  (a: number, b: number): number => a + b
);
