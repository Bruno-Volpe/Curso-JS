type CoresObj = {
  vermelho: 'red'
  azul: 'blue'
  verde: 'green'
}

const coresObj: CoresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
}

function traduzirCor(
  cor: 'vermelho' | 'verde' | 'azul',
  cores: CoresObj,
): string {
  return cores[cor]
}

console.log(traduzirCor('vermelho', coresObj))
