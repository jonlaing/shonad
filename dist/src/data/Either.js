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
exports.bind = exports.apply = exports.pure = exports.fmap = exports.eitherNil = exports.fromMaybe = exports.partitionEithers = exports.fromRight = exports.fromLeft = exports.rights = exports.lefts = exports.either = exports.isRight = exports.isLeft = exports.right = exports.left = void 0;
const M = __importStar(require("../control/Monad"));
const Maybe = __importStar(require("./Maybe"));
const Util = __importStar(require("../base/Util"));
const left = (a) => M.makeMonad("either", { __left: a });
exports.left = left;
const right = (b) => M.makeMonad("either", { __right: b });
exports.right = right;
const isLeft = (x) => x.__left !== undefined;
exports.isLeft = isLeft;
const isRight = (x) => x.__right !== undefined;
exports.isRight = isRight;
const either = (f0, f1, x) => ((0, exports.isLeft)(x) ? f0(x.__left) : f1(x.__right));
exports.either = either;
const lefts = (xs) => xs.reduce((acc, x) => ((0, exports.isLeft)(x) ? [...acc, x.__left] : acc), []);
exports.lefts = lefts;
const rights = (xs) => xs.reduce((acc, x) => ((0, exports.isRight)(x) ? [...acc, x.__right] : acc), []);
exports.rights = rights;
const fromLeft = (fallback, x) => (0, exports.isLeft)(x) ? x.__left : fallback;
exports.fromLeft = fromLeft;
const fromRight = (fallback, x) => (0, exports.isRight)(x) ? x.__right : fallback;
exports.fromRight = fromRight;
const partitionEithers = (xs) => xs.reduce((acc, x) => (0, exports.isLeft)(x)
    ? [[...acc[0], x.__left], acc[1]]
    : [acc[0], [...acc[1], x.__right]], [[], []]);
exports.partitionEithers = partitionEithers;
const fromMaybe = (error, m) => Maybe.isNothing(m) ? (0, exports.left)(error) : M.bind(m, exports.right);
exports.fromMaybe = fromMaybe;
const eitherNil = (error, x) => Util.isNil(x) ? (0, exports.left)(error) : (0, exports.right)(x);
exports.eitherNil = eitherNil;
const fmap = (f, x) => ((0, exports.isRight)(x) ? (0, exports.right)(f(x.__right)) : x);
exports.fmap = fmap;
exports.pure = exports.right;
const apply = (x, y) => (0, exports.fmap)((g) => g(y.__right), x);
exports.apply = apply;
const bind = (x, f) => ((0, exports.isRight)(x) ? f(x.__right) : x);
exports.bind = bind;
M.implementMonadClass("either", { fmap: exports.fmap, pure: exports.pure, apply: exports.apply, bind: exports.bind });
