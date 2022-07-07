

//*Promedio de ventas diarias que ingresan a la web*//
const  VentasDiarias= [10, 10, 1, 23, 15];

let PromedioDeVentas = 0;
for(let posicion= 0; posicion < 5; posicion++){
    PromedioDeVentas = PromedioDeVentas + VentasDiarias [posicion];
}

console.log( VentasDiarias, "ventas");

const promedio = VentasDiarias/5;
console.log(PromedioDeVentas);

if( PromedioDeVentas > 25){
    console.log("Estamos generando buenas ventas")
}else{
    console.log("Malas ventas")
}



/**Alert para ventas con Nombre */
for(let i=1; i<=1; i++) {
    
    enterName= prompt(" Please, enter name");
 
    alert("Sale N° "+i+" Name: "+enterName);
}


const edadDelUsuario = parseInt(prompt("Please, enter age"));
if(edadDelUsuario >= 18){
    alert("ADULT");
}else{
    alert("YOUNGER");
}

/**Arrays**/

const drummers = ["Mapex", 5, "$500000"];
const cymbals = ["Sabian", 10, "$100000"];
const topDrummer = drummers.concat (cymbals);

    console.log (topDrummer);
    console.log(drummers);
    console.log(cymbals);



const Drummer = ['Mapex', 'DW', 'Pearl', 'Yamaha', 'Sonor'];
    
    Drummer.includes('Mapex');
    Drummer.includes('Ludwing Drums');