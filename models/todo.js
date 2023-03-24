const Sequelize = require("sequelize");
const sequelize = require("../db/init.js");

const Todo = sequelize.define("todo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isDone: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
});

module.exports = Todo;