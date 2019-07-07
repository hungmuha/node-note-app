const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require("./notes.js");

// const command = process.argv[2];
console.log(process.argv);
console.log(yargs.argv);

//Customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
})

//add, remove, read, list