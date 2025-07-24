// this is non-singleton object 
        
// const tinderUser1 ={}
// console.log(tinderUser1)

//  this is singleton object
const tinderUser = new Object()  

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

const obj3 = (obj1, obj2)
console.log(obj3)