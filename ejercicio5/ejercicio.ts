function ejmploletconst(nombre:String,pi:number){
    console.log(nombre,pi)
}
let nombre = "El valor de Pi es: "

const pi = 3.14159
ejmploletconst(nombre,pi)
function ejemplo2(area:number,ambientes:number,colorpaedes:string){
    
    console.log("La casa tiene un area de ",area,", contiene ",ambientes," ambientes ", "y sus paredes son de color ",colorpaedes)
}
interface casaa {
    area : number,
    ambientes : number,
    colorpaedes : string
}
const casa : casaa={
    area : 200,
    ambientes : 3,
    colorpaedes : "Rojo"
}
ejemplo2(casa.area,casa.ambientes,casa.colorpaedes)
let Ejemplo3=(x:number,y:number,resultado1:number)=>{
    resultado1=x+y^2;
    return(console.log("El resultado es :", resultado1))
}
interface valor{
    x:number,
    y:number,
    resultado1:number
}
const valores : valor= {
    x:2,
    y:3,
    resultado1:0
}
Ejemplo3(valores.x,valores.y,valores.resultado1)
function ejemplo4(nombre:string,edad:number){
    console.log("Mi nombre es :",nombre,"tengo ",edad," años")
}
interface datos {
    nombre:string,
    apellido?:string,
    edad:number,
    esPeruano?:boolean
}
const data : datos={
    nombre : "Vidal",
    edad: 27
};
ejemplo4(data.nombre,data.edad)

class Rectangulo{
    base : number;
    altura : number;
    area :number;
constructor (base:number,altura:number,areac:number){
    this.base = base;
    this.altura = altura;
    this.area = areac;
}
Calculaar5(){
    this.area = this.base * this.altura
    return (this.area)
}

}
let rec : Rectangulo = new Rectangulo(6,2,0)
console.log("El area del rectangulo es ", rec.Calculaar5())

interface ejemplo7 {
    usuario : string
    clave : string
    fecha : Date
}

interface ejemplo7 {
    estado : boolean
}

const Cste : ejemplo7 = {usuario: "VidalGc",clave:"hola2020",fecha:new Date(), estado:true}

const {usuario} = Cste
const {clave} = Cste
const {fecha} = Cste
const {estado} = Cste
console.log("Tu usario es :",usuario," con clave :",clave," Con la fecha ",fecha," Su estado es :",estado)

/*Con type */
type objetoType = {
    nombre : string
    precio : number
}

const csteType : objetoType = {nombre:"Mesa",precio:20}
const {nombre:string,precio} = csteType
console.log("Nombre: "+nombre+", Precio: "+precio)
/*Funcion flecha desestructuracion de ultimos 2 elementos*/
const funcion = ()=>{return ["Jhon","Luis","Mateo","Ana"]}
const [,,Mateo,Ana] = funcion()
console.log("Ultimos 2 elementos del array: ",Mateo," ",Ana)