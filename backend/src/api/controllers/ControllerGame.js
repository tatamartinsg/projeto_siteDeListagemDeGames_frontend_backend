const ServicesGame = require('../Services/ServicesGame.js')

class ControllerGame{
    getGamesControl(){
        return ServicesGame.getGamesServices()    
    }
    getGameByIdControl(idJogo){
        return ServicesGame.getGameByIdServices(idJogo)
    }
    getCategoriasGameByIdControl(idJogo){
        return ServicesGame.getCategoriasGameByIdServices(idJogo)
    }
    getPlataformasGameByIdControl(idJogo){
        return ServicesGame.getPlataformasGameByIdServices(idJogo)
    }
    getClassificacaoGameByIdControl(idJogo){
        return ServicesGame.getClassificacaoGameByIdServices(idJogo)
    }
    getDescricaoClassificacaoGameByIdControl(idJogo){
        return ServicesGame.getDescricaoClassificacaoGameByIdServices(idJogo)
    }
    getGamesByCategoriaControl(nomeCategoria){
        return ServicesGame.getGamesByCategoriaServices(nomeCategoria)
    }
}

module.exports = new ControllerGame