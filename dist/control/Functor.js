"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fmap = exports.makeFunctor = exports.implementFunctorClass = void 0;
const Typeclass_1 = require("../base/Typeclass");
const implementations = new Typeclass_1.Implementations();
const implementFunctorClass = (name, fmap) => {
    const _class = {
        functions: {
            fmap,
        },
    };
    implementations.add(name, _class);
};
exports.implementFunctorClass = implementFunctorClass;
const makeFunctor = (name, x) => {
    return Object.assign(Object.assign({}, x), { __functor: name });
};
exports.makeFunctor = makeFunctor;
function fmap(f, x) {
    if (x === undefined) {
        return (x0) => fmap(f, x0);
    }
    return implementations.get(x.__functor).functions.fmap(f, x);
}
exports.fmap = fmap;
