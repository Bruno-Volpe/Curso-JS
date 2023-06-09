export class Pessoa {
  private readonly nome: string
  private readonly sobrenome: string
  private readonly idade: number
  protected _cpf: string

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this._cpf = cpf
  }

  set cpf(valor: string) {
    this._cpf = valor
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '')
  }
}

const pessoa = new Pessoa('Bruno', 'Volpe', 16, '123.654.237-89')
pessoa.cpf = '123.654.237-89'
console.log(pessoa.cpf)
