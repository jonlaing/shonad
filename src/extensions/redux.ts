import { S } from "ts-toolbelt";
import * as Fn from "../base/Function";
import * as L from "../control/Lens";
import * as Maybe from "../data/Maybe";

export type State = Record<string, any>;

export interface Action<T = any> {}
export interface PayloadAction<P = void, T extends string = string>
  extends Action<T> {
  payload: P;
  type: T;
}

type PrimitiveType = number | string | boolean;
type AtomicObject = Function | Promise<any> | Date | RegExp;
type IfAvailable<T, Fallback = void> = true | false extends (
  T extends never ? true : false
)
  ? Fallback
  : keyof T extends never
  ? Fallback
  : T;
type WeakReferences =
  | IfAvailable<WeakMap<any, any>>
  | IfAvailable<WeakSet<any>>;
type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};
type Draft<T> = T extends PrimitiveType
  ? T
  : T extends AtomicObject
  ? T
  : T extends IfAvailable<ReadonlyMap<infer K, infer V>>
  ? Map<Draft<K>, Draft<V>>
  : T extends IfAvailable<ReadonlySet<infer V>>
  ? Set<Draft<V>>
  : T extends WeakReferences
  ? T
  : T extends object
  ? WritableDraft<T>
  : T;

export type CaseReducer<S = any, A extends PayloadAction = PayloadAction> = (
  state: Draft<S>,
  action: A
) => S | void | Draft<S>;

export const pipe =
  <S extends State, A extends PayloadAction<any>>(
    ...funcs: CaseReducer<S, A>[]
  ): CaseReducer<S, A> =>
  (state: Draft<S>, action: A): S =>
    funcs.reduce((s, f) => f(s, action) as Draft<S>, state) as S;

declare function _set<
  S extends State,
  V extends S[keyof S],
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, Maybe.Maybe<V>>): CaseReducer<S, A>;

declare function _set<
  S extends State,
  V extends S[keyof S],
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, Maybe.Maybe<V>>, state: S): (action: A) => S;

declare function _set<
  S extends State,
  V extends S[keyof S],
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, Maybe.Maybe<V>>, state: S, action: A): S;

export const set: typeof _set = Fn.curry(
  <
    S extends State,
    V extends S[keyof S],
    A extends PayloadAction<V> = PayloadAction<V>
  >(
    lens: L.Lens<S, Maybe.Maybe<V>>,
    state: S,
    action: A
  ): S => L.set(lens, Maybe.just(action.payload), state)
);

declare function _over<
  S extends State,
  V extends S[keyof S],
  A extends PayloadAction<any> = PayloadAction<any>
>(
  lens: L.Lens<S, Maybe.Maybe<V>>
): (fn: (payload: any) => (a: V) => V, state: S, action: A) => S;
declare function _over<
  S extends State,
  V extends S[keyof S],
  A extends PayloadAction<any> = PayloadAction<any>
>(
  lens: L.Lens<S, Maybe.Maybe<V>>,
  fn: (payload: any) => (a: V) => V
): CaseReducer<S, A>;
declare function _over<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<any> = PayloadAction<any>
>(
  lens: L.Lens<S, Maybe.Maybe<V>>,
  fn: (payload: any) => (a: V) => V,
  state: S
): (action: A) => S;
declare function _over<
  S extends State,
  V extends S[keyof S],
  A extends PayloadAction<any> = PayloadAction<any>
>(
  lens: L.Lens<S, Maybe.Maybe<V>>,
  fn: (payload: any) => (a: V) => V,
  state: S,
  action: A
): S;

export const over: typeof _over = Fn.curry(
  <
    S extends State,
    V extends S[keyof S],
    A extends PayloadAction<any> = PayloadAction<any>
  >(
    lens: L.Lens<S, Maybe.Maybe<V>>,
    fn: (payload: any) => (a: V) => V,
    state: S,
    action: A
  ): S => L.over(lens, Maybe.fmap(fn(action.payload)), state)
);

declare function _always<
  S extends State,
  V extends S[keyof S],
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, Maybe.Maybe<V>>): (val: V, state: S, action: A) => S;

declare function _always<
  S extends State,
  V extends S[keyof S],
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, Maybe.Maybe<V>>, val: V): CaseReducer<S, A>;

declare function _always<
  S extends State,
  V extends S[keyof S],
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, Maybe.Maybe<V>>, val: V, state: S): (action: A) => S;

declare function _always<
  S extends State,
  V extends S[keyof S],
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, Maybe.Maybe<V>>, val: V, state: S, action: A): S;

export const always: typeof _always = Fn.curry(
  <
    S extends State,
    V extends S[keyof S],
    A extends PayloadAction<V> = PayloadAction<V>
  >(
    lens: L.Lens<S, Maybe.Maybe<V>>,
    val: V,
    state: S,
    action: A
  ): S => L.set(lens, Maybe.just(val), state)
);
