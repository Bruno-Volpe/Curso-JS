// METODOS
// match -> retorna array com as palavras encontradas 
// replace -> substituir  (...) (...) $1 $2

const { texto } = require('./base.js')

const regExp1 = /established|lalal/g
const regExp2 = /(fact|letters)|ipsum/gi

console.log(texto.match(regExp1))
console.log(texto.replace(regExp1, 'substituir')) //eh criada uma variavel $1\ para cada grupo
console.log(texto.replace(regExp1, function (inpuy) {
    return inpuy.toUpperCase()
})) //eh criada uma variavel $1\ para cada grupo

console.log(texto.match(regExp2))
const textChanged = texto.replace(regExp2, (input) => {
    return `++ ${input.toUpperCase()} ++`
})
console.log(textChanged)