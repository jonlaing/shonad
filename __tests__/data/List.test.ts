import * as List from "../../src/data/List";
import * as Num from "../../src/base/Number";

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
});
