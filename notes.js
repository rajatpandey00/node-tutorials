const fs = require('fs')
// const name = 'Rajat'
// // const printName = function (suppliedName) {
//     if(suppliedName === undefined || suppliedName === null) {
//         console.log('Default name is ', name)
//     }
//     else {
//      return console.log('Passed Name is', suppliedName)
//     }
// }
// module.exports = printName
// const fs = require('fs')
// const fetchOutput = function (fileName) {
//     if(!fs.existsSync(fileName)) {
//         //fs.writeFileSync('No-File-Name.txt', 'File Does Not Exists')
//         console.log('Please provide fileName that actually exists.')
//     } else {
//      const textReceived = fs.readFileSync(fileName)
//     console.log('Received Text is ', textReceived.toString())
//     }
// }

const getNotes = () => console.log('Fetching Notes..')

const addNotes = (title, body) => {
    console.log('Inside Utitlities of addNotes..')
    const fileName = `${title}.txt`
    if(!fs.existsSync(fileName)){
            fs.writeFileSync(fileName, body)
          } else {
            fs.appendFile(fileName, body, () => {}) // callBack is added for appending file
        }
   }

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
}