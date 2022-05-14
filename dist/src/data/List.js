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
exports.update = exports.adjust = exports.splitAt = exports.takeLast = exports.take = exports.nth = exports.find = exports.intercalate = exports.intersperse = exports.length = exports.isEmpty = exports.singleton = exports.uncons = exports.init = exports.tail = exports.last = exports.reverse = exports.head = exports.concat = void 0;
const Fn = __importStar(require("../base/Function"));
const Functor_1 = require("../control/Functor");
const Maybe = __importStar(require("./Maybe"));
const Monad_1 = require("../control/Monad");
const concat = (as) => as.reduce((acc, a) => [...acc, ...a], []);
exports.concat = concat;
exports.head = Maybe.listToMaybe;
const reverse = (a) => {
    let copy = a;
    return copy.reverse();
};
exports.reverse = reverse;
exports.last = Fn.pipe(Maybe.listToMaybe, exports.reverse);
const tail = (a) => a.length === 0 ? Maybe.nothing() : Maybe.just(a.slice(1));
exports.tail = tail;
const init = (a) => a.length === 0 ? Maybe.nothing() : Maybe.just(a.slice(0, -1));
exports.init = init;
const uncons = (as) => (0, Monad_1.bind)((0, exports.head)(as), (a) => (0, Functor_1.fmap)((b) => [a, b], (0, exports.tail)(as)));
exports.uncons = uncons;
const singleton = (a) => [a];
exports.singleton = singleton;
const isEmpty = (a) => a.length === 0;
exports.isEmpty = isEmpty;
const length = (a) => a.length;
exports.length = length;
function intersperse(a, as) {
    if (as === undefined) {
        return (as) => intersperse(a, as);
    }
    return as.reduceRight((acc, v, i) => (i === 0 ? [v, ...acc] : [a, v, ...acc]), []);
}
exports.intersperse = intersperse;
function intercalate(a, as) {
    if (as === undefined) {
        return (as) => intercalate(a, as);
    }
    return (0, exports.concat)(intersperse([a], as));
}
exports.intercalate = intercalate;
function find(pred, xs) {
    if (xs === undefined) {
        return (as) => find(pred, as);
    }
    if ((0, exports.isEmpty)(xs))
        return Maybe.nothing();
    const [a, ...as_] = xs;
    if (pred(a)) {
        return Maybe.just(a);
    }
    return find(pred, as_);
}
exports.find = find;
function nth(i, xs) {
    if (xs === undefined)
        return (xs) => nth(i, xs);
    if (xs.length < i + 1)
        return Maybe.nothing();
    return Maybe.just(xs[i]);
}
exports.nth = nth;
function take(i, xs) {
    if (xs === undefined)
        return (xs) => take(i, xs);
    const loop = (i, xs, acc) => {
        if (i <= 0)
            return acc;
        if (xs.length === 0)
            return acc;
        let [a, ...b] = xs;
        return loop(i - 1, b, [...acc, a]);
    };
    return loop(i, xs, []);
}
exports.take = take;
function takeLast(i, xs) {
    if (xs === undefined)
        return (xs) => takeLast(i, xs);
    return Fn.pipe(exports.reverse, take(i), exports.reverse)(xs);
}
exports.takeLast = takeLast;
function splitAt(i, xs) {
    if (xs === undefined)
        return (xs) => splitAt(i, xs);
    return [take(i, xs), takeLast(xs.length - i, xs)];
}
exports.splitAt = splitAt;
function adjust(f, i, xs) {
    if (i === undefined)
        return (i, xs) => adjust(f, i, xs);
    if (xs === undefined)
        return (xs) => adjust(f, i, xs);
    if (i < 0 || i >= xs.length)
        return xs;
    const [hd, tl] = splitAt(i + 1, xs);
    if (hd.length === 0)
        return tl;
    if (hd.length === 1)
        return [f(hd[0]), ...tl];
    const [_init, x] = splitAt(i, hd);
    return [..._init, f(x[0]), ...tl];
}
exports.adjust = adjust;
function update(x, i, xs) {
    if (i === undefined)
        return (i, xs) => update(x, i, xs);
    if (xs === undefined)
        return (xs) => update(x, i, xs);
    return adjust(Fn.always(x), i, xs);
}
exports.update = update;
