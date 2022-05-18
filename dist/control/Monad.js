"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obeysMonadLaws = exports.makeDo = exports.Monad = void 0;
const Applicative_1 = require("./Applicative");
const Fn = __importStar(require("../base/Function"));
class Monad extends Applicative_1.Applicative {
}
exports.Monad = Monad;
Monad.bind = Fn.curry((x, f) => x.bind(f));
const fixYield = (val) => val;
/**
 * Makes type spcefic `do` notation for a Monad.
 *
 * @remarks In the final do, the generator function takes a parameter that "fixes" the
 * type of the `yield`. Without it, the types don't work properly, because yield defaults
 * to the type of the Monad, rather than the containing type.
 *
 * @example
 *
 * export const _do = makeDo<Maybe<any>>(pure, bind);
 *
 * const ma = maybe.just(1)
 * const mb = maybe.just(2)
 *
 * _do(function* (_) {
 *    const a: number = _(yield ma) // forces ma to be a number
 *    const b: number = _(yield mb) // force mb to be a number
 *
 *    return a + b
 * }) // maybe.just(3)
 *
 * @param pure - the `pure` function from the Applicative interface.
 * @param bind - the `bind` function from the Monad interface
 * @returns `do` notation function that takes a `fix` param to cast Monads into their containing type (See example)
 */
const makeDo = (pure, bind) => (f) => {
    const gen = f(fixYield);
    const doNext = (input) => {
        const { value, done } = gen.next(input);
        if (done)
            return pure(value);
        return bind(value, doNext);
    };
    return doNext();
};
exports.makeDo = makeDo;
/**
 * Utility function meant to be used in tests to ensure your Monad obeys the monad laws
 *
 * @param mx - M x
 * @param g - x => Monad y
 * @param h - y => Monad z
 * @returns `true` or `false`
 */
function obeysMonadLaws(mx, g, h) {
    return mx.bind(g).bind(h) === mx.bind((x) => g(x).bind(h));
}
exports.obeysMonadLaws = obeysMonadLaws;
//# sourceMappingURL=Monad.js.map