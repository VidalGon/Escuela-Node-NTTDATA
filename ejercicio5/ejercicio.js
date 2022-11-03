function ejmploletconst(nombre, pi) {
    console.log(nombre, pi);
}
var nombre = "El valor de Pi es: ";
var pi = 3.14159;
ejmploletconst(nombre, pi);
function ejemplo2(area, ambientes, colorpaedes) {
    console.log("La casa tiene un area de ", area, ", contiene ", ambientes, " ambientes ", "y sus paredes son de color ", colorpaedes);
}
var casa = {
    area: 200,
    ambientes: 3,
    colorpaedes: "Rojo"
};
ejemplo2(casa.area, casa.ambientes, casa.colorpaedes);
var Ejemplo3 = function (x, y, resultado1) {
    resultado1 = x + y ^ 2;
    return (console.log("El resultado es :", resultado1));
};
var valores = {
    x: 2,
    y: 3,
    resultado1: 0
};
Ejemplo3(valores.x, valores.y, valores.resultado1);
function ejemplo4(nombre, edad) {
    console.log("Mi nombre es :", nombre, "tengo ", edad, " años");
}
var data = {
    nombre: "Vidal",
    edad: 27
};
ejemplo4(data.nombre, data.edad);
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura, areac) {
        this.base = base;
        this.altura = altura;
        this.area = areac;
    }
    Rectangulo.prototype.Calculaar5 = function () {
        this.area = this.base * this.altura;
        return (this.area);
    };
    return Rectangulo;
}());
var rec = new Rectangulo(6, 2, 0);
console.log("El area del rectangulo es ", rec.Calculaar5());
var Cste = { usuario: "VidalGc", clave: "hola2020", fecha: new Date(), estado: true };
var usuario = Cste.usuario;
var clave = Cste.clave;
var fecha = Cste.fecha;
var estado = Cste.estado;
console.log("Tu usario es :", usuario, " con clave", clave, " Con la fecha ", fecha, " Su estado es :", estado);
var csteType = { nombre: "Mesa", precio: 20 };
var string = csteType.nombre, precio = csteType.precio;
console.log("Nombre: " + nombre + ", Precio: " + precio);
/*Funcion flecha desestructuracion de ultimos 2 elementos*/
var funcion = function () { return ["Jhon", "Luis", "Mateo", "Ana"]; };
var _a = funcion(), Mateo = _a[2], Ana = _a[3];
console.log("Ultimos 2 elementos del array: ", Mateo, " ", Ana);
