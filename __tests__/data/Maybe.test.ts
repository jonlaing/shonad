import * as Maybe from "../../src/data/Maybe";
import * as Monad from "../../src/control/Monad";
describe("Maybe", () => {
  describe("do", () => {
    it("returns expected value", () => {
      const ma = Maybe.just(1);
      const mb = Maybe.just(2);
      const res = Maybe._do(function* (
        _
      ): Monad.DoFuncReturn<Maybe.Maybe<any>> {
        const a = _<number>(yield ma);
        const b = _<number>(yield mb);
        return a + b;
      });

      expect(res.unwrap(0)).toBe(3);
    });
  });
});
