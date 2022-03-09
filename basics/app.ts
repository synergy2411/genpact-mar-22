// Named import
import { sum, mul, getFortune, LUCKY_NUMBER, Student } from './utils/maths';

// Default import
import getMyFortuneToday, { getLuckyCard } from './utils/fortune';

console.log("Sum is : ", sum(2,4));

console.log("My Fortune Today : ", getFortune())

console.log("My lucky Number today : ", LUCKY_NUMBER);

let johnDoe = new Student("s0001", "John Doe");
console.log(johnDoe.getDetails());

console.log(getMyFortuneToday());