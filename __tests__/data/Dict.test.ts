import * as D from "../../src/data/Dict";
import * as maybe from "../../src/data/Maybe";
import * as N from "../../src/base/Number";
import * as Fn from "../../src/base/Function";
import * as Lg from "../../src/base/Logic";

describe("Dict", () => {
  const dict = {
    a: 1,
    b: "b",
    c: true,
    d: [1, 2, 3],
  };
  describe("get", () => {
    it("gets field in just", () => {
      const v = maybe.fromMaybe(2, D.get("a", dict));
      expect(v).toBe(1);
    });

    it("returns nothing if no field", () => {
      const v = maybe.fromMaybe(2, D.get("z", dict));
      expect(v).toBe(2);
    });
  });

  describe("set", () => {
    it("sets new field in dict", () => {
      const d1 = D.set("e", 1, dict);
      const v = maybe.fromMaybe(2, D.get("e", d1));
      expect(v).toBe(1);
    });

    it("overrites old field", () => {
      const d1 = D.set("a", 2, dict);
      const v = maybe.fromMaybe(1, D.get("a", d1));
      expect(v).toBe(2);
    });
  });

  describe("unset", () => {
    it("removes field in dict", () => {
      const d1 = D.unset("a", dict);
      const v = maybe.fromMaybe(2, D.get("a", d1));
      expect(v).toBe(2);
    });
  });

  describe("eqProps", () => {
    it("returns true when props are equal", () => {
      expect(D.eqProps("a", dict, { a: 1 } as typeof dict)).toBe(true);
    });

    it("returns false when props arent equal", () => {
      expect(D.eqProps("a", dict, { a: 2 } as typeof dict));
    });
  });

  describe("map", () => {
    it("maps over all properties", () => {
      const d = { a: 1, b: 2, c: 3 };
      expect(D.map(N.add(1), d)).toStrictEqual({ a: 2, b: 3, c: 4 });
    });
  });

  describe("mapi", () => {
    it("maps with key", () => {
      const d = { a: 1, b: 2, c: 3 };
      expect(
        D.mapi((v: any, k: string) => (k === "a" || k === "c" ? v + 1 : v), d)
      ).toStrictEqual({ a: 2, b: 2, c: 4 });
    });
  });

  describe("evolve", () => {
    it("evolves fields", () => {
      const e = {
        a: N.add(1),
        b: Fn.always("c"),
        c: Lg.and(false),
      };
      const expected = {
        a: 2,
        b: "c",
        c: false,
        d: [1, 2, 3],
      };
      expect(D.evolve(e, dict)).toStrictEqual(expected);
    });
  });

  describe("has", () => {
    it("returns true if has key", () => {
      expect(D.has("a", dict)).toBe(true);
    });
    it("returns fals if doent have key", () => {
      expect(D.has("z", dict)).toBe(false);
    });
  });
});
