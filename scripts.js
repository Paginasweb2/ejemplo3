
function sonido(){

	 document.write('<audio autoplay><source src="cancion1.mp3" type="audio/mp3"></audio>');

	document.write('<input type="submit" value="boton2" onclick="actualizar()">')
}

function actualizar(){
	
	document.write('<audio autoplay><source src="sonido2.mp3" type="audio/mp3"></audio>');
}
