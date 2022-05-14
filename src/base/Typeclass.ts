export interface Typeclass<T> {
  functions: Record<string, Function>;
}

export class Implementations<T extends Typeclass<any>> {
  list: Record<string, T> = {};

  add(name: string, val: T) {
    this.list = { ...this.list, [name]: val };
  }

  get(name: string): T {
    return this.list[name];
  }

  remove(name: string) {
    delete this.list[name];
  }
}
