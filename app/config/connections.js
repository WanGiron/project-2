var Sequelize = require("sequelize");
var port = process.env.PORT || 3306;
const config = require(__dirname + "/../config/config.json")[env];

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
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
}



// var sequelize = new Sequelize("daycare_db", "root", "", {
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