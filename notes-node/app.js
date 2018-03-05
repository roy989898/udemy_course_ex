console.log('Starting app');


const fs = require('fs');
const os = require('os');
const notes = require('./note');
let user = os.userInfo();


let res = notes.addNote();
console.log(res);

