var daycare_data = require("../data_base/daycare_data.js");
var message_data = require("../data_base/message_data.js");
var express = require("express");
//var router = express.Router();

module.exports = (app) => {
    //Administrator site //
    app.get("/api/administrator", (req, res) => {
        daycare_data.children.findAll({}).then((results) => {
            //var newData = parse(results);
            res.render("index", {
                data: results
            })
        });
    });


// view messages from admin site / kids //
    app.get("/api/adiministrator/messages", (req, res) => {
        message_data.message.findAll({}).then((results) => {
            res.render("index", {
                messageData: results
            })
        });
    });

    // Findig one child for admin site for activities//
    app.get("/api/admin-activity-site/:childName", (req, res) => {
        daycare_data.activities.findAll({
            where:{
                child_name: req.params.childName
            }
        }).then((results) => {
            var childName = results[0].dataValues.child_name;
            res.render("adminAct", {
                data: results,
                data2: childName
            })
        });
    });

    //Pulling All messages from admin site kids tab based on name//
    app.get("/api/admin-message-site/:childName", (req, res) => {
        //var name = req.params.name;
        message_data.message.findAll({
            where: {
                child_name: req.params.childName
              }
        }).then((results) => {
            var childName = results[0].child_name;
            res.render("messages", {
                data3: results,
                dataName: childName
            })
        });
    });

     //Adding a New Child Into DB for administrator site //
     app.post("/api/new/child", (req, res) => {
        console.log("daycare data:");
        //console.log(req.body);
        daycare_data.children.create({
            child_name: req.body.child_name,
            child_last_name: req.body.child_last_name,
            date_of_birth: req.body.date_of_birth,
            parent_name: req.body.parent_name
        }).then((results)=>{
            res.end();
        });
    });

    // Reqding All children in DB
    // app.get("/api/all-activities", (req, res) => {
    //     daycare_data.activities.findAll({}).then((results) => {
    //         //var newData = parse(results);
    //         res.render("index", {
    //             data: results
    //         })
    //         //console.log(results);
    //     });
    // });
   

    //Adding a New Activities Into DB for administrator site
    app.post("/api/new/activity", (req, res) => {
        console.log("daycare data:");
        console.log(req.body);

        daycare_data.activities.create({
        child_name: req.body.child_name,
        activity_type: req.body.activity_type,
       
        }).then((results)=>{
            res.end();
        });
    });
           //  This is for client site // 
    // //Pulling All activities based on child name //
    // app.get("/api/activity/:name", (req, res) => {
    //     var name = req.params.name;
    //     daycare_data.activities.findAll({
    //         where: {
    //             child_name: name
    //           }
    //     }).then((results) => {
    //         res.json(results);
    //     });
    // });

    // Findig one child for clients site for activities//
    app.get("/api/client-site/:childName", (req, res) => {
        daycare_data.activities.findAll({
            where:{
                child_name: req.params.childName
            }
        }).then((results) => {
            var childName = results[0].child_name;
            res.render("client", {
                data: results,
                data2: childName,
            })

            console.log("this is child name"+childName);
            
        });
        
    });

    //Adding a new message Into DB for client site//
    app.post("/api/new/message", (req, res) => {
        console.log("message-data");
        console.log(req.body);

        message_data.message.create({
        child_name: req.body.child_name,
        message_from_parent: req.body.message_from_parent,
  
        }).then((results)=>{
            res.end();
        });
    });
}

