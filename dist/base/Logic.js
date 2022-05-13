"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.until = exports.when = exports.unless = exports.or = exports.not = exports.either = exports.both = exports.anyPass = exports.and = exports.allPass = void 0;
function allPass(fs, x) {
    if (x === undefined)
        return (x) => allPass(fs, x);
    return fs.reduce((acc, f) => (acc ? f(x) : acc), true);
}
exports.allPass = allPass;
function and(a, b) {
    if (b === undefined)
        return (b) => and(a, b);
    return a && b;
}
exports.and = and;
function anyPass(fs, x) {
    if (x === undefined)
        return (x) => anyPass(fs, x);
    return fs.reduce((acc, f) => (acc ? acc : f(x)), false);
}
exports.anyPass = anyPass;
function both(f, g, x) {
    if (g === undefined)
        return (g, x) => both(f, g, x);
    if (x === undefined)
        return (x) => both(f, g, x);
    return f(x) && g(x);
}
exports.both = both;
function either(f, g, x) {
    if (g === undefined)
        return (g, x) => either(f, g, x);
    if (x === undefined)
        return (x) => either(f, g, x);
    return f(x) || g(x);
}
exports.either = either;
function not(f, x) {
    if (x === undefined)
        return (x) => not(f, x);
    return !f(x);
}
exports.not = not;
function or(a, b) {
    if (b === undefined)
        return (b) => or(a, b);
    return a || b;
}
exports.or = or;
function unless(pred, f, x) {
    if (f === undefined)
        return (f, x) => unless(pred, f, x);
    if (x === undefined)
        return (x) => unless(pred, f, x);
    return pred(x) ? x : f(x);
}
exports.unless = unless;
function when(pred, f, x) {
    if (f === undefined)
        return (f, x) => when(pred, f, x);
    if (x === undefined)
        return (x) => when(pred, f, x);
    return pred(x) ? f(x) : x;
}
exports.when = when;
function until(pred, f, x) {
    if (f === undefined)
        return (f, x) => until(pred, f, x);
    if (x === undefined)
        return (x) => until(pred, f, x);
    return pred(x) ? x : until(pred, f, f(x));
}
exports.until = until;
