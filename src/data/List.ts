import * as Fn from "../base/Function";
import * as Maybe from "./Maybe";
import * as Dict from "./Dict";
import * as Util from "../base/Util";
import * as Lg from "../base/Logic";
import { A, B } from "ts-toolbelt";

export const concat = <A>(as: A[][]): A[] =>
  as.reduce((acc, a) => [...acc, ...a], []);

declare function _head<A>(as: A[]): Maybe.Maybe<A>;
export const head: typeof _head = Maybe.listToMaybe;

export const reverse = <A>(a: A[]): A[] => {
  let copy = a;
  return copy.reverse();
};

declare function _last<A>(a: A[]): Maybe.Maybe<A>;

export const last: typeof _last = Fn.pipe(reverse, Maybe.listToMaybe);

export const tail = <A>(a: A[]): Maybe.Maybe<A[]> =>
  a.length === 0 ? Maybe.nothing() : Maybe.just(a.slice(1));

export const init = <A>(a: A[]): Maybe.Maybe<A[]> =>
  a.length === 0 ? Maybe.nothing() : Maybe.just(a.slice(0, -1));

export const uncons = <A>(as: A[]): Maybe.Maybe<[A, A[]]> =>
  Maybe.bind(head(as), (a: A) =>
    Maybe.fmap((b: A[]) => [a, b], tail(as))
  ) as Maybe.Maybe<[A, A[]]>;

export const singleton = <A>(a: A): A[] => [a];

export const isEmpty = <A>(a: A[]): boolean => a.length === 0;

export const length = <A>(a: A[]): number => a.length;

declare function _intersperse<A>(a: A): (as: A[]) => A[];
declare function _intersperse<A>(a: A, as: A[]): A[];

export const intersperse: typeof _intersperse = Fn.curry(
  <A>(a: A, as: A[]): A[] =>
    as.reduceRight(
      (acc, v, i) => (i === 0 ? [v, ...acc] : [a, v, ...acc]),
      [] as A[]
    )
);

const find_ = <A>(pred: (x: A) => boolean, xs: A[]): Maybe.Maybe<A> => {
  if (isEmpty(xs)) return Maybe.nothing();

  const [a, ...as_] = xs;

  if (pred(a)) {
    return Maybe.just(a);
  }

  return find_(pred, as_);
};

declare function _find<A>(pred: (x: A) => boolean): (xs: A[]) => Maybe.Maybe<A>;
declare function _find<A>(pred: (x: A) => boolean, xs: A[]): Maybe.Maybe<A>;

export const find: typeof _find = Fn.curry(
  <A>(pred: (x: A) => boolean, xs: A[]): Maybe.Maybe<A> => {
    const filtered = xs.filter(pred);
    if (filtered.length === 0) return Maybe.nothing();
    return head(filtered);
  }
);

declare function _findIndex<A>(
  pred: Fn.Predicate<A>
): (xs: A[]) => Maybe.Maybe<number>;
declare function _findIndex<A>(
  pred: Fn.Predicate<A>,
  xs: A[]
): Maybe.Maybe<number>;

export const findIndex: typeof _findIndex = Fn.curry(
  <A>(pred: (x: A) => boolean, xs: A[]): Maybe.Maybe<number> => {
    const reduced = xs.reduce(
      (acc, x, i) => (i === -1 && pred(x) ? i : acc),
      -1
    );
    if (reduced === -1) return Maybe.nothing();
    return Maybe.just(reduced);
  }
);

export const findLast: typeof _find = Fn.curry(
  <A>(pred: Fn.Predicate<A>, xs: A[]): Maybe.Maybe<A> =>
    Fn.compose<A[], Maybe.Maybe<A>>(find(pred), reverse)(xs)
);

export const findLastIndex: typeof _findIndex = Fn.curry(
  <A>(pred: Fn.Predicate<A>, xs: A[]): Maybe.Maybe<number> =>
    Fn.compose<A[], Maybe.Maybe<number>>(findIndex(pred), reverse)(xs)
);

declare function _nth<A>(i: number): (xs: A[]) => Maybe.Maybe<A>;
declare function _nth<A>(i: number, xs: A[]): Maybe.Maybe<A>;

export const nth: typeof _nth = Fn.curry(
  <A>(i: number, xs: A[]): Maybe.Maybe<A> => {
    if (xs.length < i + 1) return Maybe.nothing();
    return Maybe.just(xs[i]);
  }
);

declare function _take<A>(i: number): (xs: A[]) => A[];
declare function _take<A>(i: number, xs: A[]): A[];

export const take: typeof _take = Fn.curry(<A>(i: number, xs: A[]): A[] => {
  const loop = (i: number, xs: A[], acc: A[]): A[] => {
    if (i <= 0) return acc;
    if (xs.length === 0) return acc;
    let [a, ...b] = xs;
    return loop(i - 1, b, [...acc, a]);
  };

  return loop(i, xs, []);
});

