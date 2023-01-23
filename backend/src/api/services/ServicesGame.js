const query = require('../model/queries.js')

class ServicesGame{
    getGamesServices(){
        const sql = 'SELECT * FROM jogo NATURAL JOIN imagem;'
        return query(sql)
    }
    getGameByIdServices(idJogo){
        const sql = `SELECT * FROM jogo 
                    NATURAL JOIN imagem 
                    WHERE idJogo = ${idJogo}  `
        return query(sql)
    }
    getCategoriasGameByIdServices(idJogo){
        const sql = `SELECT nomeCategoria FROM jogo 
                    NATURAL JOIN jogo_has_categoria
                    NATURAL JOIN categoria
                    WHERE idJogo = ${idJogo}  `
        return query(sql)
    }
    getPlataformasGameByIdServices(idJogo){
        const sql = `SELECT nomePlataforma, urlJogo FROM jogo 
                    NATURAL JOIN jogo_has_plataforma
                    NATURAL JOIN plataforma
                    WHERE idJogo = ${idJogo}  `
        return query(sql)
    }
    getClassificacaoGameByIdServices(idJogo){
        const sql = `SELECT classificacao, imagem FROM jogo
                    NATURAL JOIN classificacao
                    WHERE idJogo = ${idJogo};`
        return query(sql)
    }
    getDescricaoClassificacaoGameByIdServices(idJogo){
        const sql = `SELECT descricao FROM jogo
                    NATURAL JOIN classificacao_has_descricao
                    NATURAL JOIN descricao
                    WHERE idJogo = ${idJogo};`
        return query(sql)
    }
    getGamesByCategoriaServices(nomeCategoria){
        console.log(nomeCategoria)
        const sql = `SELECT * FROM jogo
                    NATURAL JOIN jogo_has_categoria
                    NATURAL JOIN categoria
                    NATURAL JOIN imagem
                    WHERE nomeCategoria LIKE '%${nomeCategoria}%';`
        return query(sql)
    }
}

module.exports = new ServicesGame