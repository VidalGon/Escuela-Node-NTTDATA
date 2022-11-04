(function () {
    console.log('------PROMESA--------');
    console.log('INICIO DE PROMESA');
    var retirarDinero = function (monto) {
        var montoActual = 1000;
        return new Promise(function (resolve, rejects) {
            if (monto > montoActual) {
                rejects('Monto ingresado supera al actual');
            }
            else {
                montoActual = montoActual - monto;
                resolve(montoActual);
            }
        });
    };
    retirarDinero(1500)
        .then(function (montoActual) { return console.log("Me queda ".concat(montoActual)); })["catch"](function (err) { return console.log(err); });
})();
