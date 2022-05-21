export * as func from "./Function";
export * as typeclass from "./Typeclass";
export * as util from "./Util";
export * as number from "./Number";
export * as logic from "./Logic";

// interface Typeclass<A = any> {
//   unpack: () => A;
// }

// interface Functor<A, FB> {
//   fmap: <B>(f: (a: A) => B) => FB;
// }

// interface Applicative<A, AB> {
//   apply: <B>(b: B) => AB;
// }

// type Monad<A, MB> = {
//   bind: (f: (a: A) => MB) => MB;
// };

// interface Maybe<A>
//   extends Typeclass<A>,
//     Functor<A, Maybe<any>>,
//     Monad<A, Maybe<any>>,
//     Applicative<A, Maybe<any>> {
//   fmap: <B>(f: (a: A) => B) => Maybe<B>;
//   apply: <B>(b: B) => Maybe<B>;
//   bind: <B>(f: (a: A) => Maybe<B>) => Maybe<B>;
//   isJust: () => boolean;
// }

// interface MaybeVal<A> extends Maybe<A> {
//   isJust: () => boolean;
//   isNothing: () => boolean;
// }

// const Just = <A>(a: A): MaybeVal<A> => ({
//   fmap: <B>(f: (a: A) => B) => Just(f(a)),
//   apply: <B>(b: B) => Just((a as (b: B) => B)(b)),
//   bind: <B>(f: (a: A) => Maybe<B>) => f(a) as Maybe<B>,
//   isJust: () => true,
//   isNothing: () => false,
//   unpack: () => a,
// });

// const Nothing = <A>(a?: A): MaybeVal<A> => ({
//   fmap: <B>(f: (a: A) => B) => Nothing() as Maybe<B>,
//   apply: <B>(b: B) => Nothing() as Maybe<B>,
//   bind: <B>(f: (a: A) => Maybe<B>) => Nothing() as Maybe<B>,
//   isJust: () => false,
//   isNothing: () => true,
//   unpack: () => a as A,
// });

// Just((a: number) => a + 1)
//   .apply(2)
//   .bind((a: number) => Just(`${a}`))
//   .fmap((a: string) => `${a} things`);

// const isJust = <A>(ma: Maybe<A>): boolean => (ma as MaybeVal<A>).isJust();
// const isNothing = <A>(ma: Maybe<A>): boolean => (ma as MaybeVal<A>).isNothing();

// const bind = <A, B>(ma: Maybe<A>, f: (a: A) => Maybe<B>): Maybe<B> =>
//   ma.bind(f);

// // const fmap =
// //   <A, B, C>(f: (b: B) => C, g: (a: A) => B): ((a: A) => C) =>
// //   (a: A) =>
// //     f(g(a));

// // type Head<A> = A extends [infer H, ...infer T] ? H : never
// // type Last<A> = A extends [] ? never : A extends [infer G] ? G : A extends [infer G, ...infer R] ? Last<R> : never
// // type Parameter<A>  = A extends (a: infer S) => any ? S : A extends (b: infer B, ...args: [...infer P]) => any ? B : never
// // type Return<A> = A extends (...a)

// // const compose = <A, B, F extends ((a: A) => any), G extends ((b: B) => any), R extends ((...a: any[]) => any)[]>(f: F, g: G, ...rest: R): ReturnType<Last<R>> =>
// //   rest.length === 0 ? g : fmap(compose(g, ...rest), f)
