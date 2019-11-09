// const util = require('./notes.js')
// // util('notesToRead.txt')
// util()
const chalk = require('chalk')
const yargs = require('yargs')
//console.log(chalk.bold.inverse.green('SUCCESS!'))
yargs.version('1.1.0')

//add, remove, read, list
//Creating new note
yargs.command({
    command: 'add',
    description: 'Adding a Note!',
    handler: function () {
        console.log('Adding a Note!!')
    }
 })
//Removing note
 yargs.command({
    command: 'remove',
    description: 'Removing Note!',
    handler: function () {
        console.log('Removing Note!!')
    }
 })

 //Reading note
 yargs.command({
    command: 'read',
    description: 'Reading Note!',
    handler: function () {
        console.log('Reading Note!!')
    }
 })

 //Listing note
 yargs.command({
    command: 'list',
    description: 'Listing Note!',
    handler: function () {
        console.log('Listing Note!!')
    }
 })
 console.log(yargs.argv)