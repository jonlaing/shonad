import * as D from "../../src/data/Dict";
import * as Maybe from "../../src/data/Maybe";
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
      const v = Maybe.fromMaybe(2, D.get("a", dict));
      expect(v).toBe(1);
    });

    it("returns nothing if no field", () => {
      const v = Maybe.fromMaybe(2, D.get("z", dict));
      expect(v).toBe(2);
    });
  });

  describe("set", () => {
    it("sets new field in dict", () => {
      const d1 = D.set("e", 1, dict);
      const v = Maybe.fromMaybe(2, D.get("e", d1));
      expect(v).toBe(1);
    });

    it("overrites old field", () => {
      const d1 = D.set("a", 2, dict);
      const v = Maybe.fromMaybe(1, D.get("a", d1));
      expect(v).toBe(2);
    });
  });

  describe("unset", () => {
    it("removes field in dict", () => {
      const d1 = D.unset("a", dict);
      const v = Maybe.fromMaybe(2, D.get("a", d1));
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

  describe("Dict helpers", () => {
    interface A {
      a: number;
      b: string;
      c: boolean;
      d: number[];
      f: {
        g: number;
        m: number[];
      };
      h?: number;
      i?: {
        j: number;
        k?: number;
        l: number[];
      };
    }

    const fallback: A = {
      a: 0,
      b: "",
      c: false,
      d: [],
      f: { g: 0, m: [] },
      h: 0,
      i: {
        j: 0,
        k: 0,
        l: [],
      },
    };

    const dict: A = {
      a: 1,
      b: "b",
      c: true,
      d: [1, 2, 3],
      f: {
        g: 2,
        m: [5, 6],
      },
    };
    const helper = D.makeDictHelper<A>(fallback);
    const dictReq = helper(Maybe.just(dict));

    const helperOpt = D.makeDictOptHelper<A>(fallback);
    const dictOpt = helperOpt(Maybe.just(dict));

    describe("makeLensHelper", () => {
      it("gets a top level value", () => {
        expect(dictReq.a()).toBe(1);
      });

      it("gets a top level default value", () => {
        expect(dictReq.h()).toBe(0);
      });

      it("gets a list", () => {
        expect(dictReq.d()).toStrictEqual([1, 2, 3]);
      });

      it("gets a nested value", () => {
        expect(dictReq.f().g()).toBe(2);
      });

      it("gets a nested default", () => {
        expect(dictReq.i().j()).toBe(0);
      });

      it("gets a nested list", () => {
        expect(dictReq.f().m()).toStrictEqual([5, 6]);
      });

      it("gets a default nested list", () => {
        expect(dictReq.i().l()).toStrictEqual([]);
      });
    });

    describe("makeLensOptHelper", () => {
      it("gets a top level value", () => {
        expect(dictOpt.a.get()).toBe(1);
      });

      it("gets a top level default value", () => {
        expect(dictOpt.h.get()).toBe(0);
      });

      it("gets a top level opt", () => {
        expect(dictOpt.a.opt().unwrap(0)).toBe(1);
        expect(dictOpt.h.opt().unwrap(0)).toBe(0);
      });

      it("gets a list", () => {
        expect(dictOpt.d.get()).toStrictEqual([1, 2, 3]);
      });

      it("gets an object", () => {
        expect(dictOpt.f.get()).toStrictEqual({
          g: 2,
          m: [5, 6],
        });
      });

      it("gets a nested value", () => {
        expect(dictOpt.f.g.get()).toBe(2);
      });

      it("gets a nested default", () => {
        expect(dictOpt.i.j.get()).toBe(0);
      });

      it("gets a nested list", () => {
        expect(dictOpt.f.m.get()).toStrictEqual([5, 6]);
      });

      it("gets a default nested list", () => {
        expect(dictOpt.i.l.get()).toStrictEqual([]);
      });
    });
  });
});
