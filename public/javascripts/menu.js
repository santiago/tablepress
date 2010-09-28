jQuery(document).ready(function($) {
    $("#productos-item").mouseenter(function() {
	$("#desplegable-fondo").slideDown();
    });

    $("#desplegable-fondo").mouseleave(function() {
	$("#desplegable-fondo").slideUp();
    });

});