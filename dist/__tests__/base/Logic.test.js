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
const Lg = __importStar(require("../../src/base/Logic"));
const Fn = __importStar(require("../../src/base/Function"));
const Util = __importStar(require("../../src/base/Util"));
const N = __importStar(require("../../src/base/Number"));
describe("Logic", () => {
    describe("allPass", () => {
        it("returns true for one item", () => {
            expect(Lg.allPass([(x) => x !== undefined], 1)).toBe(true);
        });
        it("returns false for one item", () => {
            expect(Lg.allPass([(x) => x === undefined], 1)).toBe(false);
        });
        it("returns true for all true items", () => {
            const eq5 = Util.eq(5);
            const not5 = Lg.not(eq5);
            expect(Lg.allPass([Util.eq(4), not5], 4)).toBe(true);
        });
        it("returns false for only one false statement", () => {
            expect(Lg.allPass([Util.eq(4), Util.eq(5), Util.eqBy((x) => x % 2 === 0, 2)], 4)).toBe(false);
        });
    });
    describe("and", () => {
        it("returns true for two trues", () => {
            expect(Lg.and(true, true)).toBe(true);
        });
        it("returns false for two falses", () => {
            expect(Lg.and(false, false)).toBe(false);
        });
        it("returns false for both", () => {
            expect(Lg.and(true, false)).toBe(false);
        });
    });
    describe("anyPass", () => {
        it("returns true for one item", () => {
            expect(Lg.anyPass([(x) => x !== undefined], 1)).toBe(true);
        });
        it("returns false for one item", () => {
            expect(Lg.anyPass([(x) => x === undefined], 1)).toBe(false);
        });
        it("returns false for all false items", () => {
            expect(Lg.anyPass([Util.eq(4), Lg.not(Util.eq(5))], 5)).toBe(false);
        });
        it("returns true for only one true statement", () => {
            expect(Lg.anyPass([Util.eq(4), Util.eq(5), Util.eq(6)], 4)).toBe(true);
        });
    });
    describe("both", () => {
        it("returns true for both true", () => {
            expect(Lg.both(Util.eq(2), Util.eqBy((x) => x % 2 === 0, 4), 2)).toBe(true);
        });
        it("returns false for one false", () => {
            expect(Lg.both(Util.eq(2), Util.eqBy((x) => x % 2 === 0, 4), 4)).toBe(false);
        });
        it("returns false for all false", () => {
            expect(Lg.both(Util.eq(2), Util.eqBy((x) => x % 2 === 0, 4), 7)).toBe(false);
        });
    });
    describe("either", () => {
        it("returns true for both true", () => {
            expect(Lg.either(Util.eq(2), Util.eqBy((x) => x % 2 === 0, 4), 2)).toBe(true);
        });
        it("returns true for one false", () => {
            expect(Lg.either(Util.eq(2), Util.eqBy((x) => x % 2 === 0, 4), 4)).toBe(true);
        });
        it("returns false for all false", () => {
            expect(Lg.either(Util.eq(2), Util.eqBy((x) => x % 2 === 0, 4), 7)).toBe(false);
        });
    });
    describe("not", () => {
        it("returns true for false", () => {
            expect(Lg.not(Util.eq(2), 3)).toBe(true);
        });
        it("returns false for true", () => {
            expect(Lg.not(Util.eq(2), 2)).toBe(false);
        });
    });
    describe("or", () => {
        it("returns true for either", () => {
            expect(Lg.or(true, false)).toBe(true);
            expect(Lg.or(false, true)).toBe(true);
        });
        it("returns false for both false", () => {
            expect(Lg.or(false, false)).toBe(false);
        });
    });
    describe("unless", () => {
        it("applies function on false", () => {
            expect(Lg.unless(Fn.always(false), N.add(1), 1)).toBe(2);
        });
        it("does not apply function when true", () => {
            expect(Lg.unless(Fn.always(true), N.add(1), 1)).toBe(1);
        });
    });
    describe("when", () => {
        it("applies function on true", () => {
            expect(Lg.when(Fn.always(true), N.add(1), 1)).toBe(2);
        });
        it("does not apply function when false", () => {
            expect(Lg.when(Fn.always(false), N.add(1), 1)).toBe(1);
        });
    });
    describe("until", () => {
        it("applies function until true", () => {
            expect(Lg.until(N.lt(4), N.add(1), 1)).toEqual(5);
        });
    });
});
