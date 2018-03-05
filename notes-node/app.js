console.log('Starting app');


const _ = require('lodash');
const fs = require('fs');
const os = require('os');
const notes = require('./note');
let user = os.userInfo();


let res = notes.addNote();
console.log(res);

let ans=_.add(1,5);
console.log(ans);

