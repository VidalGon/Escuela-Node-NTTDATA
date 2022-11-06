"use strict";
import fetch from 'node-fetch'
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
                monedanom: data[0].currencies[Object.keys(data[0].currencies)].name,
                monedasimbolo: data[0].currencies[Object.keys(data[0].currencies)].symbol,
                idioma: "",
                frontera : ""
            };
            Object.entries(data[0].languages).find(([key, value]) => {
                respuesta.idioma = respuesta.idioma + value + " ";
                return false;
            });
            Object.entries(data[0].borders).find(([key, value]) => {
                respuesta.frontera = respuesta.frontera + value + " ";
                return false;
            });
            return console.log(`El pais ingrasado es : ${respuesta.nombre} , su moneda es : ${respuesta.monedanom} y su simbolo es : ${respuesta.monedasimbolo}, los idioma(s) : ${respuesta.idioma}. ${respuesta.nombre} limita con ${respuesta.frontera}`);
        }
        catch (error) {
            console.log(error);
        }
    };
    searchByCodeCountry(cod.codpais);
})();
