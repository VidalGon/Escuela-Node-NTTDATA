"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const eventEmitter = new events_1.EventEmitter();
eventEmitter.on('primerEvento', () => {
    console.log('Se ejecuto el primer evento');
});
eventEmitter.prependListener('primerEvento', () => console.log('Anteponiendo Event'));
eventEmitter.on('segundoEvento', () => {
    console.log('Se ejecuto el segundo evento');
});
eventEmitter.on('segundoEvento', (...args) => {
    const parameters = args.join(', ');
    console.log(`event with parameters ${parameters} in third listener`);
});
eventEmitter.on('cargaUsuario', (nombre, edad) => {
    console.log(`Se cargo los datos del usuario ${nombre} con ${edad} de edad.`);
});
console.log(eventEmitter.emit('cargaUsuario','Juan','25'));
