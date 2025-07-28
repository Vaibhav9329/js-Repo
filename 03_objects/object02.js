const tinderUser1 ={}  // --> this is non-singleton object 

const tinderUser = new Object()  // -->  this is singleton object

tinderUser.id = "1234"
tinderUser.name = "ommy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "ommy@gmail.com",
    fullname : {
            Userfullname :{
                firstname : "vaibhav",
                lastname : "khot"
            },
            UserEmail :{
                email : "vai@gamil.com",
                email1 : "vaibhav@gmail.com"
            },
            phoneNum : {
                ph1 : 1234567889,
                ph2 : 9876554432
            }
    }
}

// console.log(regularUser.fullname.Userfullname)
// console.log(regularUser.fullname.phoneNum)
// console.log(regularUser)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2,obj4)


// const obj3 = {...obj1, ...obj2}

const users = [
    {
        id:1,
        email:"va@gmai.com"
    },
     {
        id:1,
        email:"va@gmai.com"
    },
     {
        id:1,
        email:"va@gmai.com"
    }
]

users[1].email
console.log(tinderUser)

 console.log(Object.keys(tinderUser))
 console.log(Object.values(tinderUser))
 console.log(Object.entries(tinderUser))

 console.log(tinderUser.hasOwnProperty('isLoggedin'))