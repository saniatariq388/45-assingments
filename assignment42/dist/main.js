"use strict";
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Harry Potter', 'Harmoine Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicians[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
make_great(magicians);
show_magicians(magicians);
