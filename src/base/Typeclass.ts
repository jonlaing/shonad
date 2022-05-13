export interface Typeclass<T> {
  functions: Record<string, Function>;
}

export class Implementations<T extends Typeclass<any>> {
  list: Record<string, T> = {};

  add(name: string, val: T) {
    this.list = { ...this.list, [name]: val };
    console.log(this.list);
  }

  get(name: string): T {
    const r = this.list[name];
    return r;
  }

  remove(name: string) {
    delete this.list[name];
  }
}
