const roteador = require('express').Router()
const TabelaObjeto = require('./TabelaObjeto')
const Objeto = require('./objeto')

roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaObjeto.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
})

roteador.post('/', async (requisicao, resposta) => {
    const dadosRecebidos = requisicao.body
    const objeto = new Objeto(dadosRecebidos)
    await objeto.criar()
    resposta.send(
        JSON.stringify(objeto)
    )
})

module.exports = roteador