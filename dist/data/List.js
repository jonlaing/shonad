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
exports.remove = exports.endsWith = exports.startsWith = exports.includes = exports.aperature = exports.dropLast = exports.drop = exports.reject = exports.filter = exports.reduceRight = exports.reduce = exports.range = exports.partition = exports.none = exports.exists = exports.join = exports.insert = exports.insertAll = exports.lastIndexOf = exports.indexOf = exports.groupBy = exports.append = exports.update = exports.adjust = exports.splitAt = exports.takeLast = exports.take = exports.nth = exports.findLastIndex = exports.findLast = exports.findIndex = exports.find = exports.intersperse = exports.length = exports.isEmpty = exports.singleton = exports.uncons = exports.init = exports.tail = exports.last = exports.reverse = exports.head = exports.concat = void 0;
const Fn = __importStar(require("../base/Function"));
const Maybe = __importStar(require("./Maybe"));
const Dict = __importStar(require("./Dict"));
const Util = __importStar(require("../base/Util"));
const Lg = __importStar(require("../base/Logic"));
const concat = (as) => as.reduce((acc, a) => [...acc, ...a], []);
exports.concat = concat;
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
const uncons = (as) => Maybe.bind((0, exports.head)(as), (a) => Maybe.fmap((b) => [a, b], (0, exports.tail)(as)));
exports.uncons = uncons;
const singleton = (a) => [a];
exports.singleton = singleton;
const isEmpty = (a) => a.length === 0;
exports.isEmpty = isEmpty;
const length = (a) => a.length;
exports.length = length;
exports.intersperse = Fn.curry((a, as) => as.reduceRight((acc, v, i) => (i === 0 ? [v, ...acc] : [a, v, ...acc]), []));
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
exports.take = Fn.curry((i, xs) => {
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
exports.takeLast = Fn.curry((i, xs) => Fn.pipe(exports.reverse, (0, exports.take)(i), exports.reverse)(xs));
exports.splitAt = Fn.curry((i, xs) => [
    (0, exports.take)(i, xs),
    (0, exports.takeLast)(xs.length - i, xs),
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
exports.update = Fn.curry((x, i, xs) => (0, exports.adjust)(Fn.always(x), i, xs));
exports.append = Fn.curry((x, xs) => [
    ...xs,
    x,
]);
exports.groupBy = Fn.curry((f, xs) => xs.reduce((acc, x) => ({
    [f(x)]: [...Maybe.fromMaybe([], Dict.get(f(x), acc)), x],
}), {}));
exports.indexOf = Fn.curry((a, xs) => (0, exports.findIndex)(Util.eq(a), xs));
exports.lastIndexOf = Fn.curry((a, xs) => Fn.compose((0, exports.indexOf)(a), exports.reverse)(xs));
exports.insertAll = Fn.curry((i, xs, ys) => {
    const [a, b] = (0, exports.splitAt)(i, ys);
    return [...a, ...xs, ...b];
});
exports.insert = Fn.curry((i, x, xs) => (0, exports.insertAll)(i, [x], xs));
exports.join = Fn.curry((s, xs) => xs.reduce((acc, x) => (acc.length === 0 ? `${x}` : `${acc}${s}${x}`), ""));
exports.exists = Fn.curry((pred, xs) => Maybe.isJust((0, exports.find)(pred, xs)));
exports.none = Fn.curry(Fn.compose(Lg.not, exports.exists));
exports.partition = Fn.curry((pred, xs) => [
    xs.filter(pred),
    xs.filter(Fn.compose(Lg.not, pred)),
]);
const range_ = (start, len, acc) => len === 0 ? acc : range_(start + 1, len - 1, [...acc, start]);
exports.range = Fn.curry((start, len) => range_(start, len, []));
exports.reduce = Fn.curry((f, initV, xs) => xs.reduce(f, initV));
exports.reduceRight = Fn.curry((f, initV, xs) => Fn.pipe(exports.reverse, (0, exports.reduce)(f, initV))(xs));
exports.filter = Fn.curry((pred, xs) => xs.filter(pred));
exports.reject = Fn.curry((pred, xs) => xs.filter(Fn.compose(Lg.not, pred)));
exports.drop = Fn.curry((n, xs) => {
    if (xs.length === 0)
        return [];
    if (n === 0)
        return xs;
    const [_, ...tl] = xs;
    return (0, exports.drop)(n - 1, tl);
});
exports.dropLast = Fn.curry((n, xs) => (0, exports.take)(xs.length - n, xs));
const aperature_ = (n, xs, acc) => {
    if (xs.length === 0)
        return acc;
    if (xs.length < n)
        return acc;
    const [_, ...tl] = xs;
    return aperature_(n, tl, (0, exports.append)((0, exports.take)(n, xs), acc));
};
exports.aperature = Fn.curry((n, xs) => aperature_(n, xs, []));
exports.includes = Fn.curry((a, xs) => (0, exports.exists)(Util.eq(a), xs));
exports.startsWith = Fn.curry((a, xs) => Maybe.fromMaybe(false, Maybe.fmap(Util.eq(a), (0, exports.last)(xs))));
exports.endsWith = Fn.curry((a, xs) => Fn.pipe(exports.reverse, (0, exports.startsWith)(a))(xs));
exports.remove = Fn.curry((i, len, xs) => {
    const [a, b] = (0, exports.splitAt)(i, xs);
    return [...a, ...(0, exports.drop)(len, b)];
});
//# sourceMappingURL=List.js.map