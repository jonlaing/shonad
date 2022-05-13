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
exports.prop = exports.index = exports.tail = exports.head = exports.optional = exports.pipe = exports.compose = exports.over = exports.set = exports.viewE = exports.view = exports.lens = void 0;
const Fn = __importStar(require("../base/Function"));
const F = __importStar(require("../control/Functor"));
const Maybe = __importStar(require("../data/Maybe"));
const List = __importStar(require("../data/List"));
const Monad = __importStar(require("../control/Monad"));
const Dict = __importStar(require("../data/Dict"));
const Either = __importStar(require("../data/Either"));
const lens = (getter, setter) => ({
    get: getter,
    set: setter,
});
exports.lens = lens;
function view(lens, data) {
    if (data === undefined)
        return (data) => view(lens, data);
    return lens.get(data);
}
exports.view = view;
function viewE(lens, error, data) {
    if (error === undefined)
        return (error, data) => viewE(lens, error, data);
    if (data === undefined)
        return (data) => viewE(lens, error, data);
    return Either.fromMaybe(error, view(lens, data));
}
exports.viewE = viewE;
const set = (lens, val, data) => lens.set(val, data);
exports.set = set;
function over(lens, f, data) {
    if (f === undefined)
        return (f, data) => over(lens, f, data);
    if (data === undefined)
        return (data) => over(lens, f, data);
    return lens.set(f(lens.get(data)), data);
}
exports.over = over;
const compose = (l0, l1) => ({
    get: Fn.compose(l1.get, l0.get),
    set: Fn.compose(l0.set, over(l1)),
});
exports.compose = compose;
const pipe = (l0, l1) => (0, exports.compose)(l1, l0);
exports.pipe = pipe;
const optional = (fallback) => ({
    get: (a) => Maybe.fromMaybe(fallback, a),
    set: (v, data) => Maybe.just(v),
});
exports.optional = optional;
exports.head = {
    get: List.head,
    set: (v, xs) => Maybe.fromMaybe(xs, Monad.bind(v, (a) => F.fmap((tl) => [a, ...tl], List.tail(xs)))),
};
exports.tail = {
    get: List.tail,
    set: (vs, xs) => Maybe.fromMaybe(xs, Monad.bind(vs, (as) => F.fmap((hd) => [hd, ...as], List.head(xs)))),
};
const index = (i) => ({
    get: List.nth(i),
    set: (x, xs) => Maybe.fromMaybe([], F.fmap((x) => List.update(x, i, xs), x)),
});
exports.index = index;
const prop = (k) => ({
    get: Dict.get(k),
    set: (v, dict) => Maybe.fromMaybe(dict, F.fmap((x) => Dict.set(k, x, dict), v)),
});
exports.prop = prop;
