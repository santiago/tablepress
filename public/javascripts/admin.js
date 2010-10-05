$.widget("ui.hover_class", {
    _init: function() {
	var self= this;
	
	var is_on= this.options.on ? true : false;
	var $hover_el= this.options.el ? this.options.el : this.element;

	this.element.hover(function() {
	    if (is_on) {
		$hover_el.removeClass(self.options.hover_class);
	    } else {
 		$hover_el.addClass(self.options.hover_class);
	    }
	}, function() {
	    if (is_on) {
 		$hover_el.addClass(self.options.hover_class);
	    } else {
		$hover_el.removeClass(self.options.hover_class);
	    }
	});
    }
});


$.widget("ui.product_list", {
    _init: function() {
	var $el= this.element;
	$el.find(".producto-item").hover_class({hover_class:"on"});
	$el.find(".producto-item").click(function(e) {
	    window.location= "/admin/products/"+$(this).attr("id").split("-")[1];
	    e.preventDefault();
	});
    }
});

$.widget("ui.product", {
    _init: function() {
	var self= this;
	var $el= this.element;
	
	var images= {
	    zoom: "",
	    thumb: ""
	};

	$("#guardar-producto").click(function(e) {
	    var producto= {
		name: $el.find(".nombre input").val(),
		code: $el.find(".codigo input").val(),
		specs: self._cargar_especs(),
		active: $el.find(".control .activo input").val(),
		zoom_image: images.zoom,
		thumb_image: images.thumb,
		product_type: $el.find(".tipo_producto select").val()
	    };
            $('#uploadify-zoom, #uploadify-thumb').uploadifyUpload();
	    $.post("/products", {product:producto}, function(data) {
		window.location= "/admin/products/"+data.product.id;
	    });
	    
	    e.preventDefault();
	});

        var onSelectZoom= function(event, queueID, fileObj) {
       	    $('#uploadify-zoom').uploadifySettings('scriptData', {'authenticity_token' : window._token});
	    images.zoom= fileObj.name;
        };
	
        var onAllCompleteZoom= function(e, data) {
            /*$("#photo-title-ajax").val("");
            $(".uploadify-controls").hide();
            self._reload_photos();*/
        };

        var onSelectThumb= function(event, queueID, fileObj) {
       	    $('#uploadify-thumb').uploadifySettings('scriptData', {'authenticity_token' : window._token});
	    images.thumb= fileObj.name;
        };
	
        var onAllCompleteThumb= function(e, data) {
            /*$("#photo-title-ajax").val("");
            $(".uploadify-controls").hide();
            self._reload_photos();*/
        };

	$("#uploadify-zoom").uploadify({
	    'uploader'       : '/javascripts/thirdparty/uploadify/uploadify.swf',
	    'script'         : '/products/image?' + session_key_name + '=' + session_key_val,
	    'cancelImg'      : '/javascripts/thirdparty/uploadify/cancel.png',
	    'folder'         : 'uploads/pictures',
	    'fileDesc'        : 'Seleccione una imagen',
	    'fileExt'        : '*.jpg;*.jpeg;*.gif;*.png',
    	    'sizeLimit'      : 3145728,
	    'auto'           : false,
	    'multi'          : false,
	    'buttonText'     : "click para agregar imagen",
	    'onSelect': onSelectZoom,
	    'onAllComplete': onAllCompleteZoom
	});

	$("#uploadify-thumb").uploadify({
	    'uploader'       : '/javascripts/thirdparty/uploadify/uploadify.swf',
	    'script'         : '/products/image?' + session_key_name + '=' + session_key_val,
	    'cancelImg'      : '/javascripts/thirdparty/uploadify/cancel.png',
	    'folder'         : 'uploads/pictures',
	    'fileDesc'        : 'Seleccione una imagen',
	    'fileExt'        : '*.jpg;*.jpeg;*.gif;*.png',
    	    'sizeLimit'      : 3145728,
	    'auto'           : false,
	    'multi'          : false,
	    'buttonText'     : "click",
	    'width'          : 100,
	    'onSelect': onSelectThumb,
	    'onAllComplete': onAllCompleteThumb
	});

	

    },
    _cargar_especs: function() {
	var $el= this.element;
	return {
	    espesor: $el.find(".espesor input").val(),
	    ancho: $el.find(".ancho input").val(),
	    largo: $el.find(".largo input").val(),
	    humedad: $el.find(".humedad input").val()
	};
    }
});

jQuery(document).ready(function($) {
    $(".producto").product();
    $(".lista-productos").product_list();
});