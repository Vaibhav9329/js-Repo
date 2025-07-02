const accountId = 123456
let accountEmail = "hitesh@google.com"
var accountpwd = "1234567"
let accountstate ;
accountCity = "pune"

accountEmail = "vaibhavgmail.com"
accountpwd = "2222222"

accountCity = "mumbai"


/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountpwd,accountCity,accountstate]);