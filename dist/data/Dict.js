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
exports.makeDictOptHelper = exports.makeDictHelper = exports.merge = exports.propEq = exports.isEmpty = exports.has = exports.evolve = exports.mapi = exports.map = exports.eqProps = exports.unset = exports.set = exports.getUnsafe = exports.get = void 0;
const Maybe = __importStar(require("./Maybe"));
const Fn = __importStar(require("../base/Function"));
const Util = __importStar(require("../base/Util"));
exports.get = Fn.curry((key, dict) => Maybe.maybeNil(dict[key]));
exports.getUnsafe = Fn.curry((key, dict) => dict[key]);
exports.set = Fn.curry((key, val, dict) => (Object.assign(Object.assign({}, dict), { [key]: val })));
exports.unset = Fn.curry((k, dict) => Object.keys(dict).reduce((acc, _k) => (k === _k ? acc : { [_k]: dict[_k] }), {}));
exports.eqProps = Fn.curry((k, d0, d1) => Fn.pipe(Maybe.apply_((0, exports.get)(k, d0)), Maybe.apply_((0, exports.get)(k, d1)), Maybe.fromMaybe(false))(Maybe.just(Util.eq)));
exports.map = Fn.curry((f, dict) => Object.keys(dict).reduce((acc, k) => (Object.assign(Object.assign({}, acc), { [k]: f(dict[k]) })), {}));
exports.mapi = Fn.curry((f, dict) => Object.keys(dict).reduce((acc, k) => (Object.assign(Object.assign({}, acc), { [k]: f(dict[k], k) })), {}));
exports.evolve = Fn.curry((e, d) => (0, exports.mapi)((v, k) => Maybe.fromMaybe(v, Maybe.apply((0, exports.get)(k, e), (0, exports.get)(k, d))), d));
exports.has = Fn.curry((k, d) => Maybe.fromMaybe(false, Maybe.fmap(Fn.true_, (0, exports.get)(k, d))));
const isEmpty = (a) => Object.keys(a).length === 0;
exports.isEmpty = isEmpty;
exports.propEq = Fn.curry((key, val, dict) => (0, exports.get)(key, dict).fmap(Util.eq(val)).unwrap(false));
exports.merge = Fn.curry((a, dict) => (Object.assign(Object.assign({}, dict), a)));
/**
 * Transforms an arbitrary Dict into an object that will returns either
 * the value in the Dict or the default value.
 *
 * @example
 * ```typescript
 * interface Thing {
 *  a: number;
 *  b?: number;
 *  c?: {
 *    d: number;
 *    e?: number;
 *  }
 * }
 *
 * const map: Thing = {
 *  a: 1,
 *  b: 2,
 *  c: {
 *    d: 3,
 *    e: 4,
 *  }
 * };
 *
 * const thing: Thing = {
 *  a: 5,
 * };
 *
 * const helper = makeDictHelper(map);
 * const helped = helper(thing);
 * helped.a()       // 5 <-- value in `thing`
 * helped.b()       // 2 <-- value in `map`
 * helped.c().d()   // 3
 * helped.c().e()   // 4
 *
 * // careful, this doensn't work the way you might expect
 * helped.c()       // { d: () => number, e: () => number }
 * ```
 *
 * @see {@link makeDictOptHelper}
 * @param map A map of default values
 * @returns A Dict Helper
 */
const makeDictHelper = (map) => (obj) => (0, exports.mapi)((v, k) => {
    if (Util.isObject(v)) {
        return () => (0, exports.makeDictHelper)(v)((0, exports.get)(k, obj.unwrap({})));
    }
    return () => (0, exports.get)(k, obj.unwrap({})).unwrap(v);
}, map);
exports.makeDictHelper = makeDictHelper;
const DictOptReservedWords = ["get", "opt"];
/**
 * Similar to {@link makeDictHelper}, except it allows you to access the Maybe
 * type within. It also acts a little more predictably with nested
 * objects than {@link makeDictHelper}.
 *
 * @remarks
 * Since `get` and `opt` are part of the interface, you can't use either
 * of those words as keys in your object. If you try it will throw an
 * exception when making the helper.
 *
 * @example
 * ```typescript
 * interface Thing {
 *  a: number;
 *  b?: number;
 *  c?: {
 *    d: number;
 *    e?: number;
 *  }
 * }
 *
 * const map: Thing = {
 *  a: 1,
 *  b: 2,
 *  c: {
 *    d: 3,
 *    e: 4,
 *  }
 * };
 *
 * const thing: Thing = {
 *  a: 5,
 * };
 *
 * const helper = makeDictOptHelper(map);
 * const helped = helper(thing);
 * helped.a.get()       // 5 <-- value in `thing`
 * helped.a.opt()       // Just(5)
 * helped.b.get()       // 2 <-- value in `map`
 * helped.b.opt()       // Nothing
 * helped.c.get()       // { d: 3, e: 4 }
 * helped.c.d.get()     // 3
 * helped.c.e.get()     // 4
 * ```
 *
 * @see {@link makeDictHelper}
 * @param map A map of default values
 * @returns A Dict Opt Helper
 */
const makeDictOptHelper = (map) => (obj) => (0, exports.mapi)((v, k) => {
    if (DictOptReservedWords.includes(k)) {
        throw `Key ${k} is reserved word for makeDictOptHelper. Consider using a different key name.`;
    }
    const val = (0, exports.get)(k, obj.unwrap({}));
    if (Util.isObject(v)) {
        const props = (0, exports.makeDictOptHelper)(v)(val);
        return Object.assign(Object.assign({}, props), { get: () => val.unwrap(v), opt: () => val });
    }
    return {
        get: () => val.unwrap(v),
        opt: () => val,
    };
}, map);
exports.makeDictOptHelper = makeDictOptHelper;
//# sourceMappingURL=Dict.js.map