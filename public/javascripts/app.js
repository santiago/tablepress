jQuery(document).ready(function($) {
    $.widget("ui.products",  {
	_init: function() {
	    var $el= this.element;
	    $el.find("#abre-especs a").click(function() {
		$el.find("#especs").slideToggle(function() {
		    if ($el.find("#descripcion .info").is(":visible")) {
			$el.find("#descripcion .info").hide();
		    } else {
			$el.find("#descripcion .info").show();
		    }
		});
	    });

	    $el.find("li.thumb a").click(function(e) {
		var id= $(this).closest("li").attr("id").split("-")[1];
		var html= $el.find("#products-data ."+id).html();
		$("#contenido-zoom").html(html);
		e.preventDefault();
	    });
	},
	_show_product: function() {
	}
    });

    $("#derecha").products();
});
