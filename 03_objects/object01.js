// singleton

// objects literals

const mykey = Symbol("key1")

const jsUser = {
    name : "vaibhav",
    "full name" : "vaibhav khot",
    [mykey] : "myskill",
    age : 16,
    location : "pune",
    email : "vaibhav@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["Monday","saturday"]
}

// console.log(jsUser["isLoggedIn"])
// console.log(jsUser["full name"])

// console.log(jsUser[mykey])

jsUser.email = "vai@gmail.com"

// console.log(jsUser)

// Object.freeze(jsUser)
// jsUser.ag= 20
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}

// console.log(jsUser.greeting())


jsUser.greetingtwo = function(){
    console.log(`hello js user, ${this.email}`);
}

// console.log(jsUser.greetingtwo())