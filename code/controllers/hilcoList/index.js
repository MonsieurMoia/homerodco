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
}

module.exports = init;