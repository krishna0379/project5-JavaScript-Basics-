// JS everything is object.
let username = "rohit";
let counter = 100;

function addition1(n1, n2){
    return n1 + n2;
}

// the way string is object, and assign to a variable
// the way number is object, , and assign to a variable
// function is also a object; , and assign to a variable


// Annonymous function :: function with No Name
let addition2 = function(n1, n2){
    return n1 + n2;
}

let outtput1 = addition1(30, 70);
let output2 = addition2(50, 70); // calling annonymous function 

console.log(outtput1, output2)
