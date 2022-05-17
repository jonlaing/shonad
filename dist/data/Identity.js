"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeId = exports.unwrap = exports.Identity = void 0;
const Functor_1 = require("../control/Functor");
class Identity extends Functor_1.Functor {
    constructor() {
        super(...arguments);
        this.fmap = (f) => f(this.val);
        this.unwrap = (fallback) => this.val;
    }
}
exports.Identity = Identity;
const unwrap = (fallback, i) => i.unwrap(fallback);
exports.unwrap = unwrap;
const makeId = (a) => new Identity(a);
exports.makeId = makeId;
//# sourceMappingURL=Identity.js.map