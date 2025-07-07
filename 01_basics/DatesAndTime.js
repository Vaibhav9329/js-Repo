let mydate = new Date( )
// console.log(mydate)

// console.log(mydate.toString())

// console.log(mydate.toLocaleString())
// console.log(mydate.toLocaleDateString())

// console.log(typeof mydate)

let mycreatedate = new Date(2023, 0, 23)

// console.log(mycreatedate.toString())

let mytimestamp = Date.now()
// console.log(mytimestamp)
// console.log(mycreatedate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()

// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

// console.log(`${newDate.getDate()}`)

newDate.toLocaleString('default', {
    weekday:"long"
})

console.log(newDate)