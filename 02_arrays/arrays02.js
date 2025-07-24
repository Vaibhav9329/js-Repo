const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)

const allnew_heros = [...marvel_heros, ...dc_heros]
// console.log(allnew_heros)

// const another_arrays = [1,2,3,4,[5,6,7],[8,[3,4],4,5,6],8,9]

// console.log(another_arrays)

// const real_arrays = another_arrays.flat(Infinity)
// console.log(real_arrays)

console.log(Array.isArray("vaibhav"))
let arr = (Array.from("vaibhav"))
console.log(arr)
console.log(Array.isArray(arr))

console.log(Array.from({name : "vaibhav"})) //intersting


let soc1 = 100
let soc2 = 200
let soc3 = 300

console.log(Array.of(soc1,soc2,soc3))