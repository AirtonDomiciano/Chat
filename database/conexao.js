// Vai fazer a comunicação das querys do banco
const { Sequelize } = require('sequelize')

// data
const conect = new Sequelize('chat','root', 'asd123', {
    host:'localhost',
    dialect: 'mysql'
})

module.exports = conect

