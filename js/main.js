var socket = io("https://pitucuates-socket-server.herokuapp.com");
var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e){
	e.preventDefault();
	var mensaje= document.getElementById("mensaje").value;
	console.log(mensaje);
	socket.emit("mensaje" , mensaje);
	var nuevoParrafo = document.createElement("p")
	nuevoParrafo.className = "enviar";
	nuevoParrafo.textContent = mensaje;
	var chat = document.getElementById("chat");
	chat.appendChild(nuevoParrafo);
});
socket.on("respuesta", function(respuesta){
	console.log(respuesta);
	var nuevoParrafo = document.createElement("p")
	nuevoParrafo.className = "recibir";
	nuevoParrafo.textContent = respuesta;
	var chat = document.getElementById("chat");
	chat.appendChild(nuevoParrafo);
});
