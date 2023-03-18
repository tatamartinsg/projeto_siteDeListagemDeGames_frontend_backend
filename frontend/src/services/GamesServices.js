import http from './http.js'

class GamesServices{
    async getGames(){
        try{
            const { data } = await http.get(`/games/images`)
            return data

        } catch(error){
            console.log(error)
            return error
        }   
    }
    async getGamesByCategoria(nameCategory){
        try{
            const { data }  = await http.get(`/games/category/${nameCategory}`)
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
            const { data } = await http.get(`/games/${id}`)
            return data
            
        } catch(error){
            console.log(error)
            return error
        }
    }

    async getListaDeGamesByIdEncrypted(idUserEncrypted, username){
        try{
            const body ={
                username: username,
                idUserE: idUserEncrypted
            }
            const { data } = await http.post(`/games/listaDeGames`,body)
            return data
            
        } catch(error){
            console.log(error)
            return error
        }
    }

    async addListingCodeByIdUser(body){
        try{
            const { data } = await http.post('/games/add/listingCode', body)
            return data
        }catch(error){
            console.log(error)
        }
    }

    
    async deleteGameById(body){
        try{
            const { response } = await http.delete('/games/deleteGameById', { 
                data: { 
                    username: body.username,
                    idUserE: body.idUserE,
                    idGame: body.idGame,
                    listingCode: body.listingCode
                }
            })
            return response
        }catch(error){
            console.log(error)
        }
    }
}

export default new GamesServices()