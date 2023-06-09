export class Escritor {
  private _ferramenta: Ferramenta | null = null

  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta
  }

  escrever(): void {
    if (this.ferramenta === null) {
      return console.log('Nao posso escrever sem ferramenta')
    }
    this.ferramenta.escrever()
  }
}

abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void

  get nome(): string {
    return this._nome
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendor`)
    return
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta digitando`)
    return
  }
}

const escritor = new Escritor('luiz')
const caneta = new Caneta('Bic')
//const maquinaEscrever = new MaquinaEscrever('MaquinaEscrever')

escritor.escrever() //Nao vai funcionar

escritor.ferramenta = caneta
escritor.escrever() //Vai funcionar
