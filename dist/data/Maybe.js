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
exports._do = exports.unwrap = exports.or = exports.equals = exports.maybeRecord = exports.mapMaybe = exports.catMaybes = exports.maybeToList = exports.listToMaybe = exports.maybeNil = exports.fromMaybe = exports.maybe = exports.isNothing = exports.isJust = exports.nothing = exports.just = exports.Nothing = exports.Just = exports.pure = exports.bind = exports.apply_ = exports.apply = exports.fmap = exports.Maybe = void 0;
const Monad_1 = require("../control/Monad");
const Fn = __importStar(require("../base/Function"));
const Util = __importStar(require("../base/Util"));
class Maybe extends Monad_1.Monad {
    static pure(a) {
        return new Just(a);
    }
}
exports.Maybe = Maybe;
exports.fmap = Maybe.fmap;
exports.apply = Maybe.apply;
exports.apply_ = Fn.flip(Maybe.apply);
exports.bind = Maybe.bind;
exports.pure = Maybe.pure;
class Just extends Maybe {
    constructor() {
        super(...arguments);
        this.isJust = Fn.always(true);
        this.isNothing = Fn.always(false);
        this.fmap = (f) => new Just(f(this.val));
        this.apply = (ma) => {
            return ((0, exports.isJust)(ma)
                ? ma.fmap(this.val)
                : (0, exports.nothing)());
        };
        this.bind = (f) => f(this.val);
        this.unwrap = (fallback) => this.val;
        this.equals = (a) => this.fmap(Util.eq(a)).unwrap(false);
    }
}
exports.Just = Just;
class Nothing extends Maybe {
    constructor() {
        super(...arguments);
        this.isJust = Fn.always(false);
        this.isNothing = Fn.always(true);
        this.fmap = (f) => new Nothing(this.val);
        this.apply = (f) => this;
        this.bind = (f) => this;
        this.unwrap = (fallback) => fallback;
        this.equals = Fn.always(false);
    }
}
exports.Nothing = Nothing;
const just = (x) => new Just(x);
exports.just = just;
const nothing = (x) => new Nothing(x);
exports.nothing = nothing;
const isJust = (x) => x.isJust();
exports.isJust = isJust;
const isNothing = (x) => x.isNothing();
exports.isNothing = isNothing;
exports.maybe = Fn.curry((fallback, f, x) => (0, exports.isJust)(x) ? f(x.val) : fallback);
exports.fromMaybe = Fn.curry((fallback, x) => ((0, exports.isJust)(x) ? x.val : fallback));
const maybeNil = (a) => Util.isNil(a) ? (0, exports.nothing)(a) : (0, exports.just)(a);
exports.maybeNil = maybeNil;
const listToMaybe = (a) => a.length > 0 ? (0, exports.just)(a[0]) : (0, exports.nothing)();
exports.listToMaybe = listToMaybe;
const maybeToList = (ma) => ma.fmap((a) => [a]).unwrap([]);
exports.maybeToList = maybeToList;
const catMaybes = (xs) => xs.reduce((acc, x) => ((0, exports.isJust)(x) ? [...acc, x.val] : acc), []);
exports.catMaybes = catMaybes;
exports.mapMaybe = Fn.curry((f, as) => as.reduce((acc, a) => {
    const res = f(a);
    return (0, exports.isJust)(res) ? [...acc, res.val] : acc;
}, []));
const maybeRecord = (x) => Object.keys(x).reduce((acc, k) => (Object.assign(Object.assign({}, acc), { [k]: (0, exports.maybeNil)(x[k]) })), {});
exports.maybeRecord = maybeRecord;
exports.equals = Fn.curry((a, mx) => (0, exports.fromMaybe)(false, (0, exports.fmap)(Util.eq(a), mx)));
exports.or = Fn.curry((f1, f0) => {
    const ma = f0();
    return (0, exports.isJust)(ma) ? ma : f1();
});
exports.unwrap = Fn.curry((fallback, mx) => mx.unwrap(fallback));
exports._do = (0, Monad_1.makeDo)(exports.pure, exports.bind);
//# sourceMappingURL=Maybe.js.map