//  if :- 
// conditional statements is used with  conditional operators.
// < , > , <= , >= , == , != , === , !==  :-- conditional operators.

// const isUserLoggedIn = true;
// if(isUserLoggedIn){
//     // console.log("welcome")
// }

// if(2 == "2"){             // this operator is didn't check the data type for to check datatype we need to use  '==='  
//     console.log("executed")
// }


// if(2 === "2"){                  // this operator is used to stricty checking or we say to type checking. 
//     console.log("executed second");
// }

// if(2 !== "2"){
//     console.log("executed three")
// }

// const score = 200
// if(score > 100){
//     const pwr = "fly"
//     console.log(`user power: ${pwr}`)
// }
// console.log(`powerr is :${pwr}`)

// const balance = 3000

// // if(balance >1000) console.log("test")

// if(balance < 500){
//     console.log("less then")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 1000){
//     console.log("less then 1000")
// }
// else{
//     console.log("balance is: "+ balance)
// }

// const userLoggedIn = true;
// const debitcard = true;

// if(userLoggedIn && debitcard && 2==="2" ){
//     console.log("allow to if block if it is true")
// }
// else{
//     console.log("not allow in if block to enter so we executed else block")
// }

// ---------------------------- switch case --------------------------------


// switch (key) {    //---> default syntax universal language
//     case value: 
//         break;
//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("apr")
        break;

    default:
        console.log("dec")
        break;
}