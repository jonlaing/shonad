"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flip = exports.identity = exports.true_ = exports.false_ = exports.always = exports.pipe = exports.compose = exports.curry = exports.curryN = void 0;
const _curryN = (n, args, f) => {
    if (n <= 0)
        return f(...args);
    return function () {
        return _curryN(n - arguments.length, [...args, ...arguments], f);
    };
};
const curryN = (n, f) => _curryN(n, [], f);
exports.curryN = curryN;
const curry = (f) => (0, exports.curryN)(f.length, f);
exports.curry = curry;
const compose = (...funcs) => {
    return (x) => funcs.reduceRight((acc, f) => f(acc), x);
};
exports.compose = compose;
const pipe = (...funcs) => {
    return (x) => funcs.reduce((acc, f) => f(acc), x);
};
exports.pipe = pipe;
const always = (x) => () => x;
exports.always = always;
exports.false_ = (0, exports.always)(false);
exports.true_ = (0, exports.always)(true);
const identity = (x) => x;
exports.identity = identity;
exports.flip = (0, exports.curry)((f, a, b, ...args) => {
    return f(b, a, ...args);
});
