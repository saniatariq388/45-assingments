"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
const magicians = ['Harry Potter', 'Harmoine Granger', 'Ron Weasley', 'Albus Dumbledore'];
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
show_magicians(magicians);
