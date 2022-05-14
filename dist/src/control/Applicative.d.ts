import { Function } from "ts-toolbelt";
import { FMapFn, Functor, FunctorFactory } from "./Functor";
export declare type ExtractApplicativeVal<T> = T extends Applicative<infer X, any> ? X : never;
export declare type ExtractApplicativeName<T> = T extends Applicative<any, infer X> ? X : never;
export declare type ExtractApplicativeParam<T extends Applicative<(a: any) => any, any>> = T extends Applicative<(a: infer X) => any, any> ? X : never;
export declare type ExtractApplicativeReturn<T extends Applicative<(a: any) => any, any>> = T extends Applicative<(a: any) => infer X, any> ? X : never;
export declare type ExtractApplicative<T> = T extends ApplicativeFactory<infer X, any, any, any> ? X : never;
export declare type IsolateApplicative<T extends Applicative<any, any>> = Pick<T, "__applicative" | "__functor">;
export declare type Applicative<T, name extends string> = {
    __applicative: name;
} & Functor<T, name>;
export declare type ApplyFn<T extends Applicative<(a: any) => any, any>, U extends Applicative<ExtractApplicativeParam<T>, any>, R extends Applicative<ReturnType<ExtractApplicativeVal<T>>, any>> = (x: T, y: U) => R;
export declare type PureFn<T extends Applicative<any, any>> = (x: ExtractApplicativeVal<T>) => T;
export interface ApplicativeFactory<T extends Applicative<any, any>, FMap extends FMapFn<any, any, T, T>, Pure extends PureFn<T>, Apply extends ApplyFn<any, any, any>> extends FunctorFactory<T, FMap> {
    functions: {
        fmap: FMap;
        pure: Pure;
        apply: Apply;
    };
}
interface ImplementApplicativeArgs<T extends Applicative<any, any>> {
    fmap: FMapFn<any, any, T, T>;
    pure: PureFn<any>;
    apply: ApplyFn<any, any, any>;
}
export declare const implementApplicativeClass: <T extends ApplicativeFactory<any, any, any, any>>(name: string, { fmap, pure, apply }: ImplementApplicativeArgs<ExtractApplicative<T>>) => void;
export declare const makeApplicative: <T, U extends Applicative<T, any>>(name: string, x: T) => U;
export declare const apply: Function.Curry<(f: Applicative<Function.Function, any>, x: Applicative<any, any>) => any>;
export declare const apply_: any;
export {};
