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
        allowNull: true,
        alidate: {
            notEmpty: {
                msg: "Name cannot be empty"
            }
        }
    },
    email: {
        type: sequalize.STRING,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Email cannot be empty"
            }
        }
    },
    password: {
        type: sequalize.STRING,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: "Password cannot be empty"
            },
            len: {
                args: [6, 20],
                msg: "Password must be between 6 and 20 characters long"
            }
        }
    }
},
    {
        paranoid: true
    });

module.exports = user;