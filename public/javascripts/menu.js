jQuery(document).ready(function($) {

    if (!$.browser.msie) {
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
    } else {
	$("#productos-item").mouseenter(function() {
	    $(this).addClass("on");
	    $("#desplegable-fondo").show(function() {
	    });
	});
	$("#productos-lista").mouseleave(function(e) {
	    // $("#wrap").mouseenter(function() {
	    // if ($(e.originalTarget).attr("id") != "productos-lista") {
	    $("#desplegable-fondo").hide();
	    $("#productos-item").removeClass("on")
	    e.stopPropagation();
	    // }
	});	
	$("#productos-lista li a").hover(function() {
	    $(this).css({"font-weight": 900});
	}, function() {
	    $(this).css({"font-weight": 100});
	});

    }

	
});