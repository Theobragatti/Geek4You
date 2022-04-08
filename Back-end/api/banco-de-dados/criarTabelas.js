const ModeloTabela = require('../rotas/objetos/ModeloTabelaObjeto')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)