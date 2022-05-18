import * as Maybe from "../../src/data/Maybe";
import * as Monad from "../../src/control/Monad";
import * as Fn from "../../src/base/Function";
import * as Num from "../../src/base/Number";
import * as F from "../../src/control/Functor";
import * as Ap from "../../src/control/Applicative";

describe("Maybe", () => {
  describe("Functor", () => {
    it("obeys functor laws", () => {
      expect(F.obeysFunctorLaws(Maybe.just(1), Num.add(1), Num.add(2))).toBe(
        true
      );
    });
  });

  describe("Applicative", () => {
    it("obeys applicative laws", () => {
      expect(
        Ap.obeysApplicativeLaws(
          Maybe.pure,
          3,
          Num.add(2),
          Maybe.just((a: number) => (b: number) => a - b),
          Maybe.just(5),
          Maybe.just(6)
        )
      );
    });
  });
  describe("Monad", () => {
    it("obeys Monad Laws", () => {
      expect(
        Monad.obeysMonadLaws(
          Maybe.just(1),
          Fn.pipe(Num.add(1), Maybe.pure),
          Fn.pipe(Num.add(1), Maybe.pure)
        )
      ).toBe(true);
    });
  });
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
