import * as L from "../../src/control/Lens";
import * as Num from "../../src/base/Number";
import * as Maybe from "../../src/data/Maybe";
import * as List from "../../src/data/List";
import * as Fn from "../../src/base/Function";

describe("Lens", () => {
  const get = (xs: [any, any]) => xs[0];
  const set = (x: any, xs: [any, any]) => [x, xs[1]];

  const fstLens = L.lens(get, set);

  describe("lens", () => {
    it("makes lens", () => {
      expect(fstLens.get).toBe(get);
      expect(fstLens.set).toBe(set);
    });
  });
  describe("view", () => {
    it("gets an element", () => {
      expect(L.view(fstLens, [3, 1])).toBe(3);
    });
  });

  describe("set", () => {
    it("sets an element", () => {
      expect(L.set(fstLens, 5, [3, 1])).toStrictEqual([5, 1]);
    });
  });

  describe("over", () => {
    it("maps over an element", () => {
      expect(L.over(fstLens, Num.add(1), [3, 1])).toStrictEqual([4, 1]);
    });
  });

  describe("optional", () => {
    it("gets value from just", () => {
      expect(L.view(L.optional(1), Maybe.just(2))).toEqual(2);
    });

    it("gets fallback from nothing", () => {
      expect(L.view(L.optional(1), Maybe.nothing())).toEqual(1);
    });

    it("sets value in just", () => {
      const opt = L.set(L.optional(1), 2, Maybe.just(3));
      expect(Maybe.fromMaybe(0, opt)).toEqual(2);
    });

    it("sets just for nothing", () => {
      const opt = L.set(L.optional(1), 2, Maybe.nothing());
      expect(Maybe.fromMaybe(0, opt)).toEqual(2);
    });

    it("maps over just", () => {
      const opt = L.over(L.optional(1), Num.add(1), Maybe.just(3));
      expect(Maybe.fromMaybe(0, opt)).toEqual(4);
    });

    it("it maps over fallback", () => {
      const opt = L.over(L.optional(1), Num.add(1), Maybe.nothing());
      expect(Maybe.fromMaybe(0, opt)).toEqual(2);
    });
  });

  describe("head", () => {
    it("gets head", () => {
      expect(Maybe.fromMaybe(0, L.view(L.head, [1, 2, 3]))).toEqual(1);
    });

    it("returns nothing if empty list", () => {
      expect(Maybe.isNothing(L.view(L.head, []))).toEqual(true);
    });

    it("sets head of list", () => {
      expect(L.set(L.head, Maybe.just(5), [1, 2, 3])).toStrictEqual([5, 2, 3]);
    });

    it("doesnt set when no head", () => {
      expect(L.set(L.head, Maybe.just(5), [])).toStrictEqual([]);
    });

    it("maps over head", () => {
      expect(L.over(L.head, Maybe.fmap(Num.add(1)), [1, 2, 3])).toStrictEqual([
        2, 2, 3,
      ]);
    });

    it("doesnt map when empty list", () => {
      expect(L.over(L.head, Maybe.fmap(Num.add(1)), [])).toStrictEqual([]);
    });
  });

  describe("tail", () => {
    it("gets tail", () => {
      const tl = L.view(L.tail, [1, 2, 3]);
      expect(Maybe.fromMaybe([], tl)).toStrictEqual([2, 3]);
    });

    it("returns nothing if empty list", () => {
      expect(Maybe.isNothing(L.view(L.tail, []))).toBe(true);
    });

    it("sets tail of list", () => {
      expect(L.set(L.tail, Maybe.just([5, 6]), [1, 2, 3])).toStrictEqual([
        1, 5, 6,
      ]);
    });

    it("ignores when no tail", () => {
      expect(L.set(L.tail, Maybe.just([5, 6]), [])).toStrictEqual([]);
    });

    it("maps over tail", () => {
      expect(
        L.over(L.tail, Maybe.fmap(List.append(1)), [1, 2, 3])
      ).toStrictEqual([1, 2, 3, 1]);
    });

    it("doesnt map over empty", () => {
      expect(L.over(L.tail, Maybe.fmap(List.append(1)), [])).toStrictEqual([]);
    });
  });

  describe("index", () => {
    it("gets an elem at an index in just", () => {
      expect(Maybe.fromMaybe(0, L.view(L.index(1), [1, 2, 3]))).toBe(2);
    });

    it("returns nothing when element not found", () => {
      expect(Maybe.fromMaybe(0, L.view(L.index(3), [1, 2, 3]))).toBe(0);
    });

    it("sets element at index", () => {
      expect(L.set(L.index(1), Maybe.just(5), [1, 2, 3])).toStrictEqual([
        1, 5, 3,
      ]);
    });

    it("returns same list when index not found", () => {
      expect(L.set(L.index(3), Maybe.just(5), [1, 2, 3])).toStrictEqual([
        1, 2, 3,
      ]);
    });

    describe("over", () => {
      it("maps over element at index", () => {
        expect(
          L.over(L.index(1), Maybe.fmap(Num.add(1)), [1, 2, 3])
        ).toStrictEqual([1, 3, 3]);
      });

      it("returns same list when index not found", () => {
        expect(
          L.over(L.index(3), Maybe.fmap(Num.add(1)), [1, 2, 3])
        ).toStrictEqual([1, 2, 3]);
      });
    });
  });

  describe("prop", () => {
    it("gets element at key", () => {
      expect(
        Maybe.fromMaybe(0, L.view(L.prop("a"), { a: 1, b: 2, c: 3 }))
      ).toBe(1);
    });

    it("returns nothing when element not found", () => {
      expect(
        Maybe.fromMaybe(0, L.view(L.prop("d"), { a: 1, b: 2, c: 3 }))
      ).toBe(0);
    });

    it("overwrites key", () => {
      expect(
        L.set(L.prop("a"), Maybe.just(2), { a: 1, b: 2, c: 3 })
      ).toStrictEqual({ a: 2, b: 2, c: 3 });
    });

    it("adds key if not found", () => {
      expect(
        L.set(L.prop("d"), Maybe.just(5), { a: 1, b: 2, c: 3 })
      ).toStrictEqual({ a: 1, b: 2, c: 3, d: 5 });
    });

    it("maps over key", () => {
      expect(
        L.over(L.prop("a"), Maybe.fmap(Num.add(1)), { a: 1, b: 2, c: 3 })
      ).toStrictEqual({ a: 2, b: 2, c: 3 });
    });

    it("ignores mapping if key not found", () => {
      expect(
        L.over(L.prop("d"), Maybe.fmap(Num.add(1)), { a: 1, b: 2, c: 3 })
      ).toStrictEqual({ a: 1, b: 2, c: 3 });
    });
  });

  describe("pipe", () => {
    it("pipes two basic lenses", () => {
      const l = L.pipe<[[number, number], number], number>(fstLens, fstLens);
      expect(L.view(l, [[1, 2], 3])).toEqual(1);
      expect(L.set(l, 2, [[1, 2], 3])).toStrictEqual([[2, 2], 3]);
      expect(L.over(l, Num.add(2), [[1, 2], 3])).toStrictEqual([[3, 2], 3]);
    });

    it("pipes some more involved lenses", () => {
      const l = L.pipe<Record<string, any>, Maybe.Maybe<number>>(
        L.head,
        L.optional([]),
        L.prop("a")
      );
      expect(Maybe.fromMaybe(0, L.view(l, { a: [1, 2] }))).toEqual(1);
      expect(L.set(l, Maybe.just(2), { a: [1, 2] })).toStrictEqual({
        a: [2, 2],
      });
      expect(L.over(l, Maybe.fmap(Num.add(2)), { a: [1, 2] })).toStrictEqual({
        a: [3, 2],
      });
    });
  });
});