declare function _takeLast<A>(i: number): (xs: A[]) => A[];
declare function _takeLast<A>(i: number, xs: A[]): A[];

export const takeLast: typeof _takeLast = Fn.curry(
  <A>(i: number, xs: A[]): A[] => Fn.pipe(reverse, take(i), reverse)(xs) as A[]
);

declare function _splitAt<A>(i: number): (xs: A[]) => [A[], A[]];
declare function _splitAt<A>(i: number, xs: A[]): [A[], A[]];

export const splitAt: typeof _splitAt = Fn.curry(
  <A>(i: number, xs: A[]): [A[], A[]] => [
    take(i, xs),
    takeLast(xs.length - i, xs),
  ]
);

declare function _adjust<A>(f: (a: A) => A): (i: number, xs: A[]) => A[];
declare function _adjust<A>(f: (a: A) => A, i: number): (xs: A[]) => A[];
declare function _adjust<A>(f: (a: A) => A, i: number, xs: A[]): A[];

export const adjust: typeof _adjust = Fn.curry(
  <A>(f: (a: A) => A, i: number, xs: A[]): A[] => {
    if (i < 0 || i >= xs.length) return xs;

    const [hd, tl] = splitAt(i + 1, xs);

    if (hd.length === 0) return tl;
    if (hd.length === 1) return [f(hd[0]), ...tl];

    const [_init, x] = splitAt(i, hd);
    return [..._init, f(x[0]), ...tl];
  }
);

declare function _update<A>(x: A): (i: number, xs?: A[]) => A[];
declare function _update<A>(x: A, i: number): (xs: A[]) => A[];
declare function _update<A>(x: A, i: number, xs: A[]): A[];

export const update: typeof _update = Fn.curry(
  <A>(x: A, i: number, xs: A[]): A[] => adjust(Fn.always(x), i, xs)
);

declare function _append<A>(x: A): (xs: A[]) => A[];
declare function _append<A>(x: A, xs: A[]): A[];

export const append: typeof _append = Fn.curry(<A>(x: A, xs: A[]): A[] => [
  ...xs,
  x,
]);

declare function _groupBy<A>(
  f: (a: A) => string
): (xs: A[]) => Record<string, A[]>;
declare function _groupBy<A>(f: (a: A) => string, xs: A[]): Record<string, A[]>;

export const groupBy: typeof _groupBy = Fn.curry(
  <A>(f: (a: A) => string, xs: A[]): Record<string, A[]> =>
    xs.reduce(
      (acc, x) => ({
        [f(x)]: [...Maybe.fromMaybe([], Dict.get(f(x), acc)), x],
      }),
      {}
    )
);

declare function _indexOf<A>(a: A): (xs: A[]) => Maybe.Maybe<number>;
declare function _indexOf<A>(a: A, xs: A[]): Maybe.Maybe<number>;

export const indexOf: typeof _indexOf = Fn.curry(
  <A>(a: A, xs: A[]): Maybe.Maybe<number> => findIndex(Util.eq(a), xs)
);

export const lastIndexOf: typeof _indexOf = Fn.curry(
  <A>(a: A, xs: A[]): Maybe.Maybe<number> =>
    Fn.compose<A[], Maybe.Maybe<number>>(indexOf(a), reverse)(xs)
);

declare function _insertAll<A>(i: number): (xs: A[], ys: A[]) => A[];
declare function _insertAll<A>(i: number, xs: A[]): (ys: A[]) => A[];
declare function _insertAll<A>(i: number, xs: A[], ys: A[]): A[];

export const insertAll: typeof _insertAll = Fn.curry(
  <A>(i: number, xs: A[], ys: A[]): A[] => {
    const [a, b] = splitAt(i, ys);
    return [...a, ...xs, ...b];
  }
);

declare function _insert<A>(i: number): (x: A, xs: A[]) => A[];
declare function _insert<A>(i: number, x: A): (xs: A[]) => A[];
declare function _insert<A>(i: number, x: A, xs: A[]): A[];

export const insert: typeof _insert = Fn.curry(
  <A>(i: number, x: A, xs: A[]): A[] => insertAll(i, [x], xs)
);

declare function _join<A>(s: string): (xs: A[]) => string;
declare function _join<A>(s: string, xs: A[]): string;

export const join: typeof _join = Fn.curry(<A>(s: string, xs: A[]): string =>
  xs.reduce(
    (acc: string, x: A) => (acc.length === 0 ? `${x}` : `${acc}${s}${x}`),
    ""
  )
);

