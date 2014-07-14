var fs = require("fs")

var ItemTemplate = require("./item")

var el;

Product = require("../../models/product")

function init(target){
	el = document.getElementById(target);
	Product.bind("refresh", render);
}


function render(){

	// console.log(Product.all())

	var str = ""
	// for (var i = Product.all().length - 1; i >= 0; i--) {
	// 	var product = Product.all()[i]
	// 	str += ItemTemplate(product)
	// };


	var productosYale = Product.findAllByAttribute("marca","Yale");
	var productosHilco = Product.findAllByAttribute("marca","HILCO");
	var productosSoldadura = Product.findAllByAttribute("categoria","Soldadura");

	function addLastItems(productosMarca) {
		for (var i = productosMarca.length -1; i >= (productosMarca.length -4); i--){
			var producto = productosMarca[i];
			str+= ItemTemplate(producto)
		}
	}

	addLastItems(productosYale);
	addLastItems(productosHilco);
	addLastItems(productosSoldadura);


	el.innerHTML = str;	
}

module.exports = init;