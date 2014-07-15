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
	var productosCoflex = Product.findAllByAttribute("marca","Coflex");

	for (var i = productosCoflex.length - 1; i >= 0; i--) {
		var product = productosCoflex[i]
		str += ItemTemplate(product)
	};

	el.innerHTML = str;	
}

module.exports = init;