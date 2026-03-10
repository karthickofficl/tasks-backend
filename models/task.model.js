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
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Title cannot be empty"
            }
        }
    },
    description: {
        type: sequalize.STRING,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Description cannot be empty"
            }
        }
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