const query = require('../model/queries.js')

class PersistenciaGame{
    getGamesPersistencia(){
        const sql = 'SELECT * FROM jogo NATURAL JOIN imagem;'
        return query(sql)
    }
}

module.exports = new PersistenciaGame