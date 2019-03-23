var Sequelize = require("sequelize");
var port = process.env.PORT || 3306;
// var env = process.env.NODE_ENV || "development";
// var config = require(__dirname + "/config.json")[env];

// var sequelize = new Sequelize(process.env[config.use_env_variable],{
//     host:"otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     PORT: port,
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
//     define: {
//         timestamps: false
//     }
//  });

var sequelize = new Sequelize("y8h3lffj9ny2umdf", "rebb4wiu9t4460yi", "wedq1n8maiorl5q6", {
    host:"otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    PORT: port,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false
    }
});

// var sequelize = new Sequelize("daycare_db", "root", "Pollito#2", {
//     host:"localhost",
//     PORT: port,
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
//     define: {
//         timestamps: false
//     }
// });

module.exports = sequelize;