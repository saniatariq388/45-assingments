"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Harry Potter', 'Harmoine Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magicians);
make_great(copyMagicianArray);
console.log('This is my original array.');
show_magicians(magicians);
console.log(`******************************************`);
console.log('This is my modified copy of the  array.');
show_magicians(copyMagicianArray);
