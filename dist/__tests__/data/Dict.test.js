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
const D = __importStar(require("../../src/data/Dict"));
const maybe = __importStar(require("../../src/data/Maybe"));
const N = __importStar(require("../../src/base/Number"));
const Fn = __importStar(require("../../src/base/Function"));
const Lg = __importStar(require("../../src/base/Logic"));
describe("Dict", () => {
    const dict = {
        a: 1,
        b: "b",
        c: true,
        d: [1, 2, 3],
    };
    describe("get", () => {
        it("gets field in just", () => {
            const v = maybe.fromMaybe(2, D.get("a", dict));
            expect(v).toBe(1);
        });
        it("returns nothing if no field", () => {
            const v = maybe.fromMaybe(2, D.get("z", dict));
            expect(v).toBe(2);
        });
    });
    describe("set", () => {
        it("sets new field in dict", () => {
            const d1 = D.set("e", 1, dict);
            const v = maybe.fromMaybe(2, D.get("e", d1));
            expect(v).toBe(1);
        });
        it("overrites old field", () => {
            const d1 = D.set("a", 2, dict);
            const v = maybe.fromMaybe(1, D.get("a", d1));
            expect(v).toBe(2);
        });
    });
    describe("unset", () => {
        it("removes field in dict", () => {
            const d1 = D.unset("a", dict);
            const v = maybe.fromMaybe(2, D.get("a", d1));
            expect(v).toBe(2);
        });
    });
    describe("eqProps", () => {
        it("returns true when props are equal", () => {
            expect(D.eqProps("a", dict, { a: 1 })).toBe(true);
        });
        it("returns false when props arent equal", () => {
            expect(D.eqProps("a", dict, { a: 2 }));
        });
    });
    describe("map", () => {
        it("maps over all properties", () => {
            const d = { a: 1, b: 2, c: 3 };
            expect(D.map(N.add(1), d)).toStrictEqual({ a: 2, b: 3, c: 4 });
        });
    });
    describe("mapi", () => {
        it("maps with key", () => {
            const d = { a: 1, b: 2, c: 3 };
            expect(D.mapi((v, k) => (k === "a" || k === "c" ? v + 1 : v), d)).toStrictEqual({ a: 2, b: 2, c: 4 });
        });
    });
    describe("evolve", () => {
        it("evolves fields", () => {
            const e = {
                a: N.add(1),
                b: Fn.always("c"),
                c: Lg.and(false),
            };
            const expected = {
                a: 2,
                b: "c",
                c: false,
                d: [1, 2, 3],
            };
            expect(D.evolve(e, dict)).toStrictEqual(expected);
        });
    });
    describe("has", () => {
        it("returns true if has key", () => {
            expect(D.has("a", dict)).toBe(true);
        });
        it("returns fals if doent have key", () => {
            expect(D.has("z", dict)).toBe(false);
        });
    });
});
