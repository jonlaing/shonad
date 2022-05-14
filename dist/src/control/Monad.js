"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bind = exports.makeMonad = exports.implementMonadClass = void 0;
const Applicative_1 = require("./Applicative");
const Typeclass_1 = require("../base/Typeclass");
const implementations = new Typeclass_1.Implementations();
const implementMonadClass = (name, { fmap, pure, apply, return: return_, bind, }) => {
    const _class = {
        functions: {
            return: return_ || pure,
            bind,
        },
    };
    implementations.add(name, _class);
    (0, Applicative_1.implementApplicativeClass)(name, {
        fmap: fmap,
        pure,
        apply,
    });
};
exports.implementMonadClass = implementMonadClass;
const makeMonad = (name, x) => {
    return Object.assign(Object.assign({}, x), { __monad: name, __applicative: name, __functor: name });
};
exports.makeMonad = makeMonad;
function bind(x, f) {
    if (f === undefined) {
        return (f) => bind(x, f);
    }
    return implementations.get(x.__monad).functions.bind(x, f);
}
exports.bind = bind;
