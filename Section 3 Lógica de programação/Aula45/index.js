// Operação ternária 14/12/22

// (condição pode ser entre parenteses ou não) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }