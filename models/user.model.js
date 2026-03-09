const sequalize = require("sequelize");
const database = require("../database/database");

const user = database.define("user", {
    id: {
        type: sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequalize.STRING,
        allowNull: false
    },
    email: {
        type: sequalize.STRING,
        allowNull: false
    },
    password: {
        type: sequalize.STRING,
        allowNull: false
    }
},
    {
        paranoid: true
    });

module.exports = user;