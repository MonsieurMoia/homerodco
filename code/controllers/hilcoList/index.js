var fs = require("fs")

var ItemTemplate = require("./item")

var el;

Product = require("../../models/product")

function init(target){
	el = document.getElementById(target);
	Product.bind("refresh", render);
}


function render(){

	var str = ""
	var productosHilco = Product.findAllByAttribute("marca","HILCO");

	for (var i = productosHilco.length - 1; i >= 0; i--) {
		var product = productosHilco[i]
		str += ItemTemplate(product)
	};

	el.innerHTML = str;	

	//When Products are loaded, activate isotope

  	// init Isotope
  	var $container = $('.isotope').isotope({
    	itemSelector: '.element-item',
    	layoutMode: 'fitRows'
  	});

  	// bind filter button click
  	$('.filters').on( 'click', 'li', function() {
    	var filterValue = $( this ).attr('data-filter');
    	$container.isotope({ filter: filterValue });
  	});
  	// change is-checked class on buttons
  	$('.button-group').each( function( i, buttonGroup ) {
    	var $buttonGroup = $( buttonGroup );
    	$buttonGroup.on( 'click', 'li', function() {
      		$buttonGroup.find('.is-checked').removeClass('is-checked');
      		$( this ).addClass('is-checked');
    	});
  	});
 
}

module.exports = init;