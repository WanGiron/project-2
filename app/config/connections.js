
var Sequelize = require("sequelize");
var port = process.env.PORT || 3306;

var sequelize = new Sequelize("voni79jxs6rfvaez", "vga9ankjkkwe1ixj", "qjk4w9qnz43wi0n4", {
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