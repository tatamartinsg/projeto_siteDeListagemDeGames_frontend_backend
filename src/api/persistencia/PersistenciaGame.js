const query = require('../model/queries.js')

class PersistenciaGame{
    getGamesPersistencia(){
        const sql = 'SELECT * FROM jogo NATURAL JOIN imagem;'
        return query(sql)
    }
    getGameByIdPersistencia(idJogo){
        const sql = `SELECT * FROM jogo 
                    NATURAL JOIN imagem 
                    WHERE idJogo = ${idJogo}  `
        return query(sql)
    }
    getCategoriasGameByIdPersistencia(idJogo){
        const sql = `SELECT nomeCategoria FROM jogo 
                    NATURAL JOIN jogo_has_categoria
                    NATURAL JOIN categoria
                    WHERE idJogo = ${idJogo}  `
        return query(sql)
    }
    getPlataformasGameByIdPersistencia(idJogo){
        const sql = `SELECT nomePlataforma, urlJogo FROM jogo 
                    NATURAL JOIN jogo_has_plataforma
                    NATURAL JOIN plataforma
                    WHERE idJogo = ${idJogo}  `
        return query(sql)
    }
    getClassificacaoGameByIdPersistencia(idJogo){
        const sql = `SELECT classificacao, imagem FROM jogo
                    NATURAL JOIN classificacao
                    WHERE idJogo = ${idJogo};`
        return query(sql)
    }
    getDescricaoClassificacaoGameByIdPersistencia(idJogo){
        const sql = `SELECT descricao FROM jogo
                    NATURAL JOIN classificacao_has_descricao
                    NATURAL JOIN descricao
                    WHERE idJogo = ${idJogo};`
        return query(sql)
    }
}

module.exports = new PersistenciaGame