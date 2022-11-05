"use strict";
(() => {
    const tiempohorno = {
        tiempop: 5,
        tiempoh: 10
    };
    console.log("Empezamos...");
    const precalentandoHorno = setInterval(() => {
        const phorno = Promise.resolve('Bep Bep Beeep! Horno Calentado!');
        console.log(`Horno calentando en ${tiempohorno.tiempop}`);
        if (tiempohorno.tiempop == 5) {
            console.log(`Sacas la pizza en el ${tiempohorno.tiempop}`);
        }
        if (tiempohorno.tiempop == 4) {
            console.log(`Abres la caja en el ${tiempohorno.tiempop}`);
        }
        if (tiempohorno.tiempop == 3) {
            console.log(`Pones en el sarten de pizzas en el  ${tiempohorno.tiempop}`);
        }
        if (tiempohorno.tiempop == 1) {
            clearInterval(precalentandoHorno);
            phorno
                .then(resul => {
                console.log(resul);
                console.log("Tomando refresco :D");
            });
            const HornoCaliente = setInterval(() => {
                const horno = Promise.resolve('Bep Bep Beeep! Pizza lista!');
                if (tiempohorno.tiempoh === 10) {
                    console.log(`Metes la pizza al horno en ${tiempohorno.tiempoh}`);
                }
                if (tiempohorno.tiempoh < 10 && tiempohorno.tiempoh >= 1) {
                    console.log(`Mirando tv ${tiempohorno.tiempoh}`);
                }
                if (tiempohorno.tiempoh == 1) {
                    clearInterval(HornoCaliente);
                    horno
                        .then(resul => { console.log('Caliente', resul); });
                }
                tiempohorno.tiempoh--;
            }, 1000);
        }
        tiempohorno.tiempop--;
    }, 1000);
})();
