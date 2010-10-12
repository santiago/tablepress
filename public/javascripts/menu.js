jQuery(document).ready(function($) {
    $("#productos-item").mouseenter(function() {
	$("#desplegable-fondo").slideDown(function() {
	});
    });

    $("#desplegable-fondo").mouseleave(function(e) {
    // $("#wrap").mouseenter(function() {
	if ($(e.originalTarget).attr("id") != "productos-lista") {
	    $("#desplegable-fondo").slideUp();
	}
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
	}).click(function() {
	    $(this).blur();
	});

});