{   }  // --> it called scope it come with function , it comes with decision making statements , loops

var c =300
let a = 400

if(true){    // --> block scope

let a = 10
const b =20
 c =30
//  console.log( "Inner block scope : ", a)

}


// console.log(a);
// console.log(b);
// console.log(c);

// ---------------- nested scope ----------------------

function one(){
    const username = "vaibhav"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);  
    two()
}

// one()

if(true){
    const username = "vaibhavkhot"
    if(username == "vaibhavkhot"){
        const website = "youtube"
        // console.log(username+website);
    }

    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++


console.log(addone(5))
function  addone(num){    // --> it's called function only
    return num +1
}


addTwo(4)
const addTwo = function(num){   //--> it's called expression (function)
    return num +2
}