declare function _exists<A>(pred: Fn.Predicate<A>): (xs: A[]) => boolean;
declare function _exists<A>(pred: Fn.Predicate<A>, xs: A[]): boolean;

export const exists: typeof _exists = Fn.curry(
  <A>(pred: Fn.Predicate<A>, xs: A[]): boolean => Maybe.isJust(find(pred, xs))
);

export const none: typeof _exists = Fn.curry(Fn.compose(Lg.not, exists));

declare function _partition<A>(pred: Fn.Predicate<A>): (xs: A[]) => [A[], A[]];
declare function _partition<A>(pred: Fn.Predicate<A>, xs: A[]): [A[], A[]];

export const partition: typeof _partition = Fn.curry(
  <A>(pred: Fn.Predicate<A>, xs: A[]): [A[], A[]] => [
    xs.filter(pred),
    xs.filter(Fn.compose(Lg.not, pred)),
  ]
);

const range_ = (start: number, len: number, acc: number[]): number[] =>
  len === 0 ? acc : range_(start + 1, len - 1, [...acc, start]);

declare function _range(start: number): (len: number) => number[];
declare function _range(start: number, len: number): number[];

export const range: typeof _range = Fn.curry(
  (start: number, len: number): number[] => range_(start, len, [])
);

declare function _reduce<A, B = A>(
  f: (acc: B, x: A) => B
): (initV: B, xs: A[]) => B;
declare function _reduce<A, B = A>(
  f: (acc: B, x: A) => B,
  initV: B
): (xs: A[]) => B;
declare function _reduce<A, B = A>(
  f: (acc: B, x: A) => B,
  initV: B,
  xs: A[]
): B;

export const reduce: typeof _reduce = Fn.curry(
  <A, B = A>(f: (acc: B, x: A) => B, initV: B, xs: A[]): B =>
    xs.reduce(f, initV)
);

export const reduceRight = Fn.curry(
  <A, B = A>(f: (acc: B, x: A) => B, initV: B, xs: A[]) =>
    Fn.pipe(reverse, reduce(f, initV))(xs)
);

declare function _filter<A>(pred: Fn.Predicate<A>): (xs: A[]) => A[];
declare function _filter<A>(pred: Fn.Predicate<A>, xs: A[]): A[];

export const filter: typeof _filter = Fn.curry(
  <A>(pred: Fn.Predicate<A>, xs: A[]): A[] => xs.filter(pred)
);
export const reject: typeof _filter = Fn.curry(
  <A>(pred: Fn.Predicate<A>, xs: A[]): A[] =>
    xs.filter(Fn.compose(Lg.not, pred))
);

declare function _drop<A>(n: number): (xs: A[]) => A[];
declare function _drop<A>(n: number, xs: A[]): A[];

export const drop: typeof _drop = Fn.curry(<A>(n: number, xs: A[]): A[] => {
  if (xs.length === 0) return [];
  if (n === 0) return xs;

  const [_, ...tl] = xs;
  return drop(n - 1, tl);
});

export const dropLast: typeof _drop = Fn.curry(<A>(n: number, xs: A[]): A[] =>
  take(xs.length - n, xs)
);

const aperature_ = <A>(n: number, xs: A[], acc: A[][]): A[][] => {
  if (xs.length === 0) return acc;
  if (xs.length < n) return acc;
  const [_, ...tl] = xs;
  return aperature_(n, tl, append(take(n, xs), acc));
};

declare function _aperature<A>(n: number): (xs: A[]) => A[][];
declare function _aperature<A>(n: number, xs: A[]): A[][];

export const aperature: typeof _aperature = Fn.curry(
  <A>(n: number, xs: A[]): A[][] => aperature_(n, xs, [])
);

declare function _includes<A>(a: A): (xs: A[]) => boolean;
declare function _includes<A>(a: A, xs: A[]): boolean;

export const includes: typeof _includes = Fn.curry(
  <A>(a: A, xs: A[]): boolean => exists(Util.eq(a), xs)
);

export const startsWith: typeof _includes = Fn.curry(
  <A>(a: A, xs: A[]): boolean =>
    Maybe.fromMaybe(false, Maybe.fmap(Util.eq(a), last(xs)))
);

export const endsWith: typeof _includes = Fn.curry(
  <A>(a: A, xs: A[]): boolean =>
    Fn.pipe<A[], boolean>(reverse, startsWith(a))(xs)
);

declare function _remove<A>(i: number): (len: number, xs: A[]) => A[];
declare function _remove<A>(i: number, len: number): (xs: A[]) => A[];
declare function _remove<A>(i: number, len: number, xs: A[]): A[];

export const remove: typeof _remove = Fn.curry(
  <A>(i: number, len: number, xs: A[]): A[] => {
    const [a, b] = splitAt(i, xs);
    return [...a, ...drop(len, b)];
  }
);
