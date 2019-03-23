var Sequelize = require("sequelize");
var port = process.env.PORT || 3306;

var sequelize = new Sequelize("daycare_db", "root", "Pollito#2", {
    host:"localhost",
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

module.exports = sequelize;