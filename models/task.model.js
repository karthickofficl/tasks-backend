const sequalize = require("sequelize");
const database = require("../database/database");

const task = database.define("task", {
    id: {
        type: sequalize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sequalize.STRING,
        allowNull: false
    },
    description: {
        type: sequalize.STRING,
        allowNull: false
    },
    status: {
        type: sequalize.STRING,
        allowNull: false,
        defaultValue: "pending"
    }
},
    {
        paranoid: true
    });

module.exports = task;