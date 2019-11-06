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
const fs = require('fs')
const fetchOutput = function (fileName) {
    if(!fs.existsSync(fileName)) {
        //fs.writeFileSync('No-File-Name.txt', 'File Does Not Exists')
        console.log('Please provide fileName that actually exists.')
    } else {
     const textReceived = fs.readFileSync(fileName)
    console.log('Received Text is ', textReceived.toString())
    }
}
module.exports = fetchOutput