// ---------------- array specific loops -----------------
// for of loop:-

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const element of arr) {  // for of loop
    // console.log(element)
}

const greet = "hello goodmorning"
for (const element of greet) {
    // console.log(`Each char is ${element}`)
}


// Map :- 
const map = new Map()

map.set('In',"india")
map.set('usa',"USA")
map.set('fa',"france")
map.set("In","india")

// console.log(map)

for (const [key, value ]of map) {      // ---> for of loop
    // console.log(key)
    // console.log(value)
}

const myobj = {
    js: 'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myobj) {              //---> for in loop
    // console.log(`${key} shortcuts is for${myobj}`)
}

const program = ["js","rb","py","java","cpp"];
for(const key in program ){
    // console.log(key)
    // console.log(program[key])
}

// program.forEach( function(item) {    //---> forEach loop
//     console.log(item)
// })

// program.forEach((item) =>{
//     console.log(item)
// })

// function print(item){
//     console.log(item)
// }

// program.forEach(print)

// program.forEach((item,index,arr) => {
//     console.log(item,index,arr)
// })

const mycode = [
    {
        langname : "js",
        langFile : "JavaScript"
    },
     {
        langname : "py",
        langFile : "Python"
    },
     {
        langname : "java",
        langFile : "Java"
    }
]

mycode.forEach((item,index)=> {
    console.log(item.langname,index)
})