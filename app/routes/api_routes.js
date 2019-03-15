var daycare_data = require("../data_base/daycare_data.js");
var application = require('express');
var router = application.Router();

module.exports = (app) => {

    app.get('/', function (req, res) {
        res.render('index');
    });
    // router.get('/', function (req, res) {
    //     res.render('index');
    // });


    // Reqding All children in DB
    app.get("/api/all", (req, res) => {
        daycare_data.children.findAll({}).then((results) => {
            res.json(results);
        });
    });

    //Adding a New Child Into DB
    app.post("/api/new/child", (req, res) => {
        console.log("daycare data:");
        console.log(req.body);

        daycare_data.children.create({
            child_name: req.body.child_name,
            parent_name: req.body.parent_name
        }).then((results)=>{
            res.end();
        });
    });

    //Adding a New Activities Into DB
    app.post("/api/new/activity", (req, res) => {
        console.log("daycare data:");
        console.log(req.body);

        daycare_data.activities.create({
        child_name: req.body.child_name,
        activity_type: req.body.activity_type,

        // activity_time: req.body.activity_time        
        }).then((results)=>{
            res.end();
        });
    });

    //Pulling All activities based on child name
    app.get("/api/activity/:name", (req, res) => {
        var name = req.params.name;
        daycare_data.activities.findAll({
            where: {
                child_name: name
              }
        }).then((results) => {
            res.json(results);
        });
    });
}
