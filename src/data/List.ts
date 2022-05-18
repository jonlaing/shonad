import * as Fn from "../base/Function";
import * as Maybe from "./Maybe";
import * as Util from "../base/Util";

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

declare function _adjustWhen<A>(
  f: (a: A) => A
): (pred: Fn.Predicate<A>, xs: A[]) => A[];
declare function _adjustWhen<A>(
  f: (a: A) => A,
  pred: Fn.Predicate<A>
): (xs: A[]) => A[];
declare function _adjustWhen<A>(
  f: (a: A) => A,
  pred: Fn.Predicate<A>,
  xs: A[]
): A[];

export const adjustWhen: typeof _adjustWhen = Fn.curry(
  <A>(f: (a: A) => A, pred: Fn.Predicate<A>, xs: A[]): A[] => {
    return findIndex(pred, xs)
      .fmap((i) => adjust(f, i, xs))
      .unwrap(xs);
  }
);

declare function _update<A>(x: A): (i: number, xs?: A[]) => A[];
declare function _update<A>(x: A, i: number): (xs: A[]) => A[];
declare function _update<A>(x: A, i: number, xs: A[]): A[];

export const update: typeof _update = Fn.curry(
  <A>(x: A, i: number, xs: A[]): A[] => adjust(Fn.always(x), i, xs)
);

declare function _updateWhen<A>(pred: Fn.Predicate<A>): (x: A, xs: A[]) => A[];
declare function _updateWhen<A>(pred: Fn.Predicate<A>, x: A): (xs: A[]) => A[];
declare function _updateWhen<A>(pred: Fn.Predicate<A>, x: A, xs: A[]): A[];

export const updateWhen: typeof _updateWhen = Fn.curry(
  <A>(pred: Fn.Predicate<A>, x: A, xs: A[]): A[] =>
    adjustWhen(Fn.always(x), pred, xs)
);

declare function _append<A>(x: A): (xs: A[]) => A[];
declare function _append<A>(x: A, xs: A[]): A[];

export const append: typeof _append = Fn.curry(<A>(x: A, xs: A[]): A[] => [
  ...xs,
  x,
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
