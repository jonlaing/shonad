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
exports.maybeRecord = exports.bind = exports.apply = exports.pure = exports.fmap = exports.mapMaybe = exports.catMaybes = exports.maybeToList = exports.listToMaybe = exports.maybeNil = exports.fromMaybe = exports.isNothing = exports.isJust = exports.maybe = exports.nothing = exports.just = void 0;
const Monad_1 = require("../control/Monad");
const Util = __importStar(require("../base/Util"));
const just = (a) => (0, Monad_1.makeMonad)("maybe", { __val: a });
exports.just = just;
const nothing = (a) => (0, Monad_1.makeMonad)("maybe", {});
exports.nothing = nothing;
const maybe = (fallback, f, x) => (0, exports.isJust)(x) ? f(x.__val) : fallback;
exports.maybe = maybe;
const isJust = (x) => x.__val !== undefined;
exports.isJust = isJust;
const isNothing = (x) => !(0, exports.isJust)(x);
exports.isNothing = isNothing;
function fromMaybe(fallback, x) {
    if (x === undefined)
        return (x) => fromMaybe(fallback, x);
    return (0, exports.isJust)(x) ? x.__val : fallback;
}
exports.fromMaybe = fromMaybe;
const maybeNil = (a) => Util.isNil(a) ? (0, exports.nothing)() : (0, exports.just)(a);
exports.maybeNil = maybeNil;
const listToMaybe = (a) => a.length > 0 ? (0, exports.just)(a) : (0, exports.nothing)();
exports.listToMaybe = listToMaybe;
const maybeToList = (x) => fromMaybe([], (0, exports.fmap)((a) => [a], x));
exports.maybeToList = maybeToList;
const catMaybes = (xs) => xs.reduce((acc, x) => ((0, exports.isJust)(x) ? [...acc, x.__val] : acc), []);
exports.catMaybes = catMaybes;
const mapMaybe = (f, as) => as.reduce((acc, a) => {
    const res = f(a);
    return (0, exports.isJust)(res) ? [...acc, res.__val] : acc;
}, []);
exports.mapMaybe = mapMaybe;
const fmap = (f, x) => ((0, exports.isJust)(x) ? (0, exports.just)(f(x.__val)) : (0, exports.nothing)());
exports.fmap = fmap;
exports.pure = exports.just;
const apply = (x, y) => (0, exports.fmap)((g) => g(y.__val), x);
exports.apply = apply;
const bind = (x, f) => ((0, exports.isJust)(x) ? f(x.__val) : (0, exports.nothing)());
exports.bind = bind;
(0, Monad_1.implementMonadClass)("maybe", { fmap: exports.fmap, pure: exports.pure, apply: exports.apply, bind: exports.bind });
const maybeRecord = (x) => Object.keys(x).reduce((acc, k) => (Object.assign(Object.assign({}, acc), { [k]: (0, exports.maybeNil)(x[k]) })), {});
exports.maybeRecord = maybeRecord;
