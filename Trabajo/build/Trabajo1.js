"use strict";
(() => {
    const ingresaNumero = (ingreso) => {
        return new Promise((resolve, reject) => {
            const numNuevo = Number(ingreso);
            const numAlertario = Math.floor(Math.random() * 5 + 1);
            if (isNaN(numNuevo)) {
                reject(new Error('Tipo de entrada incorrecta'));
            }
            let respuesta;
            if (numNuevo === numAlertario) {
                respuesta = {
                    puntos: 5,
                    aleatorio: numAlertario
                };
            }
            else if (numNuevo === numAlertario - 1 || numNuevo === numAlertario + 1) {
                respuesta = {
                    puntos: 2,
                    aleatorio: numAlertario
                };
            }
            else {
                respuesta = {
                    puntos: 0,
                    aleatorio: numAlertario
                };
            }
            resolve(respuesta);
        });
    };
    const continuarAdivanza = (terminar = true) => {
        return new Promise((resolve) => {
            if (terminar) {
                resolve(false);
            }
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });
    };
    const interfaceUsuario = async (status) => {
        try {
            const resultado = await ingresaNumero(3);
            const { puntos, aleatorio } = resultado;
            console.log(`El resultado del numero aleatorio es: ${aleatorio} y obtuviste ${puntos}pts`);
            const continuar = await continuarAdivanza(status);
            if (continuar) {
                interfaceUsuario(continuar);
            }
            else {
                console.log('Fin del juego');
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    interfaceUsuario(false);
})();
