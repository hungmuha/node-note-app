const fs = require('fs');
const chalk = require('chalk');
const getNotes = function () {
    return "Your notes..."
};

const addNote = function (title,body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    });

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log('new node added')
    } else {
        console.log('note title is taken')
    }
    
}

const removeNote = function(title) {
    const notes = loadNotes();
    const noteToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if(noteToKeep.length< notes.length){
        saveNotes(noteToKeep);
        console.log(chalk.bgGreen("Note removed!"));
    }else {
        console.log(chalk.bgRed("No note found!"));
    }

}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return[]
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};