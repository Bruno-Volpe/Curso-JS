export class Carro {
  private readonly motor = new Motor()

  ligar(): void {
    this.motor.ligar()
  }

  parar(): void {
    this.motor.parar()
  }

  desligar(): void {
    this.motor.desligar()
  }

  acelerar(): void {
    this.motor.acelerar()
  }
}

class Motor {
  ligar(): void {
    console.log('Motor estra ligado')
  }

  parar(): void {
    console.log('Motor estra parando')
  }

  desligar(): void {
    console.log('Motor estra desligado')
  }

  acelerar(): void {
    console.log('Motor estra acelerando')
  }
}

const carro = new Carro()
