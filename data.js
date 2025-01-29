// Date operations
let date = new Date();
// // retrieve the date(1-31) of the today's date
console.log(date.getDate());
// // to retrieve hour
console.log(date.getHours())
// // to retrieve minutes
console.log(date.getMinutes());
// // to retrieve full details
console.log(date.getFullYear())
// // seconds
console.log(date.getSeconds())

// assesement - to Build an real time clock like that
console.log("Today Date   : " + date.getDate() + "-" + date.getMonth()+1 + "-" + date.getFullYear())
console.log("Current Time : " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() )