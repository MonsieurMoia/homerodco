var fs = require("fs");

//2: Define the Template to load when Device type is Phone

_3vot.el.innerHTML = fs.readFileSync( __dirname + "/views/layout.html"  );

//var layout = fs.readFileSync(  );

