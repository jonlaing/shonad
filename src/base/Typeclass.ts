export abstract class Typeclass<T> {
  val: T;

  constructor(val: T) {
    this.val = val as unknown as T;
  }

  abstract unwrap: (fallback: T) => T;
}
