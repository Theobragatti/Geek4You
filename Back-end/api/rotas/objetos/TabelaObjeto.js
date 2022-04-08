const Modelo = require('./ModeloTabelaObjeto')

module.exports = {
    listar() {
        return Modelo.findAll()
    },
    inserir(objeto){
        return Modelo.create(objeto)
    }
}