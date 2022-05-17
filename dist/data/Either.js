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
exports.bind = exports.apply_ = exports.apply = exports.pure = exports.fmap = exports.unwrap = exports.equals = exports.eitherNil = exports.fromMaybe = exports.partitionEithers = exports.fromRight = exports.fromLeft = exports.rights = exports.lefts = exports.either = exports.isRight = exports.isLeft = exports.right = exports.left = exports.Right = exports.Left = exports.Either = void 0;
const Monad_1 = require("../control/Monad");
const Fn = __importStar(require("../base/Function"));
const Maybe = __importStar(require("./Maybe"));
const Util = __importStar(require("../base/Util"));
class Either extends Monad_1.Monad {
    static pure(a) {
        return new Right(a);
    }
}
exports.Either = Either;
Either.return_ = Either.pure;
class Left extends Either {
    constructor() {
        super(...arguments);
        this.isLeft = Fn.always(true);
        this.isRight = Fn.always(false);
        this.fmap = (f) => this;
        this.apply = (f) => this;
        this.bind = (f) => this;
        this.unwrap = (fallback) => fallback;
    }
}
exports.Left = Left;
class Right extends Either {
    constructor() {
        super(...arguments);
        this.isLeft = Fn.always(false);
        this.isRight = Fn.always(true);
        this.fmap = (f) => new Right(f(this.val));
        this.apply = (f) => f.val(this.val);
        this.bind = (f) => f(this.val);
        this.unwrap = (fallback) => this.val;
    }
}
exports.Right = Right;
const left = (a) => new Left(a);
exports.left = left;
const right = (b) => new Right(b);
exports.right = right;
const isLeft = (x) => x.isLeft();
exports.isLeft = isLeft;
const isRight = (x) => x.isRight();
exports.isRight = isRight;
exports.either = Fn.curry((f0, f1, x) => (0, exports.isLeft)(x) ? f0(x.val) : f1(x.val));
const lefts = (xs) => xs.reduce((acc, x) => ((0, exports.isLeft)(x) ? [...acc, x.val] : acc), []);
exports.lefts = lefts;
const rights = (xs) => xs.reduce((acc, x) => ((0, exports.isRight)(x) ? [...acc, x.val] : acc), []);
exports.rights = rights;
exports.fromLeft = Fn.curry((fallback, x) => ((0, exports.isLeft)(x) ? x.val : fallback));
exports.fromRight = Fn.curry((fallback, x) => ((0, exports.isRight)(x) ? x.val : fallback));
const partitionEithers = (xs) => xs.reduce((acc, x) => ((0, exports.isLeft)(x)
    ? [[...acc[0], x.val], acc[1]]
    : [acc[0], [...acc[1], x.val]]), [[], []]);
exports.partitionEithers = partitionEithers;
exports.fromMaybe = Fn.curry((error, m) => Maybe.isNothing(m) ? (0, exports.left)(error) : (0, exports.right)(m.val));
exports.eitherNil = Fn.curry((error, x) => Util.isNil(x) ? (0, exports.left)(error) : (0, exports.right)(x));
exports.equals = Fn.curry((a, mx) => (0, exports.fromRight)(false, (0, exports.fmap)(Util.eq(a), mx)));
const unwrap = (fallback, e) => e.unwrap(fallback);
exports.unwrap = unwrap;
exports.fmap = Either.fmap;
exports.pure = Either.pure;
exports.apply = Either.apply;
exports.apply_ = Fn.flip(exports.apply);
exports.bind = Either.bind;
//# sourceMappingURL=Either.js.map