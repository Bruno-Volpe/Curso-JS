// FLAGS
// g - global (encontra todas as ocorrencias)
// i - insensitivo (encontra independente se esta maisucula ou minuscula)
// () grupos
// | ou 

const { texto } = require('./base.js')

const regExp1 = /long/g
const regExp2 = /long/gi
const regExp3 = /(long|hight|lala) esta tudo bem/gi
const regExp4 = /(that|lala) it has a more - or - less normal distribution of letters, as opposed to using/g

console.log(regExp1.test(texto)) // retorna um true or false
console.log(regExp2.exec(texto)) // retorna um objeto com o que foi extraido, local e muito mais

console.log((/(establishEd|lalal|established) fact/gi).exec(texto))
console.log("Palavra encotrada:", (/(establishEd|lalal|established) fact/gi).exec(texto)[0])
console.log(regExp4.test(texto))