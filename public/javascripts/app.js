jQuery(document).ready(function($) {
    $.widget("ui.products",  {
	_init: function() {
	    var $el= this.element;
	    $el.find("#abre-especs a").click(function() {
		$(this).blur();
		$el.find("#especs").slideToggle(function() {
		    if ($el.find("#descripcion .info").is(":visible")) {
			$el.find("#descripcion .info").hide();
			$el.find(".flechita").removeClass("arriba").addClass("abajo");
		    } else {
			$el.find("#descripcion .info").show();
			$el.find(".flechita").removeClass("abajo").addClass("arriba");
		    }
		});
	    });

	    $el.find("li.thumb a").click(function(e) {
		var id= $(this).closest("li").attr("id").split("-")[1];
		var html= $el.find("#products-data ."+id).html();
		$("#contenido-zoom").html(html);
		e.preventDefault();
		e.stopPropagation();
	    });

	    $el.find("li.thumb").hover(function() {
		var id= $(this).attr("id").split("-")[1];
		var name= $el.find("#products-data ."+id+" #nombre-zoom").text();
		var $alt= $("<p>").addClass("alt").text(name).css({
		    position: "absolute",
                    bottom: 0,
		    "background-color":"#666",
		    color: "white",
		    "font-size":"12px",
		    width: "100%",
		    padding: "3px 0",
		    "text-align":"center",
		    cursor: "pointer"
		});
		$(this).css({position:"relative"}).append($alt);
	    }, function() {
		$(this).find(".alt").remove();
	    }).click(function() {
		$(this).find("a").click();
	    });

	    $el.find("li.thumb a").first().click();
	},
	_show_product: function() {
	}
    });

    $("#derecha").products();
});
