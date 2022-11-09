"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
(() => {
    const cod = {
        codpais: "pe",
    };
    const searchByCodeCountry = async (cod) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/alpha/${cod}`);
            const data = await res.json();
            const respuesta = {
                nombre: data[0].name.common,
            };
            const eventEmitter = new events_1.EventEmitter();
            eventEmitter.on('primerEvento', () => {
                return console.log(`El pais ingrasado es : ${respuesta.nombre} `);
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    searchByCodeCountry(cod.codpais);
})();
