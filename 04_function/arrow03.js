const user = {
    username : "vaibhav",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username}, Welcome to website`);
        // console.log(`${this.price}, the price is to low`);
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)


// function chai(){
//     console.log(this);
// }
// chai()


// const chai = function(){         //--> normal functions
//     let username = "vaibhav"
//     console.log(this.username);
// }



// const chai = () => {             // --> Arrow functions
//     let username = "vaibhav"
//     console.log(this);
// }

// chai()


// const addTwo  = (no1,no2) => no1 + no2; // --> without return statement values get returned.

// const addTwo  = (no1,no2) => (no1 + no2); //--> if you use parenthsis then also return values without return statement.

// const addTwo  = (no1,no2) => {  //--> if you use Curly bracsis then we want to use return statement to return value.
//     return no1 + no2;
// }
// console.log(addTwo(3,2))


const  addTwo = (no1 , no2) => ({username : "vaibhav"})  //--> if you want to return object then we should use Parenthsis to the object as shown in example.

console.log(addTwo(3,2)); 