import UserRepositories from '../repositories/user.repositories'
import GamesRepositories from "../repositories/games.repositories";
import GameInterface from "./interfaces/game.interface";
import bcrypt from 'bcrypt'

class GamesServices{
    public async getGames(): Promise<GameInterface | any>{
        try{
            const response = await GamesRepositories.getGames()
            return response
            
        }catch(error){
            console.log(error)
            return error
        }
    }


    
    public async getGamesByCategory(nameCategory:string ): Promise<GameInterface>{
        try{
            const response = await GamesRepositories.getGamesByCategory(nameCategory)
            return response
        
        }catch(error){
            console.log(error)
            return error
        }
    }
    public async getAllDataGameById(idGame: string | number | any): Promise<GameInterface| any> {
        try{
            const gamesById = await GamesRepositories.getGameById(idGame)
            const categoryGameById = await GamesRepositories.getCategoriesGameById(idGame)
            const platformsGameById = await GamesRepositories.getPlatformGameById(idGame)
            const classificationGameById = await GamesRepositories.getClassificationGameById(idGame)
            const classDescriptionGameById = await GamesRepositories.getClassificationDescriptionGameById(idGame)

            const resultFinal = gamesById

            const categories = []
            const categoriesDescriptions = []

            for (let i = 0; i < categoryGameById.length; i++) {
                categories.push(categoryGameById[i].nameCategory)
            }
            for (let i = 0; i < classDescriptionGameById.length; i++) {
                categoriesDescriptions.push(classDescriptionGameById[i].description)
            }
    
            classificationGameById[0].description = categoriesDescriptions
            resultFinal[0].categories = categories
            resultFinal[0].platforms = platformsGameById
            resultFinal[0].classification= classificationGameById

            return resultFinal 
        
        }catch(error){
            console.log(error)
            return error
        }
    }
    public async getListaDeGamesByIdUserEncrypted(idUserEncrypted: string | number | any, username:string): Promise<GameInterface| any> {
        try{
            // const idUser = await bcrypt.compare(user.password,resultUsername[0].password) 

            const verifyUserByUsername = await UserRepositories.verifyUsername(username)
            if(verifyUserByUsername){

                const idUser = verifyUserByUsername[0].idUser.toString()
                console.log(idUser)
                
                const verifyId =  await bcrypt.compare(idUser, idUserEncrypted)

                if(verifyId){
                    const response = await GamesRepositories.getListaDeGamesByIdUserEncrypted(idUser)
                    console.log(response)
                    return response
                }
                return {error: true, message: "id não está correto!"}
            }

            return {error: true, message: "não existe esse username"}

        }catch(error){
            console.log(error)
            return error
        }
    }

    public async addUserListingCode(idUserEncrypted: string | number | any, username:string, idGame:number, listingCode:Array): Promise<GameInterface| any> {
        
        try{
            const verifyUserByUsername = await UserRepositories.verifyUsername(username)

            if(verifyUserByUsername){

                const idUser = verifyUserByUsername[0].idUser.toString()
                const verifyId =  await bcrypt.compare(idUser, idUserEncrypted)

                if(verifyId){
                   

                    for(let i=0; i < listingCode.length; i++){   
                       const verifyListingCode = await GamesRepositories.verifyUserListingCode(idGame,idUser,listingCode[i])
                
                       if(verifyListingCode.length == 0){
                            //se o jogo não estiver listado, insere no banco
                            const response = await GamesRepositories.addUserListingCode(idGame,idUser, listingCode[i])
                       }
                    }   
                    return {error: false, message:"Jogo listado com sucesso!"}
                }
                return {error: true, message: "id não está correto!"}
            }

            return {error: true, message: "não existe esse username"}

        }catch(error){
            console.log(error)
        }
    }



}

export default new GamesServices()