// const util = require('./notes.js')
// // util('notesToRead.txt')
// util()
const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')
//console.log(chalk.bold.inverse.green('SUCCESS!'))
yargs.version('1.1.0')

//add, remove, read, list
//Creating new note
yargs.command({
    command: 'add',
    description: 'Adding a Notes!',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: String,
        },
        body: {
            describe: 'Notes Body',
            type: String,
        }
    },
    handler: function (argv) {
        const title = argv.title
        const fileName = `${title}.txt`
        const body = argv.body
        //console.log('Adding Notes with title', argv.title)
        //console.log('Adding Notes with optional body', argv.body || '')
        if(!fs.existsSync(fileName)){
            fs.writeFileSync(fileName, body)
         } else {
            fs.appendFile(fileName, body, () => {}) // callBack is added for appending file
        }
    }
 })
//Removing note
 yargs.command({
    command: 'remove',
    description: 'Removing Notes!',
    handler: function () {
        console.log('Removing Notes!!')
    }
 })

 //Reading note
 yargs.command({
    command: 'read',
    description: 'Reading your Notes!',
    handler: function () {
        console.log('Reading your Notes!!')
    }
 })

 //Listing note
 yargs.command({
    command: 'list',
    description: 'Listing your Notes!',
    handler: function () {
        console.log('Listing your Notes!!')
    }
 })
 yargs.parse()