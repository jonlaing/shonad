"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeId = exports.getId = exports.Identity = void 0;
const Functor_1 = require("../control/Functor");
class Identity extends Functor_1.Functor {
    constructor() {
        super(...arguments);
        this.fmap = (f) => f(this.val);
    }
}
exports.Identity = Identity;
const getId = (i) => i.val;
exports.getId = getId;
const makeId = (a) => new Identity(a);
exports.makeId = makeId;
//# sourceMappingURL=Identity.js.map