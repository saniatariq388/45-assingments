"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Equality and Inequality Test 1
console.log('Equality test with string : ', 'Apple === Apple');
// Equality and Inequality Test 2
console.log('Inequality test with string : ', 'Apple' != 'orange');
// Test using lower case function
console.log("Lower case function test : ", "HELLO".toLowerCase() === "hello");
// Numerical test involving equality 
console.log('Equality test with numbers : ', 26 === 26);
// Numerical test involving inequality
console.log('Inequality test with numbers : ', 26 != 36);
// Greater than 
console.log("Greater than test : ", 10 > 7);
// Less  than
console.log(" Less than test : ", 1 < 6);
//Greater than  or equal to
console.log("Greater than or equqi to : ", 11 >= 11);
// Less than or equal to
console.log("Less than or equal to : ", 55 <= 78);
// Test using "and" operator
console.log("Test using And operator : ", 40 === 40 && 10 > 5);
// Test using "OR" operator
console.log("Test using OR operator : ", 40 === 40 || false);
// test  weather an item is in  a array
const fruit = ["Banana", "Apple", "Water melon", "Grapes"];
console.log("Test 'Apple' is in the array :", fruit.includes("Apple"));
// test  weather an item is not in  a array
console.log("Test 'Pine apple' is not in the array :", !fruit.includes("Pine apple"));
