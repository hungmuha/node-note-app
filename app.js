const validator = require('validator');
const yargs = require('yargs');
const notes = require("./notes.js");

// const command = process.argv[2];
// console.log(process.argv);

//Customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Note body content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title , argv.body);
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe:'Remove a note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
    }
})

//create list command
yargs.command({
    command: 'list',
    describe:'List your notes',
    handler: function() {
        console.log('Listing all the notes!')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe:'Read a note',
    handler: function() {
        console.log('Reading the note!')
    }
})

//add, remove, read, list

//parsing content of the arguments
yargs.parse();
// console.log(yargs.argv);