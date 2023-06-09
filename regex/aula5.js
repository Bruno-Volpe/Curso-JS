const alfabeto = 'ABCDEFGHIJ'

// CONJUNTOS
// [] procura por qqr coisa dentro do range
// ^ no inicio, indica negacao
// RANGES = [0-9] | [a-z] | [A-Z] | [a-zA-z0-9]
console.log(alfabeto.match(/[abc]/gi))
console.log(alfabeto.match(/[0-9]/gi))