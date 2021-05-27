function addition(n1, n2){
    return n1+n2;
}
let addition2=function(n1, n2){
    return n1+n2;
}

//lamda
//type-1
let addition3 =(n1, n2) =>{
    return n1+n2;
}

//type-2
let addition4 =(n1, n2) => n1 + n2;



let output1 = addition(30, 20);
let output2 = addition2(40, 20);
let output3 = addition3(50, 20);
let output4 = addition4(10, 20);

console.log(output1, output2, output3, output4);

