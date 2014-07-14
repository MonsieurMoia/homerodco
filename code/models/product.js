var _3Model = require("3vot-model/lib/ajaxless")

// var fields = ["title", "date", "description", "link"]; 
var fields = ["nombre", "marca", "categoria", "descripcion", "detalles" , "presentaciones" , "foto"]; 

Product = _3Model.Model.setup("Product", fields);

module.exports = Product