"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Fn = __importStar(require("../../src/base/Function"));
describe("Function", () => {
    describe("compose", () => {
        it("composes two functions", () => {
            const f = (a) => a + 2;
            const g = (a) => a * 2;
            const comp = Fn.compose(f, g);
            expect(comp(7)).toEqual(f(g(7)));
        });
        it("composes three functions", () => {
            const f = (a) => a + 2;
            const g = (a) => a * 2;
            const h = (a) => a - 3;
            const comp = Fn.compose(f, g, h);
            expect(comp(7)).toEqual(f(g(h(7))));
        });
    });
    describe("pipe", () => {
        it("pipes two functions", () => {
            const f = (a) => a + 2;
            const g = (a) => a * 2;
            const pipe = Fn.pipe(f, g);
            expect(pipe(7)).toEqual(g(f(7)));
        });
        it("pipes three functions", () => {
            const f = (a) => a + 2;
            const g = (a) => a * 2;
            const h = (a) => a - 3;
            const pipe = Fn.pipe(f, g, h);
            expect(pipe(7)).toEqual(h(g(f(7))));
        });
    });
    describe("always", () => {
        const a = Fn.always(true);
        it("always returns value with no input", () => {
            expect(a()).toEqual(true);
        });
        it("always returns a value with one input", () => {
            expect(a(false)).toEqual(true);
            expect(a(true)).toEqual(true);
        });
    });
    describe("flip", () => {
        it("flips two parameters", () => {
            const f = (a, b) => a - b;
            const flip = Fn.flip(f);
            expect(flip(3, 7)).toEqual(f(7, 3));
        });
        it("flips only first two paramteers", () => {
            const f = (a, b, c) => a - b + c;
            const flip = Fn.flip(f);
            expect(flip(3, 7, 9)).toEqual(f(7, 3, 9));
        });
    });
    describe("curryN", () => {
        it("curries a funtion with three params", () => {
            const f = (a, b, c) => a + b + c;
            const f2 = Fn.curryN(3, f);
            expect(f2(1)(2)(3)).toEqual(f(1, 2, 3));
        });
        it("works with composition", () => {
            const f = (a, b) => a + b;
            const g = (a, b) => a * b;
            const f2 = Fn.curryN(2, f);
            const g2 = Fn.curryN(2, g);
            const comp = Fn.compose(f2(1), g2(2));
            expect(comp(3)).toEqual(f(1, g(2, 3)));
        });
    });
    describe("curry", () => {
        it("curries a funtion with three params", () => {
            const f = (a, b, c) => a + b + c;
            const f2 = Fn.curry(f);
            expect(f2(1)(2)(3)).toEqual(f(1, 2, 3));
        });
        it("works with composition", () => {
            const f = (a, b) => a + b;
            const g = (a, b) => a * b;
            const f2 = Fn.curry(f);
            const g2 = Fn.curry(g);
            const comp = Fn.compose(f2(1), g2(2));
            expect(comp(3)).toEqual(f(1, g(2, 3)));
        });
    });
});
