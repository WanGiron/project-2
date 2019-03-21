var Sequelize = require("sequelize");
var sequelize = require("../config/connections.js");

//// Creating a child model that matches up with DB
var child = sequelize.define("children", {
    child_name: Sequelize.STRING,
    child_last_name: Sequelize.STRING,
    date_of_birth: Sequelize.STRING,
    parent_name: Sequelize.STRING
});

// //message
// var message = sequelize.define("messages", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     child_name: Sequelize.STRING,
//     message_from_parent: Sequelize.STRING,

// });

//// Creating an activities model that matches up with DB
var activity = sequelize.define("activities", {
    child_name: Sequelize.STRING,
    activity_option: Sequelize.STRING,
    activity_type: Sequelize.STRING,
    activity_time: Sequelize.DATE
});

///User
var user = sequelize.define("users", {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    firstname: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    lastname: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    username: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    about: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_login: {
        type: Sequelize.DATE
    },
    status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
    }
});



//Grouping Both model into a single Object
var daycare_data = {
    Children: child,
    Activities: activity,
    // Message: message,
    Users: user
   
}

module.exports = daycare_data;