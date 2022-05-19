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
exports.add = exports.lte_ = exports.lte = exports.lt_ = exports.lt = exports.gte_ = exports.gte = exports.gt_ = exports.gt = void 0;
const Fn = __importStar(require("./Function"));
exports.gt = Fn.curry((a, b) => a > b);
exports.gt_ = Fn.flip(exports.gt);
exports.gte = Fn.curry((a, b) => a >= b);
exports.gte_ = Fn.flip(exports.gte);
exports.lt = Fn.curry((a, b) => a < b);
exports.lt_ = Fn.flip(exports.lt);
exports.lte = Fn.curry((a, b) => a <= b);
exports.lte_ = Fn.flip(exports.lte);
exports.add = Fn.curry((a, b) => a + b);
//# sourceMappingURL=Number.js.map