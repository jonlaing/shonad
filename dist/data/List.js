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
exports.concat = exports.move = exports.insert = exports.uniq = exports.reduce = exports.reject = exports.filter = exports.map = exports.drop = exports.lastIndexOf = exports.indexOf = exports.prepend = exports.append = exports.updateWhen = exports.update = exports.adjustWhen = exports.adjust = exports.splitAt = exports.nth = exports.findLastIndex = exports.findLast = exports.findIndex = exports.find = exports.isEmpty = exports.init = exports.tail = exports.last = exports.reverse = exports.head = void 0;
const Fn = __importStar(require("../base/Function"));
const Maybe = __importStar(require("./Maybe"));
const Util = __importStar(require("../base/Util"));
const Lg = __importStar(require("../base/Logic"));
exports.head = Maybe.listToMaybe;
const reverse = (a) => {
    let copy = a;
    return copy.reverse();
};
exports.reverse = reverse;
exports.last = Fn.pipe(exports.reverse, Maybe.listToMaybe);
const tail = (a) => a.length === 0 ? Maybe.nothing() : Maybe.just(a.slice(1));
exports.tail = tail;
const init = (a) => a.length === 0 ? Maybe.nothing() : Maybe.just(a.slice(0, -1));
exports.init = init;
const isEmpty = (a) => a.length === 0;
exports.isEmpty = isEmpty;
const find_ = (pred, xs) => {
    if ((0, exports.isEmpty)(xs))
        return Maybe.nothing();
    const [a, ...as_] = xs;
    if (pred(a)) {
        return Maybe.just(a);
    }
    return find_(pred, as_);
};
exports.find = Fn.curry((pred, xs) => {
    const filtered = xs.filter(pred);
    if (filtered.length === 0)
        return Maybe.nothing();
    return (0, exports.head)(filtered);
});
exports.findIndex = Fn.curry((pred, xs) => {
    const reduced = xs.reduce((acc, x, i) => (i === -1 && pred(x) ? i : acc), -1);
    if (reduced === -1)
        return Maybe.nothing();
    return Maybe.just(reduced);
});
exports.findLast = Fn.curry((pred, xs) => Fn.compose((0, exports.find)(pred), exports.reverse)(xs));
exports.findLastIndex = Fn.curry((pred, xs) => Fn.compose((0, exports.findIndex)(pred), exports.reverse)(xs));
exports.nth = Fn.curry((i, xs) => {
    if (xs.length < i + 1)
        return Maybe.nothing();
    return Maybe.just(xs[i]);
});
const take = Fn.curry((i, xs) => {
    const loop = (i, xs, acc) => {
        if (i <= 0)
            return acc;
        if (xs.length === 0)
            return acc;
        let [a, ...b] = xs;
        return loop(i - 1, b, [...acc, a]);
    };
    return loop(i, xs, []);
});
const takeLast = Fn.curry((i, xs) => Fn.pipe(exports.reverse, take(i), exports.reverse)(xs));
exports.splitAt = Fn.curry((i, xs) => [
    take(i, xs),
    takeLast(xs.length - i, xs),
]);
exports.adjust = Fn.curry((f, i, xs) => {
    if (i < 0 || i >= xs.length)
        return xs;
    const [hd, tl] = (0, exports.splitAt)(i + 1, xs);
    if (hd.length === 0)
        return tl;
    if (hd.length === 1)
        return [f(hd[0]), ...tl];
    const [_init, x] = (0, exports.splitAt)(i, hd);
    return [..._init, f(x[0]), ...tl];
});
exports.adjustWhen = Fn.curry((pred, f, xs) => {
    return (0, exports.findIndex)(pred, xs)
        .fmap((i) => (0, exports.adjust)(f, i, xs))
        .unwrap(xs);
});
exports.update = Fn.curry((x, i, xs) => (0, exports.adjust)(Fn.always(x), i, xs));
exports.updateWhen = Fn.curry((pred, x, xs) => (0, exports.adjustWhen)(pred, Fn.always(x), xs));
exports.append = Fn.curry((x, xs) => [
    ...xs,
    x,
]);
exports.prepend = Fn.curry((x, xs) => [
    x,
    ...xs,
]);
exports.indexOf = Fn.curry((a, xs) => (0, exports.findIndex)(Util.eq(a), xs));
exports.lastIndexOf = Fn.curry((a, xs) => Fn.compose((0, exports.indexOf)(a), exports.reverse)(xs));
exports.drop = Fn.curry((n, xs) => {
    if (xs.length === 0)
        return [];
    if (n === 0)
        return xs;
    const [_, ...tl] = xs;
    return (0, exports.drop)(n - 1, tl);
});
exports.map = Fn.curry((f, list) => list.map(f));
exports.filter = Fn.curry((pred, list) => list.filter(pred));
exports.reject = Fn.curry((pred, list) => list.filter(Lg.not(pred)));
exports.reduce = Fn.curry((f, initial, list) => list.reduce(f, initial));
const uniq = (as) => as.reduce((acc, v) => (acc.includes(v) ? acc : [...acc, v]), []);
exports.uniq = uniq;
exports.insert = Fn.curry((idx, item, list) => {
    const [hd, tl] = (0, exports.splitAt)(idx, list);
    return [...hd, item, ...tl];
});
exports.move = Fn.curry((from, to, list) => {
    const [hd, [item, ...tl]] = (0, exports.splitAt)(from, list);
    return (0, exports.insert)(to, item, [...hd, ...tl]);
});
exports.concat = Fn.curry((a, b) => [
    ...a,
    ...b,
]);
//# sourceMappingURL=List.js.map