"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['Shumaila', 'Hafsa', 'Saba', 'Hajra'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absent_Guest = "Saba";
let new_Guest = "muniba";
guest_list[2] = new_Guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
console.log(`${absent_Guest} is not coming to the party.`);
console.log(`Good News! we find big table so we are inviting 3 more guest in the party.`);
guest_list.unshift(`mahneera`); //add element in the starting of array
guest_list.splice(2, 0, `maham`); //first mention index no, then if delete any index after it ,then new element provide
guest_list.push(`erum`); //add element in the last of array
console.log(guest_list);
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(`\nSorry! we can nat arrange big Table, so only Two people will be invited. `);
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry! ${remove_guest}, you are not invited for dinner. `);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + ',\n\nYou are still invited.\n\nThank you!\n\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
