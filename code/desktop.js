var fs = require("fs");

_3vot.el.innerHTML = fs.readFileSync( __dirname + "/views/layout.html"  );

//Product Model
var Product = require("./models/product")

//Controller for RODCO Products List
var List = require("./controllers/list")
List("products")

//Controller for HILCO Products List
var HilcoList = require("./controllers/hilcoList")
HilcoList("hilcoProducts")

//Controller for YALE Products List
var YaleList = require("./controllers/yaleList")
YaleList("yaleProducts")

//Controller for Condusal Products List
// var CondusalList = require("./controllers/condusalList")
// CondusalList("condusalProducts")

// //Controller for Coflex Products List
// var CoflexList = require("./controllers/coflexList")
// CoflexList("coflexProducts")

require("./managers")








