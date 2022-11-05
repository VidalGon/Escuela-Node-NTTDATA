"use strict";
(() => {
    const cod = {
        codpais: "col"
    };
    const searchByCodeCountry = (cod) => {
        try {
            fetch(`https://restcountries.com/v3.1/alpha/${cod}`).then(res => res.json())
                .then((data) => console.log(data));
        }
        catch (error) {
            console.log(error);
        }
    };
    searchByCodeCountry(cod.codpais);
})();
