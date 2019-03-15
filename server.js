var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var exphbs  = require('express-handlebars');
var path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("app/public"));


// Routes
// =============================================================
require("./app/routes/api_routes")(app);


app.listen(PORT, ()=>{
    console.log('Server listenning to http://localhost:'+PORT);
});



// app.set("view engine", path.join(__dirname + '/app/views/layouts/'));
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
// app.use(express.static(path.join(__dirname + '/app/public')));

// app.engine('.hbs', exphbs({
//     defaultLayout: 'main',
//     extname: '.hbs',
//     layoutsDir: path.join(__dirname, 'views/layouts')
//   }));
//   app.set('view engine', '.hbs');
//   app.set('views', path.join(__dirname, '/app/views/'));

