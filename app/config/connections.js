var Sequelize = require("sequelize");
var port = process.env.PORT || 3306;

var sequelize = new Sequelize("orolog6w9j1s72l4", "omcyw45bmqhwjxk6", "c7bj0r67uqrvug9c", {
    host:"v02yrnuhptcod7dk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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