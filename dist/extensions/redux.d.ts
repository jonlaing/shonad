import * as L from "../control/Lens";
export declare type State = Record<string, any>;
export interface PayloadAction<P = void, T extends string = string> {
    payload: P;
    type: T;
}
export declare const pipe: <S extends State, A extends PayloadAction<any, string>>(...funcs: ((s: S, a: A) => S)[]) => (state: S, action: A) => S;
export declare function set<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, V>): (state: S, action?: A) => S;
export declare function set<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, V>, state: S): (action: A) => S;
export declare function set<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, V>, state: S, action: A): S;
export declare function over<S extends State, V extends S[keyof S]>(fn: (payload: any) => (a: V) => V): (lens: L.Lens<S, V>, state?: S, action?: PayloadAction<any>) => S;
export declare function over<S extends State, V extends S[keyof S]>(fn: (payload: any) => (a: V) => V, lens: L.Lens<S, V>): (state: S, action?: PayloadAction<any>) => S;
export declare function over<S extends State, V extends S[keyof S]>(fn: (payload: any) => (a: V) => V, lens: L.Lens<S, V>, state: S): (action: PayloadAction<any>) => S;
export declare function over<S extends State, V extends S[keyof S]>(fn: (payload: any) => (a: V) => V, lens: L.Lens<S, V>, state: S, action: PayloadAction<any>): S;
export declare function always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, V>): (val: V, state?: S, action?: A) => S;
export declare function always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, V>, val: V): (state: S, action?: A) => S;
export declare function always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, V>, val: V, state: S): (action: A) => S;
export declare function always<S extends State, V extends S[keyof S], A extends PayloadAction<V> = PayloadAction<V>>(lens: L.Lens<S, V>, val: V, state: S, action: A): S;
