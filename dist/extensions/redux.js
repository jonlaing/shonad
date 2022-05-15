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
exports.always = exports.over = exports.set = exports.pipe = void 0;
const L = __importStar(require("../control/Lens"));
const pipe = (...funcs) => (state, action) => funcs.reduce((s, f) => f(s, action), state);
exports.pipe = pipe;
function set(lens, state, action) {
    if (state === undefined)
        return (state, action) => set(lens, state, action);
    if (action === undefined)
        return (action) => set(lens, state, action);
    return L.set(lens, action.payload, state);
}
exports.set = set;
function over(fn, lens, state, action) {
    if (lens === undefined)
        return (lens, state, action) => over(fn, lens, state, action);
    if (state === undefined)
        return (state, action) => over(fn, lens, state, action);
    if (action === undefined)
        return (action) => over(fn, lens, state, action);
    return L.over(lens, fn(action.payload), state);
}
exports.over = over;
function always(lens, val, state, action) {
    if (val === undefined)
        return (val, state, action) => always(lens, val, state, action);
    if (state === undefined)
        return (state, action) => always(lens, val, state, action);
    if (action === undefined)
        return (action) => always(lens, val, state, action);
    return L.set(lens, val, state);
}
exports.always = always;
//# sourceMappingURL=redux.js.map