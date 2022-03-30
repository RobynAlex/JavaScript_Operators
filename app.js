console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");

let a = 20;
let b = 4;

let add = a + b;

let minus = a - b;

let multiply = a * b;

let divide = a / b;

let exp = a ** b;

let mod = a % b;

console.log(
  `Add: ${add}, Minus: ${minus}, Multiply: ${multiply}, Divide: ${divide}, Exponent: ${exp}, Modulus: ${mod}`
);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

let x = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";


console.log(x + str);

console.log(x + str2);

console.log(x + isPresent);

console.log(x + firstName);

console.log(x + lastName);

//Bonus
console.log(isPresent + firstName);


// YOUR CODE HERE

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let y = 5;
let ctr = "5";
let ctr2 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

// What is the value of: y == ctr?
console.log(y == ctr);
// What is the value of: y === ctr?
console.log(y === ctr);
// What is the value of: !isPresent2?
console.log(!isPresent2);
// What is the value of: (“eleven” == ctr2 && a >= ctr)?
console.log("eleven" == ctr2 && y >= ctr);
// What is the value of: (!isPresent2 || isPresent2)?
console.log(!isPresent2 || isPresent2);
// What is the value of: 0 == false?
console.log(0 == false);
// What is the value of: 0 === false?
console.log(0 === false);
// What is the value of: 0 != false?
console.log(0 != false);
// What is the value of 0 !== false?
console.log(0 !== false);

//Bonus
console.log(isPresent2 + firstName2);
