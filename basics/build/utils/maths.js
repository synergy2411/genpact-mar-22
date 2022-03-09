"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.LUCKY_NUMBER = exports.getFortune = exports.mul = exports.sum = void 0;
const sum = (n1, n2) => n1 + n2;
exports.sum = sum;
const mul = (n1, n2) => n1 * n2;
exports.mul = mul;
function getFortune() {
    return "Today is your lucky day!";
}
exports.getFortune = getFortune;
exports.LUCKY_NUMBER = Math.round(Math.random() * 100);
class Student {
    constructor(studId, name) {
        this.studId = studId;
        this.name = name;
    }
    getDetails() {
        return `${this.studId} : ${this.name}`;
    }
}
exports.Student = Student;
