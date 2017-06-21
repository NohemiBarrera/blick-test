var cargarPagina=function(){
	cargarContacto();
};

var cargarContacto = function(){
	var url = 'http://demo6292426.mockable.io/blickTest';
	$.getJSON(url, function(response){
		var contacto = response.name;
		var correo = response.email;
		mostrarContacto();
	});
};

var mostrarContacto = function(personas){
	var $div = $('#personas');
		 persona.forEach(function(persona){
		 	var $h6 = $("<h6 />");
		 	var $p = $("<p />");
		 	$h6.text(persona.name);
		 	$p.text(persona.email);
		 	$div.append($h6);
		 	$div.append($p);
		 });
};

$(document).ready(cargarPagina);