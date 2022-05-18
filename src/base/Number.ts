import * as Fn from "./Function";

declare function _gt(a: number): (b: number) => boolean;
declare function _gt(a: number, b: number): boolean;

export const gt: typeof _gt = Fn.curry(
  (a: number, b: number): boolean => a > b
);

export const gt_: typeof _gt = Fn.flip(gt);

export const gte: typeof _gt = Fn.curry(
  (a: number, b: number): boolean => a >= b
);

export const gte_: typeof _gt = Fn.flip(gte);

export const lt: typeof _gt = Fn.curry(
  (a: number, b: number): boolean => a < b
);

export const lt_: typeof _gt = Fn.flip(lt);

export const lte: typeof _gt = Fn.curry(
  (a: number, b: number): boolean => a <= b
);

export const lte_: typeof _gt = Fn.flip(lte);

declare function _add(a: number): (b: number) => number;
declare function _add(a: number, b: number): number;

export const add: typeof _add = Fn.curry(
  (a: number, b: number): number => a + b
);
