

let guest_list :string[]=['Shumaila','Hafsa','Saba','Hajra'];

for(let i=0; i<guest_list.length; i++){

    console.log('Dear ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}

let absent_Guest:string = "Saba";

let new_Guest:string = "muniba";

guest_list[2] = new_Guest;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}


console.log(`${absent_Guest} is not coming to the party.`);
