export declare const isNil: (a: any) => boolean;
export declare function eq<T>(a: T): (b: T) => boolean;
export declare function eq<T>(a: T, b: T): boolean;
export declare function eqBy<T, U>(f: (x: T) => U): (a: T, b: T) => boolean;
export declare function eqBy<T, U>(f: (x: T) => U, a: T): (b: T) => boolean;
export declare function eqBy<T, U>(f: (x: T) => U, a: T, b: T): boolean;
