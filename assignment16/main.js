"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ['Shumaila', 'Hafsa', 'Saba', 'Hajra'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
// }
let absent_Guest = "Saba";
let new_Guest = "muniba";
guest_list[2] = new_Guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(`${absent_Guest} is not coming to the party.`);
console.log(`Good News! we find big table so we are inviting 3 more guest in the party.`);
guest_list.unshift(`mahneera`);
guest_list.splice(2, 0, `maham`);
guest_list.push(`erum`);
console.log(guest_list);
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
