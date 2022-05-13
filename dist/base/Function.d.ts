export declare function compose(...funcs: ((...x: any) => any)[]): (z: any) => any;
export declare function pipe(...funcs: ((x: any) => any)[]): (z: any) => any;
export declare const always: <A>(x: A) => () => A;
export declare const false_: () => boolean;
export declare const true_: () => boolean;
export declare const identity: <A>(x: A) => A;
export declare function flip<F extends (b: B, a: A) => any, A, B>(f: F): (a: A, b?: B) => ReturnType<F>;
export declare function flip<F extends (b: B, a: A) => any, A, B>(f: F, a: A): (b: B) => ReturnType<F>;
export declare function flip<F extends (b: B, a: A) => any, A, B>(f: F, a: A, b: B): ReturnType<F>;
