"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.always = exports.pipe = exports.compose = void 0;
function compose(...funcs) {
    return (x) => funcs.reduce((acc, f) => f(acc), x);
}
exports.compose = compose;
function pipe(...funcs) {
    return (x) => funcs.reduceRight((acc, f) => f(acc), x);
}
exports.pipe = pipe;
const always = (x) => () => x;
exports.always = always;
