//Blocking Model
//Programa que lee un archivo
//de forma bloqueante

//Cargar un modilo nativo de node
//que me permite trabajar con archivos

var fs = require('fs');// file stream o flujo de archivos
//Leyendo el archivo
var contenido = 
              fs.readFileSync('\documento.txt','utf-8');
console.log(contenido);

//Haciendo otra operacion
console.log('El programa termino...');