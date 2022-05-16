import * as L from "../../src/control/Lens";
import * as Dict from "../../src/data/Dict";
import * as Maybe from "../../src/data/Maybe";
import * as Rx from "../../src/extensions/redux";
import * as Num from "../../src/base/Number";

const state = {
  a: 1,
  b: [1, 2],
  c: { d: "e" },
  f: "asdf",
};

const aLens = L.prop<number>("a");
const bLens = L.prop<number[]>("b");
const bHeadLens = L.compose<Dict.Dict<any>, Maybe.Maybe<number>>(
  bLens,
  L.optional([]),
  L.head
);
const cLens = L.prop<{ d: string }>("c");
const dLens = L.compose<Dict.Dict<any>, Maybe.Maybe<string>>(
  cLens,
  L.optional({}),
  L.prop<string>("d")
);

describe("redux", () => {
  describe("set", () => {
    it("sets a number field", () => {
      const newState = Rx.set(aLens, state, {
        payload: 2,
        type: "aids",
      });
      expect(newState.a).toEqual(2);
    });

    it("sets an array", () => {
      const newState = Rx.set(bLens, state, {
        payload: [3, 4],
        type: "aidshf",
      });
      expect(newState.b).toStrictEqual([3, 4]);
    });

    it("sets the head of an array", () => {
      const newState = Rx.set(bHeadLens, state, { payload: 5, type: "asdf" });
      expect(newState.b[0]).toEqual(5);
    });

    it("sets an object", () => {
      const newState = Rx.set(cLens, state, {
        payload: { d: "q" },
        type: "oidsahf",
      });
      expect(newState.c.d).toBe("q");
    });

    it("sets a nested object", () => {
      const newState = Rx.set(dLens, state, { payload: "f", type: "" });
      expect(newState.c.d).toBe("f");
    });
  });

  describe("always", () => {
    it("ignores payload and returns one value", () => {
      const newState = Rx.always(aLens, 5, state, {
        payload: 4,
        type: "aoihds",
      });
      expect(newState.a).toBe(5);
    });
  });

  describe("over", () => {
    it("applies a function to a field", () => {
      const newState = Rx.over(aLens, Num.add, state, { payload: 2, type: "" });
      expect(newState.a).toBe(3);
    });
  });
});
