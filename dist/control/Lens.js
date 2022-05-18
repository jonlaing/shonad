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
exports.nonEmptyDict = exports.nonEmptyList = exports.nonEmptyString = exports.or = exports.prop = exports.index = exports.tail = exports.head = exports.optional = exports.compose = exports.pipe = exports.over = exports.set = exports.viewE = exports.view = exports.lens = void 0;
const Fn = __importStar(require("../base/Function"));
const Maybe = __importStar(require("../data/Maybe"));
const List = __importStar(require("../data/List"));
const Dict = __importStar(require("../data/Dict"));
const Either = __importStar(require("../data/Either"));
const lens = (getter, setter) => ({
    get: getter,
    set: setter,
});
exports.lens = lens;
exports.view = Fn.curry((lens, data) => lens.get(data));
exports.viewE = Fn.curry((lens, error, data) => Either.fromMaybe(error, (0, exports.view)(lens, data)));
exports.set = Fn.curry((lens, val, data) => lens.set(val, data));
exports.over = Fn.curry((lens, f, data) => lens.set(f(lens.get(data)), data));
const pipe = (...lenses) => {
    if (lenses.length === 1)
        return lenses[0];
    const [l0, l1, ...rest] = lenses;
    const newLens = {
        get: Fn.compose(l0.get, l1.get),
        set: (a, x) => l1.set(l0.set(a, l1.get(x)), x),
    };
    return (0, exports.pipe)(newLens, ...rest);
};
exports.pipe = pipe;
const compose = (...lenses) => (0, exports.pipe)(...List.reverse(lenses));
exports.compose = compose;
const optional = (fallback) => ({
    get: (a) => Maybe.fromMaybe(fallback, a),
    set: (v, data) => Maybe.just(v),
});
exports.optional = optional;
exports.head = {
    get: List.head,
    set: (v, xs) => Maybe.fromMaybe(xs, Maybe.bind(v, (a) => Maybe.fmap((tl) => [a, ...tl], List.tail(xs)))),
};
exports.tail = {
    get: List.tail,
    set: (vs, xs) => Maybe.fromMaybe(xs, Maybe.bind(vs, (as) => Maybe.fmap((hd) => [hd, ...as], List.head(xs)))),
};
const index = (i) => ({
    get: List.nth(i),
    set: (x, xs) => Maybe.fromMaybe(xs, Maybe.fmap((x) => List.update(x, i, xs), x)),
});
exports.index = index;
const prop = (k) => ({
    get: Dict.get(k),
    set: (v, dict) => Maybe.fromMaybe(dict, Maybe.fmap((x) => Dict.set(k, x, dict), v)),
});
exports.prop = prop;
/**
 * Forks a lens. If the second lens returns `Nothing` then it will use
 * the first lens.
 *
 * @remarks
 *
 * This is backward from how you might expect `or' to work. This is to
 * support currying and partial application
 *
 * @param l1 - Lens that returns a `Maybe c`
 * @param l0 - Lens that returns a `Maybe b`
 * @returns  a Lens of `Maybe b` or `Maybe c`
 */
const or = (l1, l0) => (0, exports.lens)((a) => Maybe.or(() => l1.get(a), () => l0.get(a)), (mv, a) => Maybe.fromMaybe(l1.set(mv, a), Maybe.fmap((_) => l0.set(mv, a), l0.get(a))));
exports.or = or;
exports.nonEmptyString = (0, exports.lens)((a) => (a === "" ? Maybe.nothing() : Maybe.just(a)), (mv, a) => Maybe.fromMaybe("", mv));
exports.nonEmptyList = (0, exports.lens)((a) => (List.isEmpty(a) ? Maybe.nothing() : Maybe.just(a)), (mv, a) => Maybe.fromMaybe([], mv));
exports.nonEmptyDict = (0, exports.lens)((a) => (Dict.isEmpty(a) ? Maybe.nothing() : Maybe.just(a)), (mv, a) => Maybe.fromMaybe({}, mv));
//# sourceMappingURL=Lens.js.map