"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Implementations = void 0;
class Implementations {
    constructor() {
        this.list = {};
    }
    add(name, val) {
        this.list = Object.assign(Object.assign({}, this.list), { [name]: val });
    }
    get(name) {
        return this.list[name];
    }
    remove(name) {
        delete this.list[name];
    }
}
exports.Implementations = Implementations;
//# sourceMappingURL=Typeclass.js.map