import { Function } from "ts-toolbelt";
export declare const allPass: Function.Curry<(fs: Function.Function[], x: any) => boolean>;
export declare const and: Function.Curry<(a: boolean, b: boolean) => boolean>;
export declare const anyPass: Function.Curry<(fs: Function.Function[], x: any) => boolean>;
export declare const both: Function.Curry<(f: Function.Function, g: Function.Function, x: any) => boolean>;
export declare const either: Function.Curry<(f: Function.Function, g: Function.Function, x: any) => boolean>;
export declare const not: Function.Curry<(f: Function.Function, x: NonNullable<any>) => boolean>;
export declare const or: Function.Curry<(a: boolean, b: boolean) => boolean>;
export declare const unless: Function.Curry<(pred: Function.Function, f: Function.Function, x: any) => any>;
export declare const when: Function.Curry<(pred: Function.Function, f: Function.Function, x: any) => any>;
export declare const until: Function.Curry<(pred: Function.Function, f: Function.Function, x: any) => any>;