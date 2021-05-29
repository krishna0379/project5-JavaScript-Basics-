/**
 * paramters are not flexible>>!>> fixed inthe postion.
 * @param {*} username 
 * @param {*} email 
 * @param {*} mobile 
 * @param {*} password 
 */
function createEmployee( username, email, mobile, password){
    //logic.. we can right here
    console.log(`Username ${username}`);
    console.log(`Email ${email}`);
    console.log(`Mobile ${mobile}`);
    console.log(`Password ${password}`);
}

//calling the function 
createEmployee("sai@gmail.com", "2456575745","jajnduwh88Y", "SAI");
console.log("\n");
    

/**
 * paramter position is flexible with destrucutre.
 * @param {*} param0 
 */

function createEmployeeV1({ email, mobile, password, username}){
    //logic.. we can right here
    console.log(`Username ${username}`);
    console.log(`Email ${email}`);
    console.log(`Mobile ${mobile}`);
    console.log(`Password ${password}`);
}

//use case-1 
createEmployeeV1({username : 'sai'});
console.log("\n");


// Use Case 2
createEmployeeV1({ username: "kittu", password: "@#@#" });
console.log("\n");

// Use Case 3
createEmployeeV1({
  username: "sai",
  password: "@#@#",
  email: "sai9@gmail.com",
});
console.log("\n");

// Use Case 4
createEmployeeV1({
  username: "sai",
  password: "@#@#",
  email: "sai@gmail.com",
  mobile: "12456893",
});