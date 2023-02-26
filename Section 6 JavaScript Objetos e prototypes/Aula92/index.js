// Métodos úteis para objetos 26/02/23

/*
Object.values (Retorna os valores)

Object.entries (Retorna chaves e valores sé que em Arrays)

Object.getOwnPropertyDescriptor(o, 'prop') (Retorna a descrisão 
    enumerable: true, // Mostra a chave
    value: nome, // Valor
    writable: true, // Pode alterar o valor
    configurable: true // Configurável)

Object.assign(des, any) (Serve pra copiar o objeto)

... (spread) (Espalha os valores do objeto dentro de outro objeto)

Object.keys (retorna as chaves)

Object.freeze (congela o object)

object.defineProperties (define várias propriedades)

object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.8 };
console.log(Object.entries(produto));