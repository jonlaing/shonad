import * as List from "../../src/data/List";
import * as Num from "../../src/base/Number";

describe("List", () => {
  describe("adjust", () => {
    it("adjusts element at index", () => {
      expect(List.adjust(Num.add(1), 1, [1, 2, 3])).toStrictEqual([1, 3, 3]);
    });
  });
});
