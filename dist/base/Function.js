"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = exports.identity = exports.true_ = exports.false_ = exports.always = exports.pipe = exports.compose = void 0;
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
exports.false_ = (0, exports.always)(false);
exports.true_ = (0, exports.always)(true);
const identity = (x) => x;
exports.identity = identity;
function flip(f, a, b) {
    if (a === undefined)
        return (a, b) => flip(f, a, b);
    if (b === undefined)
        return (b) => flip(f, a, b);
    return f(b, a);
}
exports.flip = flip;
