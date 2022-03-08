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

// var users = [
//     { email : "john@test.com", age : 32},
//     { email : "jenny@test.com", age : 34},
//     { email : "james@test.com", age : 36},
// ]

// var [
//     {email : e1, age : a1},
//     {email : e2, age : a2},
//     {email : e3, age : a3},
// ] = users;

// console.log(e1, a1, e2, a2, e3, a3)




















//  - Rest / Spread Operators (...)
//  - Rest -> creates the collection from individual items; last parameter in function argument list
//  - Spread -> splits the collection into individual items; works with collection

// Collection -> Array [] || Object {}

// let utils = {
//     add : (n1, n2) => n1 + n2,
//     mul : (n1, n2) => n1 * n2,
//     square : val => val & val
// }

// let mathUtil = {
//     ...utils,               // {add , mul , square}
//     div : (n1, n2) => n1 / n2
// }

// console.log( "Sum : ", mathUtil.add(2,4))

// let fruits = ["apple", "banana"]

// let extendedFruits = [...fruits, "kiwi", "guava"]

// console.log(extendedFruits);



// function demo(...emails){
//     console.log(emails);
// }

// demo("foo@test.com", "bar@test.com", "bam@test.com")



// function mathUtil(sum, mul, square){
//     console.log("Sum  : ", sum(2,4));
// }


// mathUtil(...utils)









// var coll = [3,4,5];

// var newCollOne = [1,2, ...coll, 6,7,8];    // 3
// var newCollTwo = [1,2, coll, 6,7,8];

// console.log(newCollOne);        // [3,4,5]
// console.log(newCollTwo);        // [3,4,5]


// var userOne = {
//     name : "John",
//     isAdmin : true,
//     dob : new Date("Dec 21, 1993")
// }

// var userTwo = {
//     ...userOne,         // {name , isAdmin, dob}
//     name : "Jenny",
//     isAdmin : false
// }

// console.log(userTwo);           // {name : "Jenny", isAdmin : true, dob : ""}




// var userOne = { name : "Foo" }          // xxx0o9xix8 -> {name : "Foo"}

// var userTwo = userOne;                  // xxx0o9xix8 -> {name : "Foo"}

// userTwo.name = "Bar";

// console.log(userOne);       // "Bar"



// var books = ["book1", "book2", "book3"]

// // Immutable
// var myBooks = [...books];

// myBooks.push("book4");

// console.log(myBooks);           // ?

// console.log(books.length);          // ?


// var myBooks = books;

// myBooks.push("book4");

// console.log(books.length);          // 4


// function display(email, age, ...args){
//     console.log(args[0]);           // true
// }

// display("email@test.com")
// display("email@test.com", 32)
// display("email@test.com", 32, true)




















//  - Template literals :  " " || ' ' || ` ` (back tick) ${}
// - Embed the variables within string without ( + ) using ${}
// - Mutli-line string without the need of (\n)

// var username = "John Doe";
// var age = 32;

// var str = `Hello from ${username},
// I'm ${age} years old.
// `

// console.log(str);














//  - Block scoping : restricting the scope of variable to the nearest block (if, for else etc)
// - let : other types
// - const : to create constants


// Creational -> LOAD = FLASH = undefined;
// Executional -> FLASH = undefined

// function demo(arr){
//     if(arr.length > 2){
//         let LOAD = "LOADING"
//         console.log(FLASH);             // "undefined" | ReferenceError : not defined
//     }else{
//         let FLASH = "FLASHING"
//     }
// }

// demo([2,3,4,5])


// const USERNAME = "John Doe";

// USERNAME = "Jenny Doe";


// const user = Object.freeze({                      // xxx0xx9xi8x ---> {name : "John Doe"}
//     name : "John Doe"
// })

// user = {
//     name : "James Doe"
// }

// user.name = "Jenny Doe";            //  xxx0xx9xi8x ---> {name : "Jenny Doe"}

// console.log(user);          //  { name : "Jenny Doe"}






//  - Map/Set : 
// Map - Store the data as key-value pair
// Set - Store unique value

// let user = {
//     name : "John Doe",
//     age : 32,
//     {name : "john"} : true
// }

// let user = {
//     name : "Jenny Doe"
// }
// let map = new Map()

// map.set("name", "Jenny Doe")
// map.set(user, true)
// map.set(true, 1)
// map.set(new Date("Dec 21, 1983"), "Date of Birth")

// console.log(map.get(user))

// for(let keys of map.values()){
//     console.log(keys);
// }


// for(let key of user){
//     console.log(key)
// }



// let set = new Set();

// set.add("John")
// set.add("Jenny")
// set.add("John")
// set.add("James")

// console.log(set.size);
















//  - Promise API : way to consume async code
//  - State : Pending, Resolved, Rejected
//  - Result : "undefined", Response, Error

// - Producer Code : producer the promise data
// - Consumer Code : consume thee data emitted by promise API 
    // - .then().catch()
    // - Async...await

// console.log("Start")
// setTimeout(() => {
//     // Make Remote Server call and return some data
//     console.log("Timer works")
// }, 3000);
// console.log("End")


// Start -> End -> Timer Works

// Start -> Timer Work -> End


// Promise Producer Code
// function demoPromise(ms){
//     const promise = new Promise((resolve, reject)=>{
//         if(ms < 3000){
//             setTimeout(() => {
//                 resolve({message : "SUCCESS"})
//             }, ms)
//         }else{
//             reject(new Error("Waiting too long..."))
//         }
//     });
//     return promise;
// }

// Consumer Code

// const consumePromise = async () => {
//     try{
//         let result = await demoPromise(3500)
//         console.log("RESULT -> ", result);
//     }catch(err){
//         console.log("ERROR -> ", err)
//     }
// }

// function consumePromise(){

//     demoPromise(3500)
//         .then(response => console.log("RESPONSE -> ", response))
//         .catch(err => console.log("ERROR -> ", err))

//     // console.log("Start")
//     // demoPromise().then(response => {
//     //     console.log("Promise Data - ", response);
//     //     console.log("End")
//     // }).catch(error => console.log("ERROR ---> ", error))
// }


// consumePromise();













//  - Classes

// class Student {
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     sayHello () {
//         return `Hello from ${this.firstName} ${this.lastName};`
//     }
// }

// let foo = new Student("Foo", "Bar");
// console.log(foo.sayHello())


// let user = {
//     name : "John Doe",
//     sayHi(){
//         return `Hi from ${this.name}`
//     }
// }

// user.isAdmin = true;

// console.log(user.sayHi())





let age = "Twenty-Two";
console.log(typeof(age));

age = 32;
console.log(typeof(age));

age = true;
age = {}
age = function(){}












//  - Module System





















// // console.log("Start")

// // setTimeout(function(){
// //     console.log("Timer works")
// // }, 0)

// // console.log("End")

// // Start -> End - Timer works!

// // - Synchronous Code
// // - Asychronous Code