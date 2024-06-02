
//store the places in an array. Make sure array is not in alphabatical order.

import { log } from "console";

let places :string[] = [`Germany`,`Efeill Tower` , `Agra`,`Times Square`,`Italy`];

//print the array in the original order
console.log(`original ` + places);

//print your array in the alphabatical order without modifing  actual list.
console.log(`copy ` + [...places].sort()); //(...)dots make  copy of array.

//show that your array is still in its original order by printinting it.
console.log(`original ` + places);

//print your array in rverse alphabatical order without changing the order of theorigininal list.
console.log(`copy ` +[...places].sort().reverse());

//show that your array is still in its original order by printinting it again.
console.log(`original ` + places);

//reverse the order of your list,print the array to show that its order has changed.
console.log(`original ` + places.reverse());

//reverse the order of your list again.Print the list to show it's back to it's original order.
console.log(`original ` + places.reverse());

//sort your array so it's stored alphabatical order. Print the array to show thatit's order has been changed.
console.log(`original ` + places.sort());

//sort to change your array so it's stored in reverse alphabatical order. Print the list to show that it's order has changed.
console.log(`original ` + places.sort().reverse());
