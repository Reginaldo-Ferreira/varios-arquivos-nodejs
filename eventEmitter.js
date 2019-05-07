// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows// Crie um manipulador de eventos da seguinte maneira 
var connectHandler = function connected() {
   console.log('conexão concluída com sucesso.');
   // Fire the data_received event// dispara o evento de dados recebido
   eventEmitter.emit('dado_recebido');
}

// Bind the connection event with the handler//Vincule o evento de conexão ao manipulador
eventEmitter.on('conectar', connectHandler);
 
// Bind the data_received event with the anonymous function //Vincule o evento data_received à função anônima
eventEmitter.on('dado_recebido', function(){
   console.log('dados recebidos com sucesso.');
});

// Fire the connection event //Disparar o evento de conexão
eventEmitter.emit('conectar');

console.log("Program Ended.");