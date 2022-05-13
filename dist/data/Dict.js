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
function get(key, dict) {
    if (dict === undefined)
        return (dict) => get(key, dict);
    return Maybe.maybeNil(dict[key]);
}
exports.get = get;
function set(key, val, dict) {
    if (val === undefined)
        return (val, dict) => set(key, val, dict);
    if (dict === undefined)
        return (dict) => set(key, val, dict);
    return Object.assign(Object.assign({}, dict), { [key]: val });
}
exports.set = set;
function unset(k, dict) {
    if (dict === undefined)
        return (dict) => unset(k, dict);
    return Object.keys(dict).reduce((acc, _k) => (k === _k ? acc : { [_k]: dict[_k] }), {});
}
exports.unset = unset;
function eqProps(k, d0, d1) {
    if (d0 === undefined)
        return (d0, d1) => eqProps(k, d0, d1);
    if (d1 === undefined)
        return (d1) => eqProps(k, d0, d1);
    return Fn.pipe(Ap.apply(get(k, d0)), Ap.apply(get(k, d1)), Maybe.fromMaybe(false))(Maybe.just(Util.eq));
}
exports.eqProps = eqProps;
function map(f, dict) {
    if (dict === undefined)
        return (dict) => map(f, dict);
    Object.keys(dict).map((k) => ({ [k]: f(dict[k]) }));
}
exports.map = map;
function mapi(f, dict) {
    if (dict === undefined)
        return (dict) => mapi(f, dict);
    Object.keys(dict).map((k) => ({ [k]: f(dict[k], k) }));
}
exports.mapi = mapi;
function evolve(e, d) {
    if (d === undefined)
        return (d) => evolve(e, d);
    return mapi((v, k) => Maybe.fromMaybe(v, F.fmap(e[k], get(k, d))));
}
exports.evolve = evolve;
function has(k, d) {
    if (d === undefined)
        return (d) => has(k, d);
    return Maybe.fromMaybe(false, F.fmap(Fn.true_, get(k, d)));
}
exports.has = has;
