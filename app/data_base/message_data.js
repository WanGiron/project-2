var Sequelize = require("sequelize");
var sequelize = require("../config/connections.js");

//// Creating a child model that matches up with DB
var child = sequelize.define("children", {
    child_name: Sequelize.STRING,
    parent_name: Sequelize.STRING
});


var newMessage = sequelize.define("messages", {
    child_name: Sequelize.STRING,
    message_from_parent: Sequelize.STRING,
    status_message: Sequelize.STRING
});

//Grouping Both model into a single Object
var message_data = {
    Children: child,
    message: newMessage  
}

module.exports = message_data;