import * as Fn from "../base/Function";
import * as Maybe from "./Maybe";
export declare const concat: <A>(as: A[][]) => A[];
declare function _head<A>(as: A[]): Maybe.Maybe<A>;
export declare const head: typeof _head;
export declare const reverse: <A>(a: A[]) => A[];
declare function _last<A>(a: A[]): Maybe.Maybe<A>;
export declare const last: typeof _last;
export declare const tail: <A>(a: A[]) => Maybe.Maybe<A[]>;
export declare const init: <A>(a: A[]) => Maybe.Maybe<A[]>;
export declare const uncons: <A>(as: A[]) => Maybe.Maybe<[A, A[]]>;
export declare const singleton: <A>(a: A) => A[];
export declare const isEmpty: <A>(a: A[]) => boolean;
export declare const length: <A>(a: A[]) => number;
declare function _intersperse<A>(a: A): (as: A[]) => A[];
declare function _intersperse<A>(a: A, as: A[]): A[];
export declare const intersperse: typeof _intersperse;
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
declare function _take<A>(i: number): (xs: A[]) => A[];
declare function _take<A>(i: number, xs: A[]): A[];
export declare const take: typeof _take;
declare function _takeLast<A>(i: number): (xs: A[]) => A[];
declare function _takeLast<A>(i: number, xs: A[]): A[];
export declare const takeLast: typeof _takeLast;
declare function _splitAt<A>(i: number): (xs: A[]) => [A[], A[]];
declare function _splitAt<A>(i: number, xs: A[]): [A[], A[]];
export declare const splitAt: typeof _splitAt;
declare function _adjust<A>(f: (a: A) => A): (i: number, xs: A[]) => A[];
declare function _adjust<A>(f: (a: A) => A, i: number): (xs: A[]) => A[];
declare function _adjust<A>(f: (a: A) => A, i: number, xs: A[]): A[];
export declare const adjust: typeof _adjust;
declare function _update<A>(x: A): (i: number, xs?: A[]) => A[];
declare function _update<A>(x: A, i: number): (xs: A[]) => A[];
declare function _update<A>(x: A, i: number, xs: A[]): A[];
export declare const update: typeof _update;
declare function _append<A>(x: A): (xs: A[]) => A[];
declare function _append<A>(x: A, xs: A[]): A[];
export declare const append: typeof _append;
declare function _groupBy<A>(f: (a: A) => string): (xs: A[]) => Record<string, A[]>;
declare function _groupBy<A>(f: (a: A) => string, xs: A[]): Record<string, A[]>;
export declare const groupBy: typeof _groupBy;
declare function _indexOf<A>(a: A): (xs: A[]) => Maybe.Maybe<number>;
declare function _indexOf<A>(a: A, xs: A[]): Maybe.Maybe<number>;
export declare const indexOf: typeof _indexOf;
export declare const lastIndexOf: typeof _indexOf;
declare function _insertAll<A>(i: number): (xs: A[], ys: A[]) => A[];
declare function _insertAll<A>(i: number, xs: A[]): (ys: A[]) => A[];
declare function _insertAll<A>(i: number, xs: A[], ys: A[]): A[];
export declare const insertAll: typeof _insertAll;
declare function _insert<A>(i: number): (x: A, xs: A[]) => A[];
declare function _insert<A>(i: number, x: A): (xs: A[]) => A[];
declare function _insert<A>(i: number, x: A, xs: A[]): A[];
export declare const insert: typeof _insert;
declare function _join<A>(s: string): (xs: A[]) => string;
declare function _join<A>(s: string, xs: A[]): string;
export declare const join: typeof _join;
declare function _exists<A>(pred: Fn.Predicate<A>): (xs: A[]) => boolean;
declare function _exists<A>(pred: Fn.Predicate<A>, xs: A[]): boolean;
export declare const exists: typeof _exists;
export declare const none: typeof _exists;
declare function _partition<A>(pred: Fn.Predicate<A>): (xs: A[]) => [A[], A[]];
declare function _partition<A>(pred: Fn.Predicate<A>, xs: A[]): [A[], A[]];
export declare const partition: typeof _partition;
declare function _range(start: number): (len: number) => number[];
declare function _range(start: number, len: number): number[];
export declare const range: typeof _range;
declare function _reduce<A, B = A>(f: (acc: B, x: A) => B): (initV: B, xs: A[]) => B;
declare function _reduce<A, B = A>(f: (acc: B, x: A) => B, initV: B): (xs: A[]) => B;
declare function _reduce<A, B = A>(f: (acc: B, x: A) => B, initV: B, xs: A[]): B;
export declare const reduce: typeof _reduce;
export declare const reduceRight: import("ts-toolbelt/out/Function/Curry").Curry<(<A, B = A>(f: (acc: B, x: A) => B, initV: B, xs: A[]) => unknown)>;
declare function _filter<A>(pred: Fn.Predicate<A>): (xs: A[]) => A[];
declare function _filter<A>(pred: Fn.Predicate<A>, xs: A[]): A[];
export declare const filter: typeof _filter;
export declare const reject: typeof _filter;
declare function _drop<A>(n: number): (xs: A[]) => A[];
declare function _drop<A>(n: number, xs: A[]): A[];
export declare const drop: typeof _drop;
export declare const dropLast: typeof _drop;
declare function _aperature<A>(n: number): (xs: A[]) => A[][];
declare function _aperature<A>(n: number, xs: A[]): A[][];
export declare const aperature: typeof _aperature;
declare function _includes<A>(a: A): (xs: A[]) => boolean;
declare function _includes<A>(a: A, xs: A[]): boolean;
export declare const includes: typeof _includes;
export declare const startsWith: typeof _includes;
export declare const endsWith: typeof _includes;
declare function _remove<A>(i: number): (len: number, xs: A[]) => A[];
declare function _remove<A>(i: number, len: number): (xs: A[]) => A[];
declare function _remove<A>(i: number, len: number, xs: A[]): A[];
export declare const remove: typeof _remove;
export {};
