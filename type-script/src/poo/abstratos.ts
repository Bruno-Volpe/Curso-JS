export abstract class Personagem {
  protected abstract emoji: string

  constructor(
    protected nome: string,
    protected ataque: number,
    protected hp: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao()
    personagem.perderVida(this.ataque)
  }

  perderVida(forcaAtaque: number): void {
    this.hp -= forcaAtaque
    console.log(`${this.nome} agora tem ${this.hp} de vida`)
  }

  abstract bordao(): void
}

class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}'

  bordao(): void {
    console.log(this.emoji + 'GUEIRAA AO ATAQUEE')
  }
}

class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}'
  bordao(): void {
    console.log(this.emoji + 'UAAAAAR')
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000)
const monstro = new Monstro('Monstro', 87, 1000)

guerreira.atacar(monstro)
