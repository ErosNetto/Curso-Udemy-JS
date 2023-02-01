// Tratando e lançando erros (try, catch, finally) 21/12/22

try {
    // É executa quando não há erros
} catch (e) {
    // É executada quando há erros
} finally {
    // Sempre executado
}

/*
try{
    //é executada quando não há erros
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
  }catch (err) {
    //é executada quando há erros
    console.log('Tratando o erro')
  }finally{
    //Sempre (independente se ocorreu o erro ou não)
    console.log('Eu sempre sou executado')
}
*/


function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora();
console.log(hora);
} catch(e) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia.')
}