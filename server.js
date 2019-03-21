var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;
var env = require('dotenv');
var passport   = require('passport');
var session    = require('express-session');
var data = require("./app/data_base/daycare_data");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/public')));

// Routes
// =============================================================
require("./app/routes/api_routes")(app);
require("./app/routes/html_routes")(app);

var exphbs = require("express-handlebars");
app.set('views', __dirname + '/app/views');

app.engine("handlebars", exphbs({ defaultLayout: "main",
    layoutsDir:'app/views/layouts',
    partialsDir:'app/views'
}));
app.set("view engine", "handlebars");


// For Passport
 
app.use(session({ secret: 'dunkins donuts', proxy: true, resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

//Models
var models = require("./app/models");
var authRoute = require('./app/routes/auth.js')(passport, app, data);
//load passport strategies
require('./app/config/passport/passport.js')(passport, data.Users);

// //Sync Database
// models.sequelize.sync().then(function() {
 
//     console.log('Nice! Database looks fine')
 
// }).catch(function(err) {
 
//     console.log(err, "Something went wrong with the Database Update!")
 
// });

app.listen(PORT, ()=>{
    console.log('Server listenning to http://localhost:'+PORT);
})