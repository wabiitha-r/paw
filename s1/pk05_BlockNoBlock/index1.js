// Non blocking Model
//---------------

//Cargando libreria
var fs = require('fs');

//Manejador
var manejador = function(err, data){
	if(err){
		console.log("Error al leer archivo....");
		return;
	}
	console.log(data);
};
//Lectura no bloqueante o asincrona
fs.readFile("\documento.txt",'utf-8', manejador);
// Otra operacion
console.log('\nTermino el programa.......');