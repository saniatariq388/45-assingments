"use strict";
// Stages of life: Write if else chain that detrmines a person's stage of  life
Object.defineProperty(exports, "__esModule", { value: true });
// Set the value for the variable of age , and then:
let age = 25;
//. if the person's age is less than 2  years old , print the message that person is a baby.
// if the person's age is at least 2 years old but less than 4 , print the message that the person is a toddler.
// if the person's age is at least 4 years old but less than 13 , print the message that the person is a kid.
// if the person's age is at least 13 years old but less then 20 , print the message that the person is a teenager.
// if the person's age is at least 20 but less then 65 , print the message that the person is a adult.
// if person's age is at least 65 years or older, print the message 6that the person is a elder.
if (age < 2) {
    console.log("Person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("Person is a toddler. ");
}
else if (age >= 4 && age < 13) {
    console.log("Person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("Person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("Person is a adult.");
}
else {
    console.log("Person is a elder.");
}
