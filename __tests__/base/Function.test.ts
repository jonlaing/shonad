import * as Fn from "../../src/base/Function";

describe("Function", () => {
  describe("compose", () => {
    it("composes two functions", () => {
      const f = (a: number) => a + 2;
      const g = (a: number) => a * 2;
      const comp = Fn.compose(f, g);

      expect(comp(7)).toEqual(f(g(7)));
    });

    it("composes three functions", () => {
      const f = (a: number) => a + 2;
      const g = (a: number) => a * 2;
      const h = (a: number) => a - 3;
      const comp = Fn.compose(f, g, h);

      expect(comp(7)).toEqual(f(g(h(7))));
    });
  });

  describe("pipe", () => {
    it("pipes two functions", () => {
      const f = (a: number) => a + 2;
      const g = (a: number) => a * 2;
      const pipe = Fn.pipe(f, g);

      expect(pipe(7)).toEqual(g(f(7)));
    });

    it("pipes three functions", () => {
      const f = (a: number) => a + 2;
      const g = (a: number) => a * 2;
      const h = (a: number) => a - 3;
      const pipe = Fn.pipe(f, g, h);

      expect(pipe(7)).toEqual(h(g(f(7))));
    });
  });

  describe("always", () => {
    const a = Fn.always(true);
    it("always returns value with no input", () => {
      expect(a()).toEqual(true);
    });

    it("always returns a value with one input", () => {
      expect(a(false)).toEqual(true);
      expect(a(true)).toEqual(true);
    });
  });

  describe("flip", () => {
    it("flips two parameters", () => {
      const f = (a: number, b: number) => a - b;
      const flip = Fn.flip(f);
      expect(flip(3, 7)).toEqual(f(7, 3));
    });

    it("flips only first two paramteers", () => {
      const f = (a: number, b: number, c: number) => a - b + c;
      const flip = Fn.flip(f);
      expect(flip(3, 7, 9)).toEqual(f(7, 3, 9));
    });
  });

  describe("curryN", () => {
    it("curries a funtion with three params", () => {
      const f = (a: number, b: number, c: number) => a + b + c;
      const f2 = Fn.curryN(3, f);

      expect(f2(1)(2)(3)).toEqual(f(1, 2, 3));
    });

    it("works with composition", () => {
      const f = (a: number, b: number) => a + b;
      const g = (a: number, b: number) => a * b;
      const f2 = Fn.curryN(2, f);
      const g2 = Fn.curryN(2, g);

      const comp = Fn.compose(f2(1), g2(2));
      expect(comp(3)).toEqual(f(1, g(2, 3)));
    });
  });

  describe("curry", () => {
    it("curries a funtion with three params", () => {
      const f = (a: number, b: number, c: number) => a + b + c;
      const f2 = Fn.curry(f);

      expect(f2(1)(2)(3)).toEqual(f(1, 2, 3));
    });

    it("works with composition", () => {
      const f = (a: number, b: number) => a + b;
      const g = (a: number, b: number) => a * b;
      const f2 = Fn.curry(f);
      const g2 = Fn.curry(g);

      const comp = Fn.compose(f2(1), g2(2));
      expect(comp(3)).toEqual(f(1, g(2, 3)));
    });
  });
});
