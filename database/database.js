const Sequelize = require("sequelize");

const connection =  new Sequelize('projetopsi','root','admin',{
    host: 'localhost', 
    dialect: 'mysql', 
});

module.exports = connection;