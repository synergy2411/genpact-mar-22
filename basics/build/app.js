"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Named import
const maths_1 = require("./utils/maths");
// Default import
const fortune_1 = __importDefault(require("./utils/fortune"));
console.log("Sum is : ", (0, maths_1.sum)(2, 4));
console.log("My Fortune Today : ", (0, maths_1.getFortune)());
console.log("My lucky Number today : ", maths_1.LUCKY_NUMBER);
let johnDoe = new maths_1.Student("s0001", "John Doe");
console.log(johnDoe.getDetails());
console.log((0, fortune_1.default)());
