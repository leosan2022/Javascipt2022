

//*Promedio de ventas diarias que ingresan a la web*//
const  VentasDiarias= [290, 10, 18, 23, 15];

let PromedioDeVentas = 0;
for(let posicion= 0; posicion < 5; posicion++){
    PromedioDeVentas = PromedioDeVentas + VentasDiarias [posicion];
}

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


/*Arrays*/

const Drummers = ['Mapex', 15, '$500000'];
const Cymbals = ['DW', 55, '$565656'];

const TopDrummers = Drummers.concat(Cymbals);

console.log(TopDrummers); 
console.log(Drummers);
console.log(Cymbals);


const TopDrummer = ['mapex', 'dw', 'yamaha', 'pearl'];

TopDrummer.includes('dw'); 
TopDrummer.includes('ludwing'); 

