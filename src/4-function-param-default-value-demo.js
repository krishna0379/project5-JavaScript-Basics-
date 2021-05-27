/**
 * This method also works as Overloaded method.
 * Function Parameter with Default Value
 */
 function addition(p1=0, p2=0) {
    return p1 + p2;
}

let output1 = addition();
let output2 = addition(40)
let output3 = addition(20, 90);
let output4 = addition(60, 50, 30);


console.log(output1, output2, output3, output4);