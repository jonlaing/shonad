import { Function } from "ts-toolbelt";
export declare const isNil: (a: any) => boolean;
declare function _eq<A>(a: A): (b: A) => boolean;
declare function _eq<A>(a: A, b: A): boolean;
export declare const eq: typeof _eq;
declare function _eqBy<A>(f: Function.Function<[A], any>): {
    (a: A, b: A): boolean;
    (a: A): (b: A) => boolean;
};
declare function _eqBy<A>(f: Function.Function<[A], any>, a: A): (b: A) => boolean;
declare function _eqBy<A>(f: Function.Function<[A], any>, a: A, b: A): boolean;
export declare const eqBy: typeof _eqBy;
export declare const isObject: (x: any) => boolean;
export {};
