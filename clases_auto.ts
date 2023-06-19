// desafio 
class Autos {
    marca:string;
    modelo:number;
    potencia:number
    max_velocidad:number
    constructor (marca:string, modelo:number, potencia:number,max_velocidad:number){
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.max_velocidad = max_velocidad
    }
    Obtener_datos():string {
        return this.marca;
    }
    calcular_tiempo(distancia:number):number{

        const tiempo_km= distancia / this.max_velocidad
        return tiempo_km;

    }
}

let lista_autos:Autos[] =[ 
    new Autos("Volswagen", 2023, 200, 170),
    new Autos("Chevrolet", 2023, 240, 200),
    new Autos("Ford", 2001, 220, 160),
    new Autos("Peugeot", 2014, 250, 250),
    new Autos("Ferrari", 2013, 200, 320)

];

// for (let i = 0; i < lista_autos.length; i++) {
//     console.log(lista_autos[i]);
// }
const distancia_correr= 100;

for (let i = 0; i <lista_autos.length; i++){
    const Auto = lista_autos[i];
    const tiempo_opt = Auto.calcular_tiempo(distancia_correr);
    console.log (`El auto `,Auto.marca,`modelo `,Auto.modelo,` tarda `,tiempo_opt.toFixed(2),` horas en recorrer` ,distancia_correr, `km`);
}
//Crear una clase Escuela (1) que tiene un listado de Cursos (2) al cual se
// le asignan Alumnos (2)

class Escula{
    nombre: string;
    edad:number
    constructor (nombre:string,edad:number){
        this.nombre = nombre
        this.edad = edad
    }
    datos(){
        return `Nombre ${this.nombre} y edad ${this.edad}`
    }
}
const Curso_Mat =[
    new Escula(`Leonel`, 34),
    new Escula(`Matias`, 19)
]
const Curso_Histori =[
    new Escula(`Lucia`, 34),
    new Escula(`Flor`, 21)
]
const instituto = [
    Curso_Mat,
    Curso_Histori
]


for (let i = 0; i < instituto.length; i++) {
    const curso = instituto[i];
    console.log(`Curso ${i + 1}:`);
    for (let j = 0; j < curso.length; j++) {
      const alumno = curso[j];
      console.log(alumno.datos());
    }
    console.log("------------------");
  }

//   Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y
// sacar fondos

// • Si le asignamos más de 500000 disparamos una alarma
// • Si intentamos sacar más de lo que disponemos disparamos otra alarma
// • Si intentamos sacar más de 100000 disparamos otra alarma

class Banco{
    sueldo:number;
    constructor( sueldo:number){
        this.sueldo = sueldo;
    }
    asignar_fondo(fondo:number){
        if (fondo >500000){
            console.log("No puede depositar mas de 500000 ");
        this.sueldo+= fondo
        }
    }
    extraer_fondo(fondo:number){
        if (fondo >this.sueldo){
            console.log("No puede sacar mas de lo q dispone");
        } else if (fondo > 100000){
            console.log("No puede sacar mas de 100000");
        } else{
            this.sueldo -=fondo;
        }
    }
    total_sueldo(){
        return this.sueldo
    }
}
const empleado1 =new Banco (300000)
console.log("El saldo inicial es: ",empleado1.total_sueldo())

empleado1.extraer_fondo(150000)



