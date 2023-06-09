type Adder = {
  (x: number): number
  (x: number, y: number): number
  (...arg: number[]): number
}

// Interrogacao para possibilitar o Y nao sendo enviado
const adder: Adder = (x: number, y?: number, ...arg: number[]) => {
  if (arg.length > 0)
    return arg.reduce((soma, value) => soma + value, 0) + x + y
  return x + (y || 0)
}

console.log(adder(1, 2))
