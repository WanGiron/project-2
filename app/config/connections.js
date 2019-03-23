var Sequelize = require("sequelize");
var port = process.env.PORT || 3306;

var sequelize = new Sequelize("y8h3lffj9ny2umdf", "rebb4wiu9t4460yi", "bg56mpksdpa6qqnb", {
    host:"otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
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