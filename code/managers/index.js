function init(){

	var script = document.createElement('script');
	script.src = 'https://spreadsheets.google.com/feeds/list/1Of34ZaS1gGCzpQgHoQL8s6Y-IICceVa2HSwz3yFrkYo/od6/public/values?alt=json-in-script&callback=hooray';
	document.body.appendChild(script);

	window.hooray = function(json) {
		var products = []
		for (var i = json.feed.entry.length - 1; i >= 0; i--) {
			var product = json.feed.entry[i]
			products.push( { 
				nombre: product["gsx$nombre"]["$t"],
				marca: product["gsx$marca"]["$t"],
				categoria: product["gsx$categoria"]["$t"],
				descripcion: product["gsx$descripcion"]["$t"],
				detalles: product["gsx$detalles"]["$t"],
				presentaciones: product["gsx$presentaciones"]["$t"],
				foto: product["gsx$foto"]["$t"]
			})
		};
		Product.refresh(products);
	}
}

module.exports = init();