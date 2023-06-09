type Veiculo = {
  marca: string
  ano: string
}

type Car = {
  brand: Veiculo['marca']
  year: Veiculo['ano']
  name: string
}

const carro: Car = {
  brand: 'BMW',
  year: '2020',
  name: 'I250',
}

console.log(carro)
