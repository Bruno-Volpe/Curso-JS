const { cpfs } = require('./base.js')

const regExp = /([0-9]+(\.|\-))+[0-9][0-9]/gi
const testeRegExp = /([0-9]+(\.|\-))/
const testList = `
123.245.89-9
1234-870
`


const wrongCPFS = cpfs.match(regExp)
const rightCPDS = []
wrongCPFS.forEach(cpf => {
    if (cpf.length === 14) rightCPDS.push(cpf)
})

//console.log(rightCPDS)
console.log(testList.match(testeRegExp))

// Para ip
//250 - 255 -> 25[0-5]
//200 - 249 -> 2[0-4][0-9]
//100 - 199 -> 1\d{2}