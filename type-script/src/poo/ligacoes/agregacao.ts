export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = []

  inserirProduto(...produtos: Produto[]): void {
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

const carrinhoDeCompras = new CarrinhoDeCompras()
const produto1 = new Produto('Camiseta', 50)
const produto2 = new Produto('Bermuda', 150)
const produto3 = new Produto('Canca', 1.5)

carrinhoDeCompras.inserirProduto(produto1, produto2, produto3)
console.log(carrinhoDeCompras)
