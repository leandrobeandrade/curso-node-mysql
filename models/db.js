const Sequelize = require('sequelize')

// == Conexão com o BD MySql
const sequelize = new Sequelize('postapp', 'root', 'leandro1234', {
    host: 'localhost',      // servidor
    dialect: 'mysql'        // tipo de banco
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}