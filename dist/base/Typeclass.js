"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Implementations = void 0;
class Implementations {
    constructor() {
        this.list = {};
    }
    add(name, val) {
        this.list = Object.assign(Object.assign({}, this.list), { [name]: val });
        console.log(this.list);
    }
    get(name) {
        const r = this.list[name];
        return r;
    }
    remove(name) {
        delete this.list[name];
    }
}
exports.Implementations = Implementations;
