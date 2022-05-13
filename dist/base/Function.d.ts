export declare function compose(...funcs: ((...x: any) => any)[]): (z: any) => any;
export declare function pipe(...funcs: ((x: any) => any)[]): (z: any) => any;
export declare const always: <A>(x: A) => () => A;
