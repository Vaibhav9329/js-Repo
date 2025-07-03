//--------- javaScript is Dynamically type  --------

// ------------ primitive ---------------

// total 7 => String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anid = Symbol('123')

console.log(id === anid)

// const bigNumber = 232443324323223432324552n

// ------------------- Reference type (Non - primitive) --------------

// Arrays, Objects, Functions 

const heros = ["shaktiman", "naagraj","doga"]
let myobj = {
    name:"vaibhav",
    age : 22
}

const myfunction= function(){
    console.log("hello world");
}

console.log(myfunction)
console.log(typeof heros)