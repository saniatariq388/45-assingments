

// Alein's color #3 Turn your if / else chain from exercise   into if /else chain

// Write three version of this program,making sure each message is printed for the appropriate alein color

//version 1 of the program

//If the alein is green, print the message that the player just earned 5 points.

console.log("**************************************");

let aleinColor :string = "Green";


if (aleinColor === "Green"){
    console.log("Version 1 : Player just earned 5 points.");
    
}else if(aleinColor ==="Yellow"){
    console.log("Player just earned 10 points.");
    
}else if(aleinColor === "Red"){
    console.log("Player just earned 15 points.");
    
}else{
    console.log("select correct color.");
    
}

console.log("**************************************");


//version 2 of the program

//If the alein is yellow, print the message that the player just earned 10 points.

aleinColor = "Yellow";

if (aleinColor === "Green"){
    console.log("Player just earned 5 points.");
    
}else if(aleinColor ==="Yellow"){
    console.log("Version 2 : Player just earned 10 points.");
    
}else if(aleinColor === "Red"){
    console.log("Player just earned 15 points.");
    
}else{
    console.log("select correct color.");
    
}

console.log("**************************************");

//version 3 of the program

//If the alein is RED, print the message that the player just earned 15 points.

aleinColor = "Red";

if (aleinColor === "Green"){
    console.log("Player just earned 5 points.");
    
}else if(aleinColor ==="Yellow"){
    console.log("Player just earned 10 points.");
    
}else if(aleinColor === "Red"){
    console.log("Version 3 : Player just earned 15 points.");
    
}else{
    console.log("select correct color.");
    
}

console.log("**************************************");