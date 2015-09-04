//funciones como
var funcionSaludar = function(nombre){
	console.log("Hola %s",nombre);
};

var functionDespide = function(nombre){
	console.log("Adios %s", nombre);
};

// manejadores - handlers - delegados

var mensaje = function(nombre, handler){
	handler(nombre);
};

//usando la funcion mensaje
mensaje("Ivan",funcionSaludar);