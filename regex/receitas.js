// Olhar repositorio gitub do luiz otavio

// ENCONTRA TODAS AS PALAVRAS
const palavrasRegExp = /([\wÁ-Ú]+)/gi

// nao numeros
const naoNumerosRegExp = /\D/

// valida ip
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}[1-9]\d|\d)/g

// valida cpf
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g

// valida telefones
const telefonesRegExp = /^(\(\d{2}\)\s*)?(\d{4})-(\d{4})$/g

// valida senhas fortes
const senhasFortesRegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8.}/