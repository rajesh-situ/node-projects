console.log('Starting app.js ....')

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

var result = notes.add(3, 4);
console.log(result);
// var user = os.userInfo()
// fs.appendFile('greetings.txt', `Hello ${user.username}!. You are ${notes.age}.`, (error) => {

// });