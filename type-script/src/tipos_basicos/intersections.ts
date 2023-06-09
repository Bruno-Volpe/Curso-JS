// & = and

type TemNome = {
  nome: string
}

type TemSobrenome = {
  sobrenome: string
}

type idade = {
  idade: number
}

type Pessoa = TemNome & TemSobrenome & idade

const pessoa: Pessoa = {
  nome: 'Bruno',
  sobrenome: 'Volpe',
  idade: 25,
}

export { pessoa }
