// 1. Write a program to convert a given string to lowercase
let text = prompt("Write your name in uppercase:-  ")
let lower = text. toLowerCase();
console.log("Your name in Uppercase:- "+text)
console.log("Your name in Lowercase:- "+lower)

// 2. Extract the amount out of this string:
// " I have Rs.2000 only"
let str1 = " I have Rs 2000 only";
let number2 = str1.match('/\d+/');
let result = str.replace(/[^0-9]/g,"")
console.log(number2)
console.log(result)