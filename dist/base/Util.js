"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eqBy = exports.eq = exports.isNil = void 0;
const isNil = (a) => a === undefined || a === null;
exports.isNil = isNil;
function eq(a, b) {
    if (b === undefined)
        return (b) => eq(a, b);
    return a === b;
}
exports.eq = eq;
function eqBy(f, a, b) {
    if (a === undefined)
        return (a, b) => eqBy(f, a, b);
    if (b === undefined)
        return (b) => eqBy(f, a, b);
    return eq(f(a), f(b));
}
exports.eqBy = eqBy;
