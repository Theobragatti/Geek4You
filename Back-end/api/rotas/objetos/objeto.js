const TabelaObjeto = require('./TabelaObjeto')

class Objeto{
    constructor({ id, email, categoria, dataCriacao, dataAtualizacao, versao}){
        this.id = id
        this.email = email
        this.categoria = categoria
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }

    async criar(){
        const resultado = await TabelaObjeto.inserir({
            email: this.email,
            categoria: this.categoria
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao = resultado.versao
    }
}

module.exports = Objeto