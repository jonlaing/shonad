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
exports.apply_ = exports.apply = exports.makeApplicative = exports.implementApplicativeClass = void 0;
const Functor_1 = require("./Functor");
const Typeclass_1 = require("../base/Typeclass");
const Fn = __importStar(require("../base/Function"));
const implementations = new Typeclass_1.Implementations();
const implementApplicativeClass = (name, { fmap, pure, apply }) => {
    const _class = {
        functions: {
            pure,
            apply,
        },
    };
    implementations.add(name, _class);
    (0, Functor_1.implementFunctorClass)(name, fmap);
};
exports.implementApplicativeClass = implementApplicativeClass;
const makeApplicative = (name, x) => {
    return Object.assign(Object.assign({}, x), { __applicative: name, __functor: name });
};
exports.makeApplicative = makeApplicative;
exports.apply = Fn.curry((f, x) => implementations.get(x.__applicative).functions.apply(f, x));
exports.apply_ = Fn.flip(exports.apply);
