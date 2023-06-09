export class Pessoa {
  readonly nome: string
  readonly sobrenome: string
  private readonly idade: number
  protected readonly cpf: string

  constructor(nome: string, sobrenome: string, idade: number, cpf: string) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.cpf = cpf
  }

  getIdade(): number {
    return this.idade
  }

  getCpf(): string {
    return this.cpf
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    console.log('Fazendo alogo antes')
    const result = super.getNomeCompleto()
    return result + 'alterado'
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Bom dia cliente! ${this.nome} ${this.sobrenome}`
  }
}

const aluno = new Aluno('Bruno', 'Volpe', 16, '169.321.456-23')
const cliente = new Cliente('Bruno', 'Volpe', 16, '169.321.456-23')
