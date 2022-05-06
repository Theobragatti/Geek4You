const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING, // ENUM
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'objetos',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instancia.define('objeto', colunas, opcoes)