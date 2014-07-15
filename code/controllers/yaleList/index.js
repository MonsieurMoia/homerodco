var fs = require("fs")

var ItemTemplate = require("../hilcoList/item")

var el;

Product = require("../../models/product")

function init(target){
	el = document.getElementById(target);
	Product.bind("refresh", render);
}


function render(){

	var str = ""
	var productosYale = Product.findAllByAttribute("marca","Yale");

	for (var i = productosYale.length - 1; i >= 0; i--) {
		var product = productosYale[i]
		str += ItemTemplate(product)
	};

	el.innerHTML = str;	

	//When Products are loaded, activate isotope

  	// init Isotope
  	var $container = $('.isotopeYale').isotope({
    	itemSelector: '.element-item',
    	layoutMode: 'fitRows'
  	});

  	// bind filter button click
  	$('.filtersYale').on( 'click', 'li', function() {
    	var filterValue = $( this ).attr('data-filter');
    	$container.isotope({ filter: filterValue });
  	});
  	// change is-checked class on buttons
  	$('.button-group-Yale').each( function( i, buttonGroup ) {
    	var $buttonGroup = $( buttonGroup );
    	$buttonGroup.on( 'click', 'li', function() {
      		$buttonGroup.find('.is-checked').removeClass('is-checked');
      		$( this ).addClass('is-checked');
    	});
  	});
}

module.exports = init;