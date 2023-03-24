const Sequelize = require("sequelize");

const sequelize = new Sequelize("todolist", "root", "1234", {
    port: 3306,
    dialect: 'mysql'
})

module.exports = sequelize;