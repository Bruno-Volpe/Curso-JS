export function add(a: unknown, b: unknown): string | number {
  if (typeof a === 'number' && typeof b === 'number') return a + b
  return `${a} e ${b}`
}
// console.log(add(1, 5))
// console.log(add('l', 'p'))

type Pessoa = {
  tipo: 'pessoa'
  nome: string
}

type Animal = {
  tipo: 'animal'
  cor: string
}

type PessoaOuAnimal = Pessoa | Animal
export class Aluno implements Pessoa {
  tipo: 'pessoa' = 'pessoa'
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome)
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome)
      break
    case 'animal':
      console.log(obj.cor)
      break
  }
}

mostraNome(new Aluno('joao'))
