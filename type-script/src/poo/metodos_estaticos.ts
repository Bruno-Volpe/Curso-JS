export class Pessoa {
  static idadePadrao = 0
  static cpfPadrao = 0

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

  static sayHi(): void {
    console.log('OI!')
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, 0, '000.000.000-00')
  }
}

const pessoa = new Pessoa('Bruno', 'Volpe', 16, '123.654.237-89')
Pessoa.sayHi()
