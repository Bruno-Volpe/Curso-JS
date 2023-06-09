interface TipoPessoa {
  nome: string
  sobrenome: string
  nomeCompleto(): string
}

export class Pessoa implements TipoPessoa {
  nome: string
  sobrenome: string

  constructor(nome: string, sobrenome: string) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  nomeCompleto() {
    return this.nome + '' + this.sobrenome
  }
}

const pessoa = new Pessoa('Bruno', 'Volpe')
