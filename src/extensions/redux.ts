import * as Fn from "../base/Function";
import * as L from "../control/Lens";
import * as Maybe from "../data/Maybe";

export type State = Record<string, any>;

export interface PayloadAction<P = void, T extends string = string> {
  payload: P;
  type: T;
}

export const pipe =
  <S extends State, A extends PayloadAction<any>>(
    ...funcs: ((s: S, a: A) => S)[]
  ) =>
  (state: S, action: A): S =>
    funcs.reduce((s, f) => f(s, action), state);

declare function _set<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>): (state: S, action: A) => S;

declare function _set<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, state: S): (action: A) => S;

declare function _set<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, state: S, action: A): S;

export const set: typeof _set = Fn.curry(
  <
    S extends State,
    V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
    A extends PayloadAction<V> = PayloadAction<V>
  >(
    lens: L.Lens<S, V>,
    state: S,
    action: A
  ): S => L.set(lens, action.payload, state)
);

declare function _over<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>
>(
  fn: (payload: any) => (a: V) => V
): (lens: L.Lens<S, V>, state: S, action: PayloadAction<any>) => S;
declare function _over<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>
>(
  fn: (payload: any) => (a: V) => V,
  lens: L.Lens<S, V>
): (state: S, action: PayloadAction<any>) => S;
declare function _over<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>
>(
  fn: (payload: any) => (a: V) => V,
  lens: L.Lens<S, V>,
  state: S
): (action: PayloadAction<any>) => S;
declare function _over<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>
>(
  fn: (payload: any) => (a: V) => V,
  lens: L.Lens<S, V>,
  state: S,
  action: PayloadAction<any>
): S;

export const over: typeof _over = Fn.curry(
  <S extends State, V extends S[keyof S] | Maybe.Maybe<S[keyof S]>>(
    fn: (payload: any) => (a: V) => V,
    lens: L.Lens<S, V>,
    state: S,
    action: PayloadAction<any>
  ): S => L.over(lens, fn(action.payload), state)
);

declare function _always<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>): (val: V, state: S, action: A) => S;

declare function _always<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, val: V): (state: S, action: A) => S;

declare function _always<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, val: V, state: S): (action: A) => S;

declare function _always<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, val: V, state: S, action: A): S;

export const always: typeof _always = Fn.curry(
  <
    S extends State,
    V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
    A extends PayloadAction<V> = PayloadAction<V>
  >(
    lens: L.Lens<S, V>,
    val: V,
    state: S,
    action: A
  ): S => L.set(lens, val, state)
);
