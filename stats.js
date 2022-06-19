const os = require('os')     //Common Js utilizado para importar modulos
const log = require('./logger') // exportando a função de um arquivo local



// Responsável por mandar o código todo abaixo a cada 1 segundo, onde vai ser atualizado
setInterval(() => {
    const { freemem, totalmem} = os // desistruturação do objeto, extraindo de dentro do os

    const total = parseInt(totalmem() / 1024 / 1024) // total de memória livre formatando em MB
    const mem = parseInt(freemem() / 1024 / 1024) // memória em formatando em MB
    const percents = parseInt((mem / total) * 100) // criando a porcentagem

    //formatando o resultado em um objeto
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents} %`
    }

    console.clear() //Limpa o console antes de mostrar a mensagem
    console.log("=== PC STATS ===");
    console.table(stats)//mostra o resultado em forma de tabela
    
    log(`${JSON.stringify(stats)} \n`);

}, 1000)
