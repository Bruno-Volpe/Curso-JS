// Tipos basicos
const nome = 'bruno'
const idade = 16
const aprovado = true
const simbolo = Symbol('[qualquer simbolo]')
const bigIntz = 10

const tipagemArray: Array<number> = [1, 2, 3, 4]
const tipagemArray2: Array<boolean> = [true, false]

const tipagemDict: { nome: string; idade: number; altura?: number } = {
  nome: 'bruno',
  idade: 2,
}

function sum(a: number, b: number): number {
  return a + b
}
console.log(sum(4, 5))
