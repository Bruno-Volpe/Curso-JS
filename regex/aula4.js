const html = '<p>Testando 1 2 3, ola mundo</p> <a>Outro teste</a>'

// <.+>.+<\.+> se queissemos fazer uma regExp nomral para pegar a tag HTML

// GREEDY -> tenta ir ate o final da regExp
const regExp1 = /<.+>.+<\/.+>/gi
console.log(html.match(regExp1))

// NON-GREEDY -> pega a menor versao da regExp
const regExp2 = /<.+?>.+?<\/.+?>/gi
console.log(html.match(regExp2))