const program = ["js","rb","py","java","cpp"];

// const values = program.forEach((item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9,10]
// const evenValues = mynums.filter((num) => { return num %2==0})  //---> filter 
// console.log(evenValues)


// const myno=[]
// mynums.forEach((num) => {     //--> forEach loop :- whenever we use forEach loop that time we need to use return statment
//     if(num %2 == 0){
//         return myno.push(num);  //--> return
//     }
// })

// console.log(myno)


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Biography', publish: 1995, edition: 2001 },
  { title: 'Book Nine', genre: 'Science', publish: 2003, edition: 2011 },
  { title: 'Book Ten', genre: 'Fantasy', publish: 2012, edition: 2018 }
];


// const userBooks =  books.filter((bk) => bk.genre === 'History')


const userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"})
console.log(userBooks)