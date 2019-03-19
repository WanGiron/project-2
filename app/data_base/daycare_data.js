var Sequelize = require("sequelize");
var sequelize = require("../config/connections.js");

//// Creating a child model that matches up with DB
var child = sequelize.define("children", {
    child_name: Sequelize.STRING,
    child_last_name: Sequelize.STRING,
    date_of_birth: Sequelize.STRING,
    parent_name: Sequelize.STRING
});

//// Creating an activities model that matches up with DB
var activity = sequelize.define("activities", {
    child_name: Sequelize.STRING,
    activity_option: Sequelize.STRING,
    activity_type: Sequelize.STRING,
    activity_time: Sequelize.DATE
});

//Grouping Both model into a single Object
var daycare_data = {
    children: child,
    activities: activity
   
}

module.exports = daycare_data;