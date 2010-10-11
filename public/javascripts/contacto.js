jQuery(document).ready(function($) {
    $("#contacto-formulario button").click(function(e) {
	var data= {
	    nombre: $("#contacto-formulario").find("input[name=nombre]").val(),
	    contacto: $("#contacto-formulario").find("select[name=contacto]").val(),
	    email: $("#contacto-formulario").find("input[name=email]").val(),
	    asunto: $("#contacto-formulario").find("input[name=asunto]").val(),
	    mensaje: $("#contacto-formulario").find("textarea[name=mensaje]").val()
	};
	for (field in data) {
	    if (!jQuery.trim(data[field])) {
		alert("Debe ingresar "+field);
		return;
	    }
	}

	$.post("/contacto", {contacto:data}, function(data) {
	    alert("Se han enviado los datos, pronto recibirá respuesta de nuestra parte. Gracias por su visita.");
	});

	e.preventDefault();
    });
});