import * as L from "../control/Lens";
import * as Maybe from "../data/Maybe";
import * as Either from "../data/Either";

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

export function set<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>): (state: S, action?: A) => S;

export function set<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, state: S): (action: A) => S;

export function set<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, state: S, action: A): S;

export function set<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, state?: S, action?: A): any {
  if (state === undefined)
    return (state: S, action: A) => set(lens, state, action);
  if (action === undefined) return (action: A) => set(lens, state, action);

  return L.set(lens, action.payload, state);
}

export function over<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>
>(
  fn: (payload: any) => (a: V) => V
): (lens: L.Lens<S, V>, state?: S, action?: PayloadAction<any>) => S;
export function over<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>
>(
  fn: (payload: any) => (a: V) => V,
  lens: L.Lens<S, V>
): (state: S, action?: PayloadAction<any>) => S;
export function over<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>
>(
  fn: (payload: any) => (a: V) => V,
  lens: L.Lens<S, V>,
  state: S
): (action: PayloadAction<any>) => S;
export function over<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>
>(
  fn: (payload: any) => (a: V) => V,
  lens: L.Lens<S, V>,
  state: S,
  action: PayloadAction<any>
): S;
export function over<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>
>(
  fn: (payload: any) => (a: V) => V,
  lens?: L.Lens<S, V>,
  state?: S,
  action?: PayloadAction<any>
): any {
  if (lens === undefined)
    return (lens: L.Lens<S, V>, state: S, action: PayloadAction<any>) =>
      over(fn, lens, state, action);
  if (state === undefined)
    return (state: S, action: PayloadAction<any>) =>
      over(fn, lens, state, action);
  if (action === undefined)
    return (action: PayloadAction<any>) => over(fn, lens, state, action);

  return L.over(lens, fn(action.payload), state);
}

export function always<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>): (val: V, state?: S, action?: A) => S;

export function always<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, val: V): (state: S, action?: A) => S;

export function always<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, val: V, state: S): (action: A) => S;

export function always<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, val: V, state: S, action: A): S;

export function always<
  S extends State,
  V extends S[keyof S] | Maybe.Maybe<S[keyof S]>,
  A extends PayloadAction<V> = PayloadAction<V>
>(lens: L.Lens<S, V>, val?: V, state?: S, action?: A): any {
  if (val === undefined)
    return (val: V, state: S, action: A) => always(lens, val, state, action);
  if (state === undefined)
    return (state: S, action: A) => always(lens, val, state, action);
  if (action === undefined)
    return (action: A) => always(lens, val, state, action);

  return L.set(lens, val, state);
}
