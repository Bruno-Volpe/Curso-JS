// FLAGS
// g - global (encontra todas as ocorrencias)
// i - insensitivo (encontra independente se esta maisucula ou minuscula)
// () - grupos
// | - ou 

// METODOS
// (dentro expressao regular)
// exec
// teste

//(dentro string)
// match - retorna array com as palavras encontradas 
// replace - substituir

// QUANTIFICADORES
// * (opcionais) 0 ou n 
// + (obrigatorio) 1 ou n
// ? (opcionais) o ou 1

// Colocado a direita, faz efeito ao elemento da esquerda

// TIPOS
// GREEDY -> tenta ir ate o final da regExp
// NON-GREEDY -> pega a menor versao da regExp

const texto = `
It is a long established fact that a reader will be distracted by the readable 
content of a page when looking at its layout.The point of using Lorem Ipsum is 
that it has a more ç less normal distribution of letters, as opposed to using 
making it look like readable English.Many desktop publishing packages and web 
page editors now use Lorem Ipsum as their default model text, and a search for 
`

const cpfs = `
Os CPFs são:
  254.224.8777-45 215.978.456-12 047.258.369-96 
  963.987.321-00
  963.987.32a.00 (NÃO VÁLIDO)
  963.987.32-00 (NÃO VÁLIDO)
`;


module.exports = {
  texto,
  cpfs
}