import * as Maybe from "./Maybe";
export declare function get<A extends Record<string, any>, K extends keyof A>(key: K): (dict: A) => Maybe.Maybe<A[K]>;
export declare function get<A extends Record<string, any>, K extends keyof A>(key: K, dict: A): Maybe.Maybe<A[K]>;
export declare function set<A extends Record<string, any>, K extends keyof A>(key: K): (val: A[K], dict: A) => A;
export declare function set<A extends Record<string, any>, K extends keyof A>(key: K, val: A[K]): (dict: A) => A;
export declare function set<A extends Record<string, any>, K extends keyof A>(key: K, val: A[K], dict: A): A;
