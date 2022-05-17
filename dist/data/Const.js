"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeConst = exports.unwrap = exports.fmap = exports.Const = void 0;
const Functor_1 = require("../control/Functor");
class Const extends Functor_1.Functor {
    constructor() {
        super(...arguments);
        this.fmap = (f) => this;
        this.unwrap = (fallback) => this.val;
    }
}
exports.Const = Const;
exports.fmap = Const.fmap;
const unwrap = (fallback, c) => c.val;
exports.unwrap = unwrap;
const makeConst = (a) => new Const(a);
exports.makeConst = makeConst;
//# sourceMappingURL=Const.js.map