"use strict";
//  Favorite fruit : Make a array of your favorite fruits and then write a series of independent if statements that check for certain fruits in your array.
//make a array of your three favorite fruits  and call it favorite_ fruits.
Object.defineProperty(exports, "__esModule", { value: true });
//write five if statements. Each should check wheather a certain kind of fruit  is in your array. if the fruit is in your array, the if block should print a  statement,such as you really like  bananas!
let favorite_fruits = ["banana", "apple", "grapes"];
if (favorite_fruits.includes("banana")) {
    console.log("I really like banana!");
}
if (favorite_fruits.includes("apple")) {
    console.log("I really like apple!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("I really like grapes!");
}
if (favorite_fruits.includes("watermelon")) {
    console.log("I really like watermelon!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("I really like strawberry!");
}
