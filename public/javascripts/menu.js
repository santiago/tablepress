jQuery(document).ready(function($) {
    $("#productos-item").mouseenter(function() {
	$("#desplegable-fondo").slideDown();
    });

    $("#desplegable-fondo").mouseleave(function() {
	$("#desplegable-fondo").slideUp();
    });

    $("#productos-lista li a").hover(
	function() {
	    $("#desplegable-fondo .seleccionado")
		.removeClass("off")
		.addClass($(this).text());
	},
	function() {
	    $("#desplegable-fondo .seleccionado")
		.addClass("off")
		.removeClass($(this).text());
	});

});