const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const argv = yargs
    .command('add', 'Add a note', {
        title: {
            describe: 'Title of the note',
            demand: true,
            alias: 't'
        }, body: {
            describe: 'Title of the note',
            demand: true,
            alias: 'b'
        }
    }).help()
    .argv;
const command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    console.log(note ? notes.logNote(note) : 'Note title taken.');
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes.`)
    allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'read') {
    var note = notes.readNote(argv.title);
    console.log(note ? notes.logNote(note): 'Note with title not found.');
} else if (command === 'remove') {
    var note = notes.removeNote(argv.title);
    console.log(note ? 'No notes removed' : `${argv.title} was removed`);
} else {
    console.log('command not found');
}