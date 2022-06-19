//Irá guardar algumas mensagens em outro arquivo do sistema
const EventEmitter = require('events');
const fs = require('fs')
const path = require('path')

const emitter = new EventEmitter()

emitter.on('log', (message) => {  // Onde vai ser disparado o observador 
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if(err) throw err
    })
})    

function log(message) {
    emitter.emit('log', message)
 
}

module.exports = log //exportando a function log