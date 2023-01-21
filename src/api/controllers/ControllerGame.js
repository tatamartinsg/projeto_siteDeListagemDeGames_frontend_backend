const PersistenciaGame = require('../persistencia/PersistenciaGame.js')

class ControllerGame{
    getGamesControl(){
        return PersistenciaGame.getGamesPersistencia()    
    }
    getGameByIdControl(idJogo){
        return PersistenciaGame.getGameByIdPersistencia(idJogo)
    }
    getCategoriasGameByIdControl(idJogo){
        return PersistenciaGame.getCategoriasGameByIdPersistencia(idJogo)
    }
    getPlataformasGameByIdControl(idJogo){
        return PersistenciaGame.getPlataformasGameByIdPersistencia(idJogo)
    }
    getClassificacaoGameByIdControl(idJogo){
        return PersistenciaGame.getClassificacaoGameByIdPersistencia(idJogo)
    }
    getDescricaoClassificacaoGameByIdControl(idJogo){
        return PersistenciaGame.getDescricaoClassificacaoGameByIdPersistencia(idJogo)
    }
    getGamesByCategoriaControl(nomeCategoria){
        return PersistenciaGame.getGamesByCategoriaPersistencia(nomeCategoria)
    }
}

module.exports = new ControllerGame