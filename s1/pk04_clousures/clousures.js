//haciendo un closure

function retornaFuncionSaludo(){
	var mensaje = "Hola Erick...";
	return function(){
	console.log(mensaje);
	}
}
var saludar = retornaFuncionSaludo();
saludar();