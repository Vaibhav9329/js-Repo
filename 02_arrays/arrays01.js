// arrays

const myarrays=[0,1,2,3,4,5]
// console.log(myarrays.length)

const myhero = ["shaktiman", "naagraj","rajkumar"]
// console.log(myhero.length)

//  Array methods

// myarrays.push(0)
// myarrays.push(7)
// myarrays.pop()

// myarrays.unshift(9)
// console.log(myarrays)
// myarrays.shift()
// console.log(myarrays)

// console.log(myarrays.pop())

// console.log(myarrays.includes(9))
// console.log(myarrays.includes(4))
// console.log(myarrays.indexOf(4))

const newArr = myarrays.join()

// console.log(myarrays )
// console.log(typeof newArr)
// console.log(newArr)

// slice, splice

console.log("A", myarrays)
const myan = myarrays.slice(1,3)

console.log(myan)
console.log("B", myarrays)

const myar= myarrays.splice(1,3)
console.log("c", myarrays)
console.log(myar)
