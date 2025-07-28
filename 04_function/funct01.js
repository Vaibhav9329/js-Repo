
// function syName(){  // --> function is define
//     console.log("H");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// }

// syName() //--> it used to call functions


function addTwoNum(no1, no2){
    // console.log(no1+no2);

    // let result = no1 + no2;
    // return result;

    return no1+no2;
    console.log("vaibhav")  //--> it not going to print because we are returning the statement above
}

const res = addTwoNum(2,5);

// console.log("result: ",res);


function loginUserMessage(username = "am"){
    if(!username){
        console.log("plz enter username")
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage())


function calculateCarPrice(val1, val2, ...no1){   //--->  (...no1) it is called rest operator.
    return no1   
}

// console.log(calculateCarPrice(200,400,500,600,700))

const user = {
    username : "vaibhav",
    prices : 999
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}

// handleObject(user);
// handleObject({
//     usrname:"sam",
//     price:499
// })

const mynewArray = [200,300,400,500,600]

function returSecondValue(getArray){
    return getArray[1]
}

console.log(returSecondValue(mynewArray))