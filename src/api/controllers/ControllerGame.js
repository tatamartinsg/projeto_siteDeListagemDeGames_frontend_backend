const PersistenciaGame = require('../persistencia/PersistenciaGame.js')

class ControllerGame{
    getGamesControl(){
        const response = PersistenciaGame.getGamesPersistencia();
        return response
    }
}

module.exports = new ControllerGame