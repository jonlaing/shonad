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
exports.until = exports.when = exports.unless = exports.or = exports.not = exports.either = exports.both = exports.anyPass = exports.and = exports.allPass = void 0;
const Fn = __importStar(require("./Function"));
exports.allPass = Fn.curry((fs, x) => fs.reduce((acc, f) => (acc ? f(x) : acc), true));
exports.and = Fn.curry((a, b) => a && b);
exports.anyPass = Fn.curry((fs, x) => fs.reduce((acc, f) => (acc ? acc : f(x)), false));
exports.both = Fn.curry((f, g, x) => f(x) && g(x));
exports.either = Fn.curry((f, g, x) => f(x) || g(x));
exports.not = Fn.curry((f, x) => !f(x));
exports.or = Fn.curry((a, b) => a || b);
exports.unless = Fn.curry((pred, f, x) => pred(x) ? x : f(x));
exports.when = Fn.curry((pred, f, x) => pred(x) ? f(x) : x);
exports.until = Fn.curry((pred, f, x) => pred(x) ? x : (0, exports.until)(pred, f, f(x)));
//# sourceMappingURL=Logic.js.map