"use strict";
// let age = 32;
// age = 32;
// let username : string = "John Doe";
// username = "";
// let x : any = "String Value";
// x = 32;
// x = {}
// x = true;
// let x : unknown = 30;
// if(typeof(x) === 'number'){
//     let y : number = x;
// }
// let z : any = x;
// x = z;
// enum ROLES {
//     ADMIN,
//     EMPLOYEE,
//     CUSTOMER
// }
// let user : ROLES =  ROLES.ADMIN ;
// let usernames : Array<string> = ["John", "Jenny"]
// let usernames : string[] = ["John", "Jenny", 32]
// let grades : Array<number> = [23,34,45,""]
// tuple
// let user : [string, number, boolean] = ["John", 32, true];
// console.log(user)
// let str : string = "Some Value";
// console.log(str);
// Union type
// let nameOrAge : string = "John Doe"
// let age : string | number = 32
// age = "Thirty-Two";
// type keyword
// type MyType = {
//     id : string,
//     name : string,
//     dob : Date,
//     isAdmin : boolean
// }
// let user : MyType = {
//     id : "1001",
//     name : "John Doe",
//     dob : new Date("Dec 21, 1983"),
//     isAdmin : false
// }
// Generics : General types
// function addAtBeggening(numbers : Array<any> , val : any ) : Array<any>{
//     return [val, ...numbers];
// }
// let nums = [3,4,5,6];
// const newNumbers = addAtBeggening(nums, 10);
// console.log(newNumbers);
// let fruits : Array<string> = ["apple", "banana", "grapes"]
// const newFruits = addAtBeggening(fruits, "kiwi")
// console.log(newFruits);
// function addAtBeggening<T>(arr : Array<T>, val : T) : Array<T>{
//     return [val, ...arr]
// }
// let fruits = ["apple", "guava"]
// const strArray = addAtBeggening<string>(fruits, "kiwi")
// // strArray[0].
// let numbers = [3,4,5,6];
// const numArray = addAtBeggening<number>(numbers, 101)
// numArray[0].
// interface Person<T, U>{
//     id : T,
//     name : U
// }
// let user : Person<number, string> = {
//     id : 101,
//     name : "John Doe"
// }
// Class 
class Animal {
    // private legs : number;
    // private species : string;
    // constructor(legs : number, species : string){
    //     this.legs = legs;
    //     this.species = species;
    // }
    // Constructor injection
    constructor(legs, species) {
        this.legs = legs;
        this.species = species;
    }
    walk() {
        return `${this.species} can walk with ${this.legs} legs!!`;
    }
}
let bunny = new Animal(4, "Rabbit");
console.log(bunny.walk());
class Cat extends Animal {
    // constructor(legs : number, species : string, private name : string){
    //     super(legs, species);
    // }
    constructor(cat) {
        super(cat.legs, cat.species);
        this.cat = cat;
    }
    sayName() {
        return `${this.cat.name} can walk with ${super.walk()}`;
    }
}
let catObj = {
    legs: 4,
    name: "Kitty",
    species: "Tiger"
};
let kitty = new Cat(catObj);
console.log(kitty.walk());
