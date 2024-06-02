"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
Object.defineProperty(exports, "__esModule", { value: true });
// Call the function.
function make_shirt(size, text) {
    console.log(`Creating a ${size} shirt with the message : ${text}. `);
}
make_shirt(`large`, `Rock N Roll`);
make_shirt(`medium`, `Rock N Roll`);
make_shirt(`small`, `Rock N Roll`);
