(()=>{
console.log('------PROMESA--------')
console.log('INICIO DE PROMESA')

const retirarDinero = (monto : number)=>{
    let montoActual = 1000
    return new Promise ((resolve,rejects) => {

        if(monto>montoActual){
            rejects('Monto ingresado supera al actual')
        }else {
                montoActual = montoActual - monto
            resolve(montoActual)
        }

    });   
}
    retirarDinero(1500)
        .then(montoActual =>console.log(`Me queda ${montoActual}`))
        .catch(err=>console.log(err))
})();