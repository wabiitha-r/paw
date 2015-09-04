// Non blocking Model
//---------------

//Cargando libreria
var fs = require('fs');

//Manejador
fs.readFile("\documento.txt",'utf-8', function(err,data){
	if(err){
		console.log("Error al leer archivo....");
		return;
	}
	console.log(data);
});
//Lectura no bloqueante o asincrona
// Otra operacion
console.log('\nTermino el programa.......');