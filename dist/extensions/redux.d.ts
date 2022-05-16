import * as L from "../control/Lens";
import * as Maybe from "../data/Maybe";
export declare type State = Record<string, any>;
export interface Action<T = any> {
}
export interface PayloadAction<P = void, T extends string = string> extends Action<T> {
    payload: P;
    type: T;
}
declare type PrimitiveType = number | string | boolean;
declare type AtomicObject = Function | Promise<any> | Date | RegExp;
declare type IfAvailable<T, Fallback = void> = true | false extends (T extends never ? true : false) ? Fallback : keyof T extends never ? Fallback : T;
declare type WeakReferences = IfAvailable<WeakMap<any, any>> | IfAvailable<WeakSet<any>>;
declare type WritableDraft<T> = {
    -readonly [K in keyof T]: Draft<T[K]>;
};
declare type Draft<T> = T extends PrimitiveType ? T : T extends AtomicObject ? T : T extends IfAvailable<ReadonlyMap<infer K, infer V>> ? Map<Draft<K>, Draft<V>> : T extends IfAvailable<ReadonlySet<infer V>> ? Set<Draft<V>> : T extends WeakReferences ? T : T extends object ? WritableDraft<T> : T;
export declare type CaseReducer<S = any, A extends PayloadAction = PayloadAction> = (state: Draft<S>, action: A) => S | void | Draft<S>;
export declare const pipe: <S extends State, A extends PayloadAction<any, string>>(...funcs: CaseReducer<S, A>[]) => CaseReducer<S, A>;
declare function _set<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>): CaseReducer<S, A>;
declare function _set<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>, state: S): (action: A) => S;
declare function _set<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>, state: S, action: A): S;
export declare const set: typeof _set;
declare function _over<S extends State, V extends S[keyof S], A extends PayloadAction<any> = PayloadAction<any>>(lens: L.Lens<S, Maybe.Maybe<V>>): (fn: (payload: any) => (a: V) => V, state: S, action: A) => S;
declare function _over<S extends State, V extends S[keyof S], A extends PayloadAction<any> = PayloadAction<any>>(lens: L.Lens<S, Maybe.Maybe<V>>, fn: (payload: any) => (a: V) => V): CaseReducer<S, A>;
declare function _over<S extends State, V extends S[keyof S] | Maybe.Maybe<S[keyof S]>, A extends PayloadAction<any> = PayloadAction<any>>(lens: L.Lens<S, Maybe.Maybe<V>>, fn: (payload: any) => (a: V) => V, state: S): (action: A) => S;
declare function _over<S extends State, V extends S[keyof S], A extends PayloadAction<any> = PayloadAction<any>>(lens: L.Lens<S, Maybe.Maybe<V>>, fn: (payload: any) => (a: V) => V, state: S, action: A): S;
export declare const over: typeof _over;
declare function _always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>): (val: V, state: S, action: A) => S;
declare function _always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>, val: V): CaseReducer<S, A>;
declare function _always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>, val: V, state: S): (action: A) => S;
declare function _always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, Maybe.Maybe<V>>, val: V, state: S, action: A): S;
export declare const always: typeof _always;
export {};
