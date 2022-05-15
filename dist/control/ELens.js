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
exports.prop = exports.index = exports.tail = exports.head = exports.optional = exports.over = exports.view = exports.setting = exports.getting = exports.lens = exports.lens_ = void 0;
const Fn = __importStar(require("../base/Function"));
const Dict = __importStar(require("../data/Dict"));
const List = __importStar(require("../data/List"));
const Const_1 = require("../data/Const");
const Identity_1 = require("../data/Identity");
const Maybe = __importStar(require("../data/Maybe"));
// type LensFamily a b c d =
//   forall f. Functor f =>
//   (c -> f d) -> a -> f b
// lens :: (a -> c) -> (a -> d -> b) -> LensFamily a b c d
// lens f g h a = fmap (g a) (h (f a))
const lens_ = (getter, setter) => (h, a) => {
    console.log(a);
    return Fn.fmap(setter(a), h(getter(a)));
};
exports.lens_ = lens_;
const lens = (getter, setter) => (h, a) => Fn.fmap(setter(a), h(getter(a)));
exports.lens = lens;
const getting = (g) => (f) => Fn.compose(Const_1.makeConst, Const_1.getConst, f, g);
exports.getting = getting;
const setting = (f) => (g) => (a) => new Identity_1.Identity(f(a, (0, Identity_1.getId)(g())));
exports.setting = setting;
const view = (l, x) => l((y) => (a) => {
    debugger;
    console.log("Y", y);
    console.log("A", a);
    return y;
}, x);
exports.view = view;
const over = (l, f, x) => l(() => (z) => f(z), x)(null);
exports.over = over;
const optional = (fallback) => (0, exports.lens)((a) => Maybe.fromMaybe(fallback, a), (data) => (v) => Maybe.just(v));
exports.optional = optional;
exports.head = (0, exports.lens)(List.head, (xs) => (v) => Maybe.fromMaybe(xs, Maybe.bind(v, (a) => Maybe.fmap((tl) => [a, ...tl], List.tail(xs)))));
exports.tail = (0, exports.lens)(List.tail, (xs) => (vs) => Maybe.fromMaybe(xs, Maybe.bind(vs, (as) => Maybe.fmap((hd) => [hd, ...as], List.head(xs)))));
const index = (i) => (0, exports.lens)(List.nth(i), (xs) => (x) => Maybe.fromMaybe([], Maybe.fmap((x) => List.update(x, i, xs), x)));
exports.index = index;
const prop = (k) => (0, exports.lens)(Dict.get(k), (dict) => (v) => Maybe.fromMaybe(dict, Maybe.fmap((x) => Dict.set(k, x, dict), v)));
exports.prop = prop;
//# sourceMappingURL=ELens.js.map