// * (opcionais) 0 ou n 
// + (obrigatorio) 1 ou n
// ? (opcionais) o ou 1
// {n, m} sendo n o minimo e  m o maximo

// Colocado a direita, faz efeito ao elemento da esquerda

// \ eh caracter de escape

const { texto } = require('./base.js')
const regExp1 = /Lo+rem/gi
// const regExp2 = /Lo?rem/gi

console.log(texto.match(regExp1))
