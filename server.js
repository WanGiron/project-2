var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api_routes")(app);

var exphbs = require("express-handlebars");
app.set('views', __dirname + '/app/views');

app.engine("handlebars", exphbs({ defaultLayout: "main",
    layoutsDir:'app/views/layouts',
    partialsDir:'app/views'
}));
app.set("view engine", "handlebars");

//var router = require("./app/routes/api_routes.js");

//app.use(router);

app.listen(PORT, ()=>{
    console.log('Server listenning to http://localhost:'+PORT);
})