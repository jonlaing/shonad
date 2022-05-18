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
exports.obeysApplicativeLaws = exports.Applicative = void 0;
const Fn = __importStar(require("../base/Function"));
const Functor_1 = require("./Functor");
class Applicative extends Functor_1.Functor {
}
exports.Applicative = Applicative;
Applicative.apply = Fn.curry((f, x) => f.apply(x));
/**
 * Utility function meant to be used in tests to ensure your Applicative
 * obeys the applicative laws
 *
 * @remarks
 *
 * Since all Applicatives are Functors, you should also
 * use {@link obeysFunctorLaws} in your tests.
 *
 * @param pure - x => M x
 * @param f - x => y
 * @param u - M (x => y => z)
 * @param v - M x
 * @param w - M y
 * @returns `true` or `false`
 */
function obeysApplicativeLaws(pure, x, f, u, v, w) {
    return (pure(Fn.identity).apply(v).unwrap({}) === v.unwrap({}) &&
        pure(f).apply(pure(x)).unwrap({}) === pure(f(x)).unwrap({}) &&
        pure(Fn.compose).apply(u).apply(v).apply(w).unwrap({}) ===
            u.apply(v).apply(w).unwrap({}));
}
exports.obeysApplicativeLaws = obeysApplicativeLaws;
//# sourceMappingURL=Applicative.js.map