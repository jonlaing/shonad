import * as Fn from "../base/Function";
import * as Maybe from "./Maybe";

export const concat = <A>(as: A[][]): A[] =>
  as.reduce((acc, a) => [...acc, ...a], []);

export const head = Maybe.listToMaybe;
export const reverse = <A>(a: A[]): A[] => {
  let copy = a;
  return copy.reverse();
};

export const last = Fn.pipe(reverse, Maybe.listToMaybe);

export const tail = <A>(a: A[]): Maybe.Maybe<A[]> =>
  a.length === 0 ? Maybe.nothing() : Maybe.just(a.slice(1));

export const init = <A>(a: A[]): Maybe.Maybe<A[]> =>
  a.length === 0 ? Maybe.nothing() : Maybe.just(a.slice(0, -1));

export const uncons = <A>(as: A[]): Maybe.Maybe<[A, A[]]> =>
  Maybe.bind(head(as), (a: A) => Maybe.fmap((b: A[]) => [a, b], tail(as)));

export const singleton = <A>(a: A): A[] => [a];

export const isEmpty = <A>(a: A[]): boolean => a.length === 0;

export const length = <A>(a: A[]): number => a.length;

export function intersperse<A>(a: A): (as: A[]) => A[];
export function intersperse<A>(a: A, as: A[]): A[];
export function intersperse<A>(a: A, as?: A[]): any {
  if (as === undefined) {
    return (as: A[]) => intersperse(a, as);
  }

  return as.reduceRight(
    (acc, v, i) => (i === 0 ? [v, ...acc] : [a, v, ...acc]),
    [] as A[]
  );
}

export function intercalate<A>(a: A): (as: A[][]) => A[];
export function intercalate<A>(a: A, as: A[][]): A[];
export function intercalate<A>(a: A, as?: A[][]): any {
  if (as === undefined) {
    return (as: A[][]) => intercalate(a, as);
  }
  return concat(intersperse<A[]>([a], as));
}

export function find<A>(pred: (x: A) => boolean): (xs: A[]) => Maybe.Maybe<A>;
export function find<A>(pred: (x: A) => boolean, xs: A[]): Maybe.Maybe<A>;
export function find<A>(pred: (x: A) => boolean, xs?: A[]): any {
  if (xs === undefined) {
    return (as: A[]) => find(pred, as);
  }

  if (isEmpty(xs)) return Maybe.nothing();

  const [a, ...as_] = xs;

  if (pred(a)) {
    return Maybe.just(a);
  }

  return find(pred, as_);
}

export function nth<A>(i: number): (xs: A[]) => Maybe.Maybe<A>;
export function nth<A>(i: number, xs: A[]): Maybe.Maybe<A>;
export function nth<A>(i: number, xs?: A[]): any {
  if (xs === undefined) return (xs: A[]) => nth(i, xs);

  if (xs.length < i + 1) return Maybe.nothing();
  return Maybe.just(xs[i]);
}

export function take<A>(i: number): (xs: A[]) => A[];
export function take<A>(i: number, xs: A[]): A[];
export function take<A>(i: number, xs?: A[]): any {
  if (xs === undefined) return (xs: A[]) => take(i, xs);

  const loop = (i: number, xs: A[], acc: A[]): A[] => {
    if (i <= 0) return acc;
    if (xs.length === 0) return acc;
    let [a, ...b] = xs;
    return loop(i - 1, b, [...acc, a]);
  };

  return loop(i, xs, []);
}

export function takeLast<A>(i: number): (xs: A[]) => A[];
export function takeLast<A>(i: number, xs: A[]): A[];
export function takeLast<A>(i: number, xs?: A[]): any {
  if (xs === undefined) return (xs: A[]) => takeLast(i, xs);
  return Fn.pipe(reverse, take(i), reverse)(xs);
}

export function splitAt<A>(i: number): (xs: A[]) => [A[], A[]];
export function splitAt<A>(i: number, xs: A[]): [A[], A[]];
export function splitAt<A>(i: number, xs?: A[]): any {
  if (xs === undefined) return (xs: A[]) => splitAt(i, xs);
  return [take(i, xs), takeLast(xs.length - i, xs)];
}

export function adjust<A>(f: (a: A) => A): (i: number, xs: A[]) => A[];
export function adjust<A>(f: (a: A) => A, i: number): (xs: A[]) => A[];
export function adjust<A>(f: (a: A) => A, i: number, xs: A[]): A[];
export function adjust<A>(f: (a: A) => A, i?: number, xs?: A[]): any {
  if (i === undefined) return (i: number, xs: A[]) => adjust(f, i, xs);
  if (xs === undefined) return (xs: A[]) => adjust(f, i, xs);

  if (i < 0 || i >= xs.length) return xs;

  const [hd, tl] = splitAt(i + 1, xs);

  if (hd.length === 0) return tl;
  if (hd.length === 1) return [f(hd[0]), ...tl];

  const [_init, x] = splitAt(i, hd);
  return [..._init, f(x[0]), ...tl];
}

export function update<A>(x: A): (i: number, xs?: A[]) => A[];
export function update<A>(x: A, i: number): (xs: A[]) => A[];
export function update<A>(x: A, i: number, xs: A[]): A[];
export function update<A>(x: A, i?: number, xs?: A[]): any {
  if (i === undefined) return (i: number, xs: A[]) => update(x, i, xs);
  if (xs === undefined) return (xs: A[]) => update(x, i, xs);

  return adjust(Fn.always(x), i, xs);
}
