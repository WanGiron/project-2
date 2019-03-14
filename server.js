var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api_routes")(app);

app.listen(PORT, ()=>{
    console.log('Server listenning to http://localhost:'+PORT);
})