console.log('Starting app.js ....')

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

console.log(_.isString('Hello'));
console.log(_.isString(1));
console.log(_.uniq([1, 1, 2, 3, 7]));
// var result = notes.add(3, 4);
// console.log(result);
// var user = os.userInfo()
// fs.appendFile('greetings.txt', `Hello ${user.username}!. You are ${notes.age}.`, (error) => {

// });