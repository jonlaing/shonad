import * as Fn from "../base/Function";
import * as Maybe from "./Maybe";
declare function _head<A>(as: A[]): Maybe.Maybe<A>;
export declare const head: typeof _head;
export declare const reverse: <A>(a: A[]) => A[];
declare function _last<A>(a: A[]): Maybe.Maybe<A>;
export declare const last: typeof _last;
export declare const tail: <A>(a: A[]) => Maybe.Maybe<A[]>;
export declare const init: <A>(a: A[]) => Maybe.Maybe<A[]>;
export declare const isEmpty: <A>(a: A[]) => boolean;
declare function _find<A>(pred: (x: A) => boolean): (xs: A[]) => Maybe.Maybe<A>;
declare function _find<A>(pred: (x: A) => boolean, xs: A[]): Maybe.Maybe<A>;
export declare const find: typeof _find;
declare function _findIndex<A>(pred: Fn.Predicate<A>): (xs: A[]) => Maybe.Maybe<number>;
declare function _findIndex<A>(pred: Fn.Predicate<A>, xs: A[]): Maybe.Maybe<number>;
export declare const findIndex: typeof _findIndex;
export declare const findLast: typeof _find;
export declare const findLastIndex: typeof _findIndex;
declare function _nth<A>(i: number): (xs: A[]) => Maybe.Maybe<A>;
declare function _nth<A>(i: number, xs: A[]): Maybe.Maybe<A>;
export declare const nth: typeof _nth;
declare function _splitAt<A>(i: number): (xs: A[]) => [A[], A[]];
declare function _splitAt<A>(i: number, xs: A[]): [A[], A[]];
export declare const splitAt: typeof _splitAt;
declare function _adjust<A>(f: (a: A) => A): {
    (i: number, xs: A[]): A[];
    (i: number): (xs: A[]) => A[];
};
declare function _adjust<A>(f: (a: A) => A, i: number): (xs: A[]) => A[];
declare function _adjust<A>(f: (a: A) => A, i: number, xs: A[]): A[];
export declare const adjust: typeof _adjust;
declare function _adjustWhen<A>(pred: Fn.Predicate<A>): {
    (f: (a: A) => A, xs: A[]): A[];
    (f: (a: A) => A): (xs: A[]) => A[];
};
declare function _adjustWhen<A>(pred: Fn.Predicate<A>, f: (a: A) => A): (xs: A[]) => A[];
declare function _adjustWhen<A>(pred: Fn.Predicate<A>, f: (a: A) => A, xs: A[]): A[];
export declare const adjustWhen: typeof _adjustWhen;
declare function _update<A>(x: A): {
    (i: number, xs: A[]): A[];
    (i: number): (xs: A[]) => A[];
};
declare function _update<A>(x: A, i: number): (xs: A[]) => A[];
declare function _update<A>(x: A, i: number, xs: A[]): A[];
export declare const update: typeof _update;
declare function _updateWhen<A>(pred: Fn.Predicate<A>): {
    (x: A, xs: A[]): A[];
    (x: A): (xs: A[]) => A[];
};
declare function _updateWhen<A>(pred: Fn.Predicate<A>, x: A): (xs: A[]) => A[];
declare function _updateWhen<A>(pred: Fn.Predicate<A>, x: A, xs: A[]): A[];
export declare const updateWhen: typeof _updateWhen;
declare function _append<A>(x: A): (xs: A[]) => A[];
declare function _append<A>(x: A, xs: A[]): A[];
export declare const append: typeof _append;
export declare const prepend: typeof _append;
declare function _indexOf<A>(a: A): (xs: A[]) => Maybe.Maybe<number>;
declare function _indexOf<A>(a: A, xs: A[]): Maybe.Maybe<number>;
export declare const indexOf: typeof _indexOf;
export declare const lastIndexOf: typeof _indexOf;
declare function _drop<A>(n: number): (xs: A[]) => A[];
declare function _drop<A>(n: number, xs: A[]): A[];
export declare const drop: typeof _drop;
declare function _map<T>(f: Fn.Function<T, T>): (list: T[]) => T[];
declare function _map<T>(f: Fn.Function<T, T>, list: T[]): T[];
export declare const map: typeof _map;
declare function _filter<T>(pred: Fn.Predicate<T>): (list: T[]) => T[];
declare function _filter<T>(pred: Fn.Predicate<T>, list: T[]): T[];
export declare const filter: typeof _filter;
export declare const reject: typeof _filter;
declare function _reduce<T, U = T[]>(f: (acc: U, v: T) => U): {
    (initial: U, list: T[]): U;
    (initial: U): (list: T[]) => U;
};
declare function _reduce<T, U = T[]>(f: (acc: U, v: T) => U, initial: U): (list: T[]) => U;
declare function _reduce<T, U = T[]>(f: (acc: U, v: T) => U, initial: U, list: T[]): U;
export declare const reduce: typeof _reduce;
declare function _includesWith<A>(f: (a: A) => (b: A) => boolean): {
    (a: A, list: A[]): boolean;
    (a: A): (list: A[]) => boolean;
};
declare function _includesWith<A>(f: (a: A) => (b: A) => boolean, a: A): (list: A[]) => boolean;
declare function _includesWith<A>(f: (a: A) => (b: A) => boolean, a: A, list: A[]): boolean;
export declare const includesWith: typeof _includesWith;
export declare const includesBy: <A>(f: (a: A) => any, a: A, list: A[]) => boolean;
export declare const includes: {
    (a: unknown, list: unknown[]): boolean;
    (a: unknown): (list: unknown[]) => boolean;
};
export declare const uniq: <A>(as: A[]) => A[];
export declare const uniqBy: <A>(f: (a: A) => any, as: A[]) => A[];
declare function _insert<A>(idx: number): {
    (item: A): (list: A[]) => A[];
    (item: A, list: A[]): A[];
};
declare function _insert<A>(idx: number, item: A): (list: A[]) => A[];
declare function _insert<A>(idx: number, item: A, list: A[]): A[];
export declare const insert: typeof _insert;
declare function _move<A>(from: number): {
    (to: number): (list: A[]) => A[];
    (to: number, list: A[]): A[];
};
declare function _move<A>(from: number, to: number): (list: A[]) => A[];
declare function _move<A>(from: number, to: number, list: A[]): A[];
export declare const move: typeof _move;
declare function _concat<A>(a: A[]): (b: []) => A[];
declare function _concat<A>(a: A[], b: []): A[];
export declare const concat: typeof _concat;
export {};
