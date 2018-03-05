console.log('Starting app');


const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');
let argv = yargs.argv;
const notes = require('./note');


notes.addNote(argv.title, argv.body);





