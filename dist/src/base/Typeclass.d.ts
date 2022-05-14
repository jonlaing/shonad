export interface Typeclass<T> {
    functions: Record<string, Function>;
}
export declare class Implementations<T extends Typeclass<any>> {
    list: Record<string, T>;
    add(name: string, val: T): void;
    get(name: string): T;
    remove(name: string): void;
}
