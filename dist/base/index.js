"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logic = exports.number = exports.util = exports.typeclass = exports.func = void 0;
exports.func = __importStar(require("./Function"));
exports.typeclass = __importStar(require("./Typeclass"));
exports.util = __importStar(require("./Util"));
exports.number = __importStar(require("./Number"));
exports.logic = __importStar(require("./Logic"));
// interface Typeclass<A = any> {
//   unpack: () => A;
// }
// interface Functor<A> extends Typeclass<A> {
//   fmap: <B>(f: (a: A) => B) => Functor<B>;
// }
// interface Applicative<A> extends Functor<A> {
//   apply: <B>(b: B) => Applicative<B>;
//   fmap: <B>(f: (a: A) => B) => Applicative<B>;
// }
// interface Monad<A> extends Applicative<A> {
//   fmap: <B>(f: (a: A) => B) => Monad<B>;
//   apply: <B>(b: B) => Monad<B>;
//   bind: <B>(f: (a: A) => Monad<B>) => Monad<B>;
// }
// interface Maybe<A> extends Monad<A> {
//   fmap: <B>(f: (a: A) => B) => Maybe<B>;
//   apply: <B>(b: B) => Maybe<B>;
//   bind: <B>(f: (a: A) => Maybe<B>) => Maybe<B>;
// }
// interface MaybeVal<A> extends Maybe<A> {
//   isJust: () => boolean;
//   isNothing: () => boolean;
// }
// const Just = <A>(a: A): MaybeVal<A> => ({
//   fmap: <B>(f: (a: A) => B) => Just(f(a)) as Maybe<B>,
//   apply: <B>(b: B) => Just((a as (b: B) => B)(b)) as Maybe<B>,
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
// const fmap =
//   <A, B, C>(f: (b: B) => C, g: (a: A) => B): ((a: A) => C) =>
//   (a: A) =>
//     f(g(a));
// type Head<A> = A extends [infer H, ...infer T] ? H : never
// type Last<A> = A extends [] ? never : A extends [infer G] ? G : A extends [infer G, ...infer R] ? Last<R> : never
// type Parameter<A>  = A extends (a: infer S) => any ? S : A extends (b: infer B, ...args: [...infer P]) => any ? B : never
// type Return<A> = A extends (...a)
// const compose = <A, B, F extends ((a: A) => any), G extends ((b: B) => any), R extends ((...a: any[]) => any)[]>(f: F, g: G, ...rest: R): ReturnType<Last<R>> =>
//   rest.length === 0 ? g : fmap(compose(g, ...rest), f)
//# sourceMappingURL=index.js.map