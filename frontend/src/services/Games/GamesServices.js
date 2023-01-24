import api from '../api.js'

class GamesServices{
    async getGames(){
        try{
            const { data } = await api.get(`/games/images`)
            return data

        } catch(error){
            console.log(error)
            return error
        }   
    }
    async getGamesByCategoria(nameCategory){
        try{
            const { data }  = await api.get(`/games/category/${nameCategory}`)
            console.log(data)
            console.log(nameCategory)
            return data 

        } catch(error){
            console.log(error)
            return error
        }   
    }
    async getGameByID(id){
        try{
            const { data } = await api.get(`/games/${id}`)
            return data
            
        } catch(error){
            console.log(error)
            return error
        }
    }
}

export default new GamesServices()