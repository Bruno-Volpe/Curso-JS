export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class Empresa {
  public readonly nome: string
  private readonly colaboradores: Colaborador[] = []
  protected readonly cnpj: string

  constructor(nome: string, cnpj: string) {
    this.nome = nome
    this.cnpj = cnpj
  }

  addColaborador(...colaboradores: Colaborador[]): void {
    colaboradores.forEach((colaborador) => {
      this.colaboradores.push(colaborador)
    })
  }

  showColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador)
    }
  }
}

const empresa1 = new Empresa('JBL', '11.111.111/0001-11')

const colaborador1 = new Colaborador('bruno', 'volpe')
const colaborador2 = new Colaborador('livia', 'volpe')
const colaborador3 = new Colaborador('glauco', 'volpe')

empresa1.addColaborador(colaborador1, colaborador2, colaborador3)
empresa1.showColaboradores()
