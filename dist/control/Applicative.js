"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apply = exports.makeApplicative = exports.implementApplicativeClass = void 0;
const Functor_1 = require("./Functor");
const Typeclass_1 = require("../base/Typeclass");
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
function apply(f, x) {
    if (x === undefined)
        return (x) => apply(f, x);
    return implementations.get(x.__applicative).functions.apply(f, x);
}
exports.apply = apply;
