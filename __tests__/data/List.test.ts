import * as List from "../../src/data/List";
import * as Num from "../../src/base/Number";
import * as Dict from "../../src/data/Dict";

describe("List", () => {
  describe("adjust", () => {
    it("adjusts element at index", () => {
      expect(List.adjust(Num.add(1), 1, [1, 2, 3])).toStrictEqual([1, 3, 3]);
    });
  });
  describe("insert", () => {
    it("inserts an item", () => {
      expect(List.insert(1, 5, [1, 2, 3])).toStrictEqual([1, 5, 2, 3]);
    });
  });
  describe("move", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    it("moves an item", () => {
      expect(List.move(1, 4, arr)).toStrictEqual([1, 3, 4, 5, 2, 6]);
    });
  });
  describe("includesWith", () => {
    const list = [1, 2, 3];
    it("finds elements in list after f apply", () => {
      expect(
        List.includesWith((a: number) => (b: number) => a * b > 3, 2, list)
      ).toBe(true);
    });

    it("doesnt find element by apply", () => {
      expect(
        List.includesWith((a: number) => (b: number) => a * b < 2, 2, list)
      ).toBe(false);
    });
  });

  describe("includes", () => {
    const list = [1, 2, 3];
    it("finds elements in list", () => {
      expect(List.includes(2, list)).toBe(true);
    });

    it("doesnt find element", () => {
      expect(List.includes(5, list)).toBe(false);
    });
  });

  describe("uniqBy", () => {
    it("uniq by some func", () => {
      const list = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 3 }];

      expect(List.uniqBy(Dict.getUnsafe("id"), list)).toStrictEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
    });
  });
});
