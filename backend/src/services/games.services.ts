import GamesRepositories from "../repositories/games.repositories";
import GameInterface from "./interfaces/game.interface";

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
    

}

export default new GamesServices()