const sum = (n1 : number,n2 : number) => n1 + n2;
const mul = (n1 : number,n2 : number) => n1 * n2;

export {
    sum,
    mul
}

export function getFortune(){
    return "Today is your lucky day!";
}

export const LUCKY_NUMBER : number = Math.round(Math.random() * 100)

export class Student {
    constructor(private studId : string | number, private name : string){}
    getDetails(){
        return `${this.studId} : ${this.name}`;
    }
}