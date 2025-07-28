// de-structure and json api 

const course = {
    coursename : "js in english",
    price:"999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

const {courseInstructor : Instructor } = course  // --> de-structuring hua hai

console.log(Instructor)

// {                                   -->   // json formate
//         "name" : "vaibhav",
//         "courseName": "js in english",
//         "price" : "free"
// }   