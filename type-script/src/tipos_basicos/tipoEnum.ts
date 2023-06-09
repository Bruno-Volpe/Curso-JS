enum Cores {
  VERMEHLO, // 0
  AZUL, // 1
  AMARELO, // 2
}

console.log(Cores[0]) //vermelho
console.log(Cores.VERMEHLO) // 0

enum Cores2 {
  VERMELHO = 10,
  AMARELO = 100,
  VERDE = 200,
}

console.log(Cores[10]) //vermelho
console.log(Cores.VERMEHLO) //10

enum Pessoas {
  'Bruno' = 100,
  'Raul',
  'Livia',
}

console.log(Pessoas[101]) // raul
