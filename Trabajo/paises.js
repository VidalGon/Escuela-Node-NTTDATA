"use strict";
(() => {
    const cod = {
        codpais: "pe"
    };
    const searchByCodeCountry = async (cod) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/alpha/${cod}`);
            const data = await res.json();
            return data;
        }
        catch (error) {
            console.log(error);
        }
    };
    searchByCodeCountry(cod.codpais);
})();
