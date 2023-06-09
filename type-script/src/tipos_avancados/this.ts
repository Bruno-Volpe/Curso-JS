export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n
    return this
  }

  sub(n: number): this {
    this.numero -= n
    return this
  }

  div(n: number): this {
    this.numero /= n
    return this
  }

  mul(n: number): this {
    this.numero *= n
    return this
  }
}

class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n
    return this
  }
}

const calc = new SubCalculadora(10)
calc.add(5).mul(2).pow(2)
console.log(calc)

// BUilder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null
  private ulr: string | null = null

  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }

  setUrl(url: string): this {
    this.ulr = url
    return this
  }

  send(): void {
    console.log('Enviando dados...')
  }
}

const request = new RequestBuilder()
request.setMethod('post').setUrl('google')
request.send()
