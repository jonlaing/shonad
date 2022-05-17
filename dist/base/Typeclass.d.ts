export declare abstract class Typeclass<T> {
    val: T;
    constructor(val: T);
    abstract unwrap: (fallback: T) => T;
}
