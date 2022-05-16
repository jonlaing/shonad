import * as L from "../control/Lens";
import * as Maybe from "../data/Maybe";
export declare type State = Record<string, any>;
export interface PayloadAction<P = void, T extends string = string> {
    payload: P;
    type: T;
}
export declare const pipe: <S extends State, A extends PayloadAction<any, string>>(...funcs: ((s: S, a: A) => S)[]) => (state: S, action: A) => S;
declare function _set<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>): (state: S, action: A) => S;
declare function _set<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>, state: S): (action: A) => S;
declare function _set<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>, state: S, action: A): S;
export declare const set: typeof _set;
declare function _over<S extends State, V extends S[keyof S]>(lens: L.Lens<S, Maybe.Maybe<V>>): (fn: (payload: any) => (a: V) => V, state: S, action: PayloadAction<any>) => S;
declare function _over<S extends State, V extends S[keyof S]>(lens: L.Lens<S, Maybe.Maybe<V>>, fn: (payload: any) => (a: V) => V): (state: S, action: PayloadAction<any>) => S;
declare function _over<S extends State, V extends S[keyof S] | Maybe.Maybe<S[keyof S]>>(lens: L.Lens<S, Maybe.Maybe<V>>, fn: (payload: any) => (a: V) => V, state: S): (action: PayloadAction<any>) => S;
declare function _over<S extends State, V extends S[keyof S]>(lens: L.Lens<S, Maybe.Maybe<V>>, fn: (payload: any) => (a: V) => V, state: S, action: PayloadAction<any>): S;
export declare const over: typeof _over;
declare function _always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>): (val: V, state: S, action: A) => S;
declare function _always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>, val: V): (state: S, action: A) => S;
declare function _always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>, val: V, state: S): (action: A) => S;
declare function _always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>, val: V, state: S, action: A): S;
export declare const always: typeof _always;
export {};
