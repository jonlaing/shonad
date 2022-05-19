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
exports.obeysFunctorLaws = exports.Functor = void 0;
const Fn = __importStar(require("../base/Function"));
const Typeclass_1 = require("../base/Typeclass");
class Functor extends Typeclass_1.Typeclass {
}
exports.Functor = Functor;
Functor.fmap = Fn.curry((f, x) => x.fmap(f));
/**
 * Utility function meant to be used in tests to ensure your Functor obeys the functor laws
 *
 * @param mx - M x
 * @param f - x => y
 * @param g - y => z
 * @returns `true` or `false`
 */
function obeysFunctorLaws(mx, f, g) {
    return (mx.fmap(Fn.identity).unwrap({}) === Fn.identity(mx).unwrap({}) &&
        mx.fmap(Fn.compose(g, f)).unwrap({}) ===
            Fn.compose(Functor.fmap(g), Functor.fmap(f))(mx).unwrap({}));
}
exports.obeysFunctorLaws = obeysFunctorLaws;
//# sourceMappingURL=Functor.js.map