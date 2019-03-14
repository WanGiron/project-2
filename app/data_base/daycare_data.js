var Sequelize = require("sequelize");
var sequelize = require("../config/connections.js");

//// Creating a child model that matches up with DB
var child = sequelize.define("children", {

    child_name: Sequelize.STRING,
    parent_name: Sequelize.STRING,
});

//// Creating an activities model that matches up with DB
var activity = sequelize.define("activities", {
    child_name: Sequelize.STRING,
    activity_type: Sequelize.STRING,
    activity_time: Sequelize.DATE
});


// Associating 'child' with 'activity'
// child.hasMany(activity, {
//     onDelete: "cascade"
// });

// activity.belongsTo(child, {
//     foreignKey: {
//         allowNull: false
//     }
// });

// child.sync();
// activity.sync();

//Grouping Both model into a single Object
var daycare_data = {
    children: child,
    activities: activity
}

module.exports = daycare_data;