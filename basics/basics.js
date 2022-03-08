// - Arrow functions - short and clear way to write function syntax
//  - With {}
//  - Without {}

// function add(n1, n2){
//     return n1 + n2;
// }

// var sum = (n1, n2) => {
//     return n1 + n2
// }

// var sum = (n1, n2) => n1 + n2;
// console.log("Sum is : ", sum(4,3));


var numbers = [2,3,4,5];
// Map
// var newArray = numbers.map(function(val){
//     console.log("Value is ", val);
//     return val * 2;
// })
// console.log("New Array  : ", newArray);

// forEach
// numbers.forEach(function(value){
//     console.log("Value is ", value)
// })

// filter
// var filteredArray = numbers.filter(function(value){
//     return value < 5
// })
// console.log(filteredArray);

// find
// const foundItem = numbers.find(function(value){
//     return value === 4;
// })

// console.log(foundItem);

// findIndex
// var position = numbers.findIndex(function(val){
//     return val === 3
// })
// var position = numbers.findIndex(val => val === 3);
// console.log(position);

// console.log(4 == '4')           // true | checks value only
// console.log(4 === '4')           // false | checks value as well as type


// var flag = numbers.every(val => {
//     console.log(val > 4);           // [ false, false, false, true ]
//     return val > 4
// })

// console.log("Some Result - ", flag);

// for...of | forEach
// for(var val of numbers){console.log(val)}










//  - Destructuring : "unpacking" the collection (Array | Object)

// var fruits = ["apple", "banana", "guava", "kiwi"];

// var [f1, f2, f3, f4] = fruits;

// fruits[2] = "pineapple";

// console.log(f3);            // guava

// f3 = "oranges"

// console.log(fruits);         // guava

// unordered
// var box = {
//     width : 4,
//     height : 6,
//     length : 8
// }

// var {length : l, height : h, width : w} = box;

// console.log(l, h , w);

// w = 10;

// console.log(box);


// var user = {
//     firstName : "john",
//     lastName : "doe",
//     address : {
//         city : "Bengaluru",
//         street : "201, Main Road"
//     },
//     friends : ["jenny", "james"]
// }

// var {
//     firstName, lastName, address : { city, street }, friends : [f1, f2]
// } = user;

var users = [
    { email : "john@test.com", age : 32},
    { email : "jenny@test.com", age : 34},
    { email : "james@test.com", age : 36},
]

var [
    {email : e1, age : a1},
    {email : e2, age : a2},
    {email : e3, age : a3},
] = users;

console.log(e1, a1, e2, a2, e3, a3)




















//  - Rest / Spread Operators
//  - Template literals
//  - Block scoping
//  - Promise API
//  - Classes
//  - Module System
//  - Map/Set





















// // console.log("Start")

// // setTimeout(function(){
// //     console.log("Timer works")
// // }, 0)

// // console.log("End")

// // Start -> End - Timer works!

// // - Synchronous Code
// // - Asychronous Code