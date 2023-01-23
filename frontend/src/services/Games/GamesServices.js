import api from '../api.js'

class GamesServices{
    async getGames(){
        try{
            const { data } = await api.get(`/games-imagens`)
            return data

        } catch(error){
            console.log(error)
            return error
        }   
    }
    async getGamesByCategoria(nomeCategoria){
        try{
            const { data } = await api.get(`/categorias/${nomeCategoria}`)
            return data 

        } catch(error){
            console.log(error)
            return error
        }   
    }
    async getGameByID(id){
        try{
            const { data } = await api.get(`/game/${id}`)
            return data
            
        } catch(error){
            console.log(error)
            return error
        }
    }
}

export default new GamesServices()