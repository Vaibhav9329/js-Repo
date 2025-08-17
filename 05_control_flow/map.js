//-----------------Map in js -------------------------

const mynum = [1,2,3,4,5,6,7,8,9]

// const newnum = mynum.map((num)=> num+10)


const newNum = mynum
                    .map((num) => num*10)
                    .map((num) => num+1)
                    .filter((num)=>num>40)
// console.log(newNum)

// -------------------------------Reduce in js --------------------------

const arr = [1,2,3,4,5]

const initalvalue =0
const sumwithinitalvalue = arr.reduce(function(acc,currval) {
    // console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
},0)
// console.log(sumwithinitalvalue)

const sumvalue = arr.reduce((acc,curr)=>(acc+curr),0)
// console.log(sumvalue)

const shoppingCart = [
    {
        itemname : "js",
        price : 2999
    },
     {
        itemname : "java",
        price : 12999
    },
     {
        itemname : "flutter",
        price : 4999
    },
     {
        itemname : "py",
        price : 3999
    }
]

const priceTopay = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(priceTopay)