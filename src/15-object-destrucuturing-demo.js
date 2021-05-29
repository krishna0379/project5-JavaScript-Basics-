//declaring an object 
let saiRef = {
    id: 1,
    username: "sai",
    password: "@23#@#",
    email: "sai9@gmail.com",
    mobile: "78893748",
    address: {},
    city: "vizag",
    state: "ap",
    songList: [],
    movieList: [],
  };
  
  // Access the object member
  let username1 = saiRef.username;
  let password1 = saiRef.password;
  let email1 = saiRef.email;
  let mobile1 = saiRef.mobile;
  console.log(username1, password1, email1, mobile1 );
  
  // destructure concept
  let { username, email, mobile, password } = saiRef; // saiRef is an object, that is getting destructured!!!
  console.log(username, password, email, mobile);