// Agregacao
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = []

  inserirProdutos(...produtos: Produto[]): void {
    produtos.forEach((produto) => {
      this.produtos.push(produto)
    })
  }

  quantidadeProduto(): number {
    return this.produtos.length
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0)
  }
}

class Produto {
  constructor(public nome: string, public preco: number) {}
}

// const carrinhoDeCompras = new CarrinhoDeCompras()

// const camiseta = new Produto('camiseta', 50)
// const bone = new Produto('bone', 250)

// carrinhoDeCompras.inserirProdutos(camiseta, bone)
// console.log(carrinhoDeCompras.valorTotal())

// Associacao
class Escritor {
  private _ferramenta: Ferramenta | null = null

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Nao existe nenhuma ferramenta disponivel...')
      return
    }

    this.ferramenta.escrever()
  }
}

abstract class Ferramenta {
  constructor(private readonly _nome: string) {}
  abstract escrever(): void

  get nome(): string {
    return this._nome
  }
}

class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} esta escrevendo`)
    return
  }
}

// const bruno = new Escritor()

// const bic = new Caneta('bic')
// bruno.ferramenta = bic
// bruno.escrever()

// Composicao
class Carro {
  private readonly motor: Motor = new Motor()

  ligar() {
    this.motor.ligar()
  }
}

class Motor {
  ligar(): void {
    console.log('Ligando...')
  }
}

// const Bmw = new Carro()
// Bmw.ligar()
