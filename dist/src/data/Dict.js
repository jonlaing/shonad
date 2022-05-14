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
exports.has = exports.evolve = exports.mapi = exports.map = exports.eqProps = exports.unset = exports.set = exports.get = void 0;
const Maybe = __importStar(require("./Maybe"));
const Fn = __importStar(require("../base/Function"));
const Ap = __importStar(require("../control/Applicative"));
const Util = __importStar(require("../base/Util"));
const F = __importStar(require("../control/Functor"));
exports.get = Fn.curry((key, dict) => Maybe.maybeNil(dict[key]));
exports.set = Fn.curry((key, val, dict) => (Object.assign(Object.assign({}, dict), { [key]: val })));
exports.unset = Fn.curry((k, dict) => Object.keys(dict).reduce((acc, _k) => (k === _k ? acc : { [_k]: dict[_k] }), {}));
exports.eqProps = Fn.curry((k, d0, d1) => Fn.pipe(Ap.apply_((0, exports.get)(k, d0)), Ap.apply_((0, exports.get)(k, d1)), Maybe.fromMaybe(false))(Maybe.just(Util.eq)));
exports.map = Fn.curry((f, dict) => Object.keys(dict).reduce((acc, k) => (Object.assign(Object.assign({}, acc), { [k]: f(dict[k]) })), {}));
exports.mapi = Fn.curry((f, dict) => Object.keys(dict).reduce((acc, k) => (Object.assign(Object.assign({}, acc), { [k]: f(dict[k], k) })), {}));
exports.evolve = Fn.curry((e, d) => (0, exports.mapi)((v, k) => Maybe.fromMaybe(v, Ap.apply((0, exports.get)(k, e), (0, exports.get)(k, d))), d));
exports.has = Fn.curry((k, d) => Maybe.fromMaybe(false, F.fmap(Fn.true_, (0, exports.get)(k, d))));