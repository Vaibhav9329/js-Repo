"use strict";
const { use } = require("react");

  // treat all js code newer version

// alert(3+3)  //we are using nodejs, not browser

// console.log(3+3);
// // code readibality should be high
// console.log("vaibhav")

let name = "vaibhav"  
let age = 20
let isLoggedIn = false
let state =""
let city = null

// number => 2 to pwr 53
// bigint =>  used in big numbers
// String => ""
// bollean => true/false
// null => standalone value / also it is abject
// undefined => value that unsigned
// symbol => unique


// object

// console.log(typeof null)


// ------------------------------------------------------------


// stack (primitive), heap(Non-primitive)
let mytube = "vaibhaKhotdotcom"
let anothername = mytube
anothername = "khotvaibhav"

console.log(mytube)
console.log(anothername)

let user = {
    email :"user@google.com",
    pas: "12346565"
}

let usertwo = user;

usertwo.email = "vaibhav@google.com" 
console.log(user.email)
console.log(usertwo.email)