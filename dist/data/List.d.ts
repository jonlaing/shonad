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
declare function _adjust<A>(f: (a: A) => A): (i: number, xs: A[]) => A[];
declare function _adjust<A>(f: (a: A) => A, i: number): (xs: A[]) => A[];
declare function _adjust<A>(f: (a: A) => A, i: number, xs: A[]): A[];
export declare const adjust: typeof _adjust;
declare function _adjustWhen<A>(f: (a: A) => A): (pred: Fn.Predicate<A>, xs: A[]) => A[];
declare function _adjustWhen<A>(f: (a: A) => A, pred: Fn.Predicate<A>): (xs: A[]) => A[];
declare function _adjustWhen<A>(f: (a: A) => A, pred: Fn.Predicate<A>, xs: A[]): A[];
export declare const adjustWhen: typeof _adjustWhen;
declare function _update<A>(x: A): (i: number, xs?: A[]) => A[];
declare function _update<A>(x: A, i: number): (xs: A[]) => A[];
declare function _update<A>(x: A, i: number, xs: A[]): A[];
export declare const update: typeof _update;
declare function _updateWhen<A>(pred: Fn.Predicate<A>): (x: A, xs?: A[]) => A[];
declare function _updateWhen<A>(pred: Fn.Predicate<A>, x: A): (xs: A[]) => A[];
declare function _updateWhen<A>(pred: Fn.Predicate<A>, x: A, xs: A[]): A[];
export declare const updateWhen: typeof _updateWhen;
declare function _append<A>(x: A): (xs: A[]) => A[];
declare function _append<A>(x: A, xs: A[]): A[];
export declare const append: typeof _append;
declare function _indexOf<A>(a: A): (xs: A[]) => Maybe.Maybe<number>;
declare function _indexOf<A>(a: A, xs: A[]): Maybe.Maybe<number>;
export declare const indexOf: typeof _indexOf;
export declare const lastIndexOf: typeof _indexOf;
declare function _drop<A>(n: number): (xs: A[]) => A[];
declare function _drop<A>(n: number, xs: A[]): A[];
export declare const drop: typeof _drop;
export {};
