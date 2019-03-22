const Sequelize = require("sequelize");
const port = process.env.PORT || 3306;

const mysql = require("mysql");

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "daycare_db"
    })
};


var sequelize = new Sequelize("daycare_db", "root", "root", {
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