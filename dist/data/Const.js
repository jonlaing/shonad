"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeConst = exports.getConst = exports.fmap = exports.Const = void 0;
const Functor_1 = require("../control/Functor");
class Const extends Functor_1.Functor {
    constructor() {
        super(...arguments);
        this.fmap = (f) => this;
    }
}
exports.Const = Const;
exports.fmap = Const.fmap;
const getConst = (c) => c.val;
exports.getConst = getConst;
const makeConst = (a) => new Const(a);
exports.makeConst = makeConst;
//# sourceMappingURL=Const.js.map