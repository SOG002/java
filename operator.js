//Arithmetic operators
//1, additions
let sum = 5+3;
console.log(sum);

// 2, subtractions
let difference = 10-4;
console.log(difference);

// 3, multiplication
let product = 7* 2;
console.log(product);

// 4, division 
let quotient = 20/ 5;
console.log(quotient);

// 5, remainder
let remainder = 10 % 3;
console.log(remainder);

// 6 power
let power =2**10;
console.log(power);

// Assignment operators
// 1, Assignment
let x =5;
console.log(x);

// 2, addition Assignment
let y = 5;
y +=2;
console.log(y);

// 3, subtraction Assignment
let z=10;
z-= 2;
console.log(z);

// 3. Logical operators
// AND (&&): return true if both operands are true.
let isTrue = (5>3 && 3> 5);
// or (||): Return true bif at lrast one operan is true:
let isTrue2 = ( 5 > 3 || 3 > 5); // true
// NOT (!): Return true are if the operand is false



// control structures
// 1. conditional statements

// if statement: Executes a block of code if a specified condition is true.
let a = 4;
if (a > 0) {
    console.log('a positive');
}
 // if ... else statement : Executes a block of code if a specified condition is true, otherwiswe
// another block is executed .
if (a > 0) {
    console.log('a is positive');  
}  else {
    console.log('a is negative');
}

//else if statement : Adds a new condition to test if the first condition is false

if (a > 0) {
    console.log('a is positive');  
} else if (a == 0){
    console.log('a is not positive');
} else {
    console.log('a is negative');
}

let tempprature = 15; 
if (tempprature > 25) {
    console.log("it's a cold day!")
}else {
    console.log("it's a warm day")
}

let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("it's a banana");
        break;
    case "apple":
        console.log("it's an apple");
        break;
    case "orange":
        console.log("it's an orange");
        break;
    default:
        console.log("unknown fruit");         
}  

const value =  'apple';
 const fruits = ['apple', 'banana', 'orange'];

 switch (true) {
    case fruits.includes(value):
       console.log(`${value} is  in the fruits array`);
       break;
       default:
        console.log(`${value} is not in the fruit array`);
 }