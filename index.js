console.log("Hello World")
var a = 78
console.log(a)
a = "soumen"
console.log(a)

let b = "hi"
b = 5
{
    let b = 'Hello'
    console.log(b)
}
console.log(b)

// const x= "car"
// x= 56
// console.log(x)
let e = null;
let f = 657;
let g = true;
let h = BigInt("785") + BigInt("5")
let i = "Soumen"
let j = Symbol("Wow a nice symbol")
let k
console.log(a, b, e, f, g, h, i, j, k)
console.log(typeof i)
console.log(typeof h)

const item = {
    "Soumen": true,
    "Rajat": false,
    "ram": 56,
    "Shyam": undefined
}
console.log(item["ram"])

// 08/08.2023
// Create a variable of type string and try to add a number to it.
let str = "Soumen"
str += 5;
console.log(str)

// Use type of operator to find the datatype of the string 
let str2 = "OWL"
console.log(typeof str2)

// Create a constant object in js and try to assign number to it ,give resultant output.
const z = 9;
// z=15;
// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/home/runner/indexjs/index.js:49:2)
//     at Module._compile (node:internal/modules/cjs/loader:1159:14)

// Write a js program to create a word meaning dictionary of 5 words
let dict = {
    hi: "Hello",
    my: "Mine",
    "ten": 10,
    "me": 'Soumen',
    thanks: "Thank You",
    hundred: 100
};
console.log(dict.hi)
console.log(dict.my)
console.log(dict.ten)
console.log(dict.me)
console.log(dict.thanks)
console.log(dict.hundred)

//  - Q1
let x = "Harry"
let y = 6
console.log(x + y)

// - Q2
console.log(typeof (x + y))

// - Q3
const a1 = {
    name: "Harry",
    section: 1,
    isPrincipal: false
}

//  - Q4
a1.friend = "Shubham"
a1['name'] = "Lovish"
console.log(a1)

// - Q5
const dict2 = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    pretty: "Beautiful."
}


// 09/08/2023

// 1.Use logical operators to find whether the age of a person lies between 10 and 20.


// 2. Make a program using switch case
const m = parseFloat(prompt("Enter the value:"));
switch (m) {
    case 0:
        console.log("Zero");
        break;
    case 1:
        console.log("One");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    default:
        console.log("Its another number");
}
console.log(m)

// 3. Write a js program to find whether a no.is divisible by 2 and 3.
let number = parseFloat(prompt("Enter the number:"));
if (number % 2 === 0) {
    console.log('Divisible by 2')
}
else {
    console.log('Not divisible by 2')
}

if (number % 3 === 0) {
    console.log('Divisible by 3')
}
else {
    console.log('Not divisible by 3')
}

// 4. Write a js program to find whether a no.is divisible either by 2 or 3.

// 5. Print "you can vote" or "you can't vote" based on age being greater than 18 using ternary operator.
