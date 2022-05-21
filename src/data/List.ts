import * as Fn from "../base/Function";
import * as Maybe from "./Maybe";
import * as Util from "../base/Util";
import * as Lg from "../base/Logic";
import { A, S, T } from "ts-toolbelt";
import { number } from "../base";

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

export const isEmpty = <A>(a: A[]): boolean => a.length === 0;

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

const take: typeof _take = Fn.curry(<A>(i: number, xs: A[]): A[] => {
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

const takeLast: typeof _takeLast = Fn.curry(
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

declare function _adjust<A>(f: (a: A) => A): {
  (i: number, xs: A[]): A[];
  (i: number): (xs: A[]) => A[];
};
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

declare function _adjustWhen<A>(pred: Fn.Predicate<A>): {
  (f: (a: A) => A, xs: A[]): A[];
  (f: (a: A) => A): (xs: A[]) => A[];
};
declare function _adjustWhen<A>(
  pred: Fn.Predicate<A>,
  f: (a: A) => A
): (xs: A[]) => A[];
declare function _adjustWhen<A>(
  pred: Fn.Predicate<A>,
  f: (a: A) => A,
  xs: A[]
): A[];

export const adjustWhen: typeof _adjustWhen = Fn.curry(
  <A>(pred: Fn.Predicate<A>, f: (a: A) => A, xs: A[]): A[] => {
    return findIndex(pred, xs)
      .fmap((i) => adjust(f, i, xs))
      .unwrap(xs);
  }
);

declare function _update<A>(x: A): {
  (i: number, xs: A[]): A[];
  (i: number): (xs: A[]) => A[];
};
declare function _update<A>(x: A, i: number): (xs: A[]) => A[];
declare function _update<A>(x: A, i: number, xs: A[]): A[];

export const update: typeof _update = Fn.curry(
  <A>(x: A, i: number, xs: A[]): A[] => adjust(Fn.always(x), i, xs)
);

declare function _updateWhen<A>(pred: Fn.Predicate<A>): {
  (x: A, xs: A[]): A[];
  (x: A): (xs: A[]) => A[];
};
declare function _updateWhen<A>(pred: Fn.Predicate<A>, x: A): (xs: A[]) => A[];
declare function _updateWhen<A>(pred: Fn.Predicate<A>, x: A, xs: A[]): A[];

export const updateWhen: typeof _updateWhen = Fn.curry(
  <A>(pred: Fn.Predicate<A>, x: A, xs: A[]): A[] =>
    adjustWhen(pred, Fn.always(x), xs)
);

declare function _append<A>(x: A): (xs: A[]) => A[];
declare function _append<A>(x: A, xs: A[]): A[];

export const append: typeof _append = Fn.curry(<A>(x: A, xs: A[]): A[] => [
  ...xs,
  x,
]);

export const prepend: typeof _append = Fn.curry(<A>(x: A, xs: A[]): A[] => [
  x,
  ...xs,
]);

declare function _indexOf<A>(a: A): (xs: A[]) => Maybe.Maybe<number>;
declare function _indexOf<A>(a: A, xs: A[]): Maybe.Maybe<number>;

export const indexOf: typeof _indexOf = Fn.curry(
  <A>(a: A, xs: A[]): Maybe.Maybe<number> => findIndex(Util.eq(a), xs)
);

export const lastIndexOf: typeof _indexOf = Fn.curry(
  <A>(a: A, xs: A[]): Maybe.Maybe<number> =>
    Fn.compose<A[], Maybe.Maybe<number>>(indexOf(a), reverse)(xs)
);

declare function _drop<A>(n: number): (xs: A[]) => A[];
declare function _drop<A>(n: number, xs: A[]): A[];

export const drop: typeof _drop = Fn.curry(<A>(n: number, xs: A[]): A[] => {
  if (xs.length === 0) return [];
  if (n === 0) return xs;

  const [_, ...tl] = xs;
  return drop(n - 1, tl);
});

declare function _map<T>(f: Fn.Function<T, T>): (list: T[]) => T[];
declare function _map<T>(f: Fn.Function<T, T>, list: T[]): T[];

export const map: typeof _map = Fn.curry(
  <T>(f: Fn.Function<T, T>, list: T[]): T[] => list.map(f)
);

declare function _filter<T>(pred: Fn.Predicate<T>): (list: T[]) => T[];
declare function _filter<T>(pred: Fn.Predicate<T>, list: T[]): T[];

export const filter: typeof _filter = Fn.curry(
  <T>(pred: Fn.Predicate<T>, list: T[]): T[] => list.filter(pred)
);

export const reject: typeof _filter = Fn.curry(
  <T>(pred: Fn.Predicate<T>, list: T[]): T[] => list.filter(Lg.not(pred))
);

declare function _reduce<T, U = T[]>(
  f: (acc: U, v: T) => U
): {
  (initial: U, list: T[]): U;
  (initial: U): (list: T[]) => U;
};
declare function _reduce<T, U = T[]>(
  f: (acc: U, v: T) => U,
  initial: U
): (list: T[]) => U;
declare function _reduce<T, U = T[]>(
  f: (acc: U, v: T) => U,
  initial: U,
  list: T[]
): U;

export const reduce: typeof _reduce = Fn.curry(
  <T, U = T[]>(f: (acc: U, v: T) => U, initial: U, list: T[]): U =>
    list.reduce(f, initial)
);

declare function _includesWith<A>(f: (a: A) => (b: A) => boolean): {
  (a: A, list: A[]): boolean;
  (a: A): (list: A[]) => boolean;
};
declare function _includesWith<A>(
  f: (a: A) => (b: A) => boolean,
  a: A
): (list: A[]) => boolean;
declare function _includesWith<A>(
  f: (a: A) => (b: A) => boolean,
  a: A,
  list: A[]
): boolean;

export const includesWith: typeof _includesWith = Fn.curry(
  <A>(f: (a: A) => (b: A) => boolean, a: A, list: A[]): boolean =>
    Fn.rec<boolean>(() => {
      if (list.length === 0) return false;

      const [hd, ...tl] = list;

      if (f(a)(hd)) {
        return true;
      }

      return includesWith(f, a, tl);
    }).run()
);

declare function _includesBy<A>(f: (a: A) => any): {
  (a: A): (list: A[]) => boolean;
  (a: A, list: A[]): boolean;
};
declare function _includesBy<A>(f: (a: A) => any, a: A): (list: A[]) => boolean;
declare function _includesBy<A>(f: (a: A) => any, a: A, list: A[]): boolean;
export const includesBy: typeof _includesBy = Fn.curry(
  <A>(f: (a: A) => any, a: A, list: A[]): boolean =>
    includesWith((a: A) => (b: A) => Util.eq(f(a), f(b)), a, list)
);

export const includes = includesWith(Util.eq);

export const uniq = <A>(as: A[]): A[] =>
  as.reduce((acc: A[], v: A) => (acc.includes(v) ? acc : [...acc, v]), []);

declare function _uniqBy<A>(f: (a: A) => any): (as: A[]) => A[];
declare function _uniqBy<A>(f: (a: A) => any, as: A[]): A[];
export const uniqBy: typeof _uniqBy = Fn.curry(
  <A>(f: (a: A) => any, as: A[]): A[] => {
    return as.reduce((acc: A[], v: A) => {
      return includesBy(f, v, acc) ? acc : [...acc, v];
    }, []);
  }
);

declare function _insert<A>(idx: number): {
  (item: A): (list: A[]) => A[];
  (item: A, list: A[]): A[];
};
declare function _insert<A>(idx: number, item: A): (list: A[]) => A[];
declare function _insert<A>(idx: number, item: A, list: A[]): A[];

export const insert: typeof _insert = Fn.curry(
  <A>(idx: number, item: A, list: A[]): A[] => {
    const [hd, tl] = splitAt(idx, list);
    return [...hd, item, ...tl];
  }
);

declare function _move<A>(from: number): {
  (to: number): (list: A[]) => A[];
  (to: number, list: A[]): A[];
};
declare function _move<A>(from: number, to: number): (list: A[]) => A[];
declare function _move<A>(from: number, to: number, list: A[]): A[];
export const move: typeof _move = Fn.curry(
  <A>(from: number, to: number, list: A[]): A[] => {
    const [hd, [item, ...tl]] = splitAt(from, list);
    return insert(to, item, [...hd, ...tl]);
  }
);

declare function _concat<A>(a: A[]): (b: []) => A[];
declare function _concat<A>(a: A[], b: []): A[];
export const concat: typeof _concat = Fn.curry(<A>(a: A[], b: []): A[] => [
  ...a,
  ...b,
]);
