import * as Fn from "./Function";

export const gt = Fn.curry((a: number, b: number): boolean => a > b);
export const gte = Fn.curry((a: number, b: number): boolean => a >= b);
export const lt = Fn.curry((a: number, b: number): boolean => a < b);
export const lte = Fn.curry((a: number, b: number): boolean => a <= b);

export const add = Fn.curry((a: number, b: number): number => a + b);
