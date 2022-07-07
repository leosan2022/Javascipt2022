const listadoNotas = [3, 10, 9, 6, 5];

let resultadoDesafio = 0;
for(let posicion= 0; posicion < 5; posicion++){
    resultadoDesafio = resultadoDesafio + listadoNotas [posicion];
}

const promedio = resultadoDesafio/5;
console.log(promedio);

if( resultadoDesafio > 6){
    console.log('No aprobaste, falto mas estudio, tu nota es un:' + promedio)
}else{
    console.log('Felicitaciones, aprobaste con un: ' + promedio)
}






//*Promedio de edades que ingresan a la web*//
const  Edades= [23, 18, 15, 26, 15];

let PromedioDeEdades = 0;
for(let posicion= 0; posicion < 5; posicion++){
    PromedioDeEdades = PromedioDeEdades + Edades [posicion];
}

const Promedio = Edades/5;
console.log(promedio);

if( resultadoDesafio > 18){
    console.log("Estamos generando buenas ventas")
}else{
    console.log("Malas ventas")
}