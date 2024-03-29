import { Request, Response } from 'express';
import GamesServices from "../services/games.services";
import GameInterface from '../services/interfaces/game.interface';

class GamesController{
    public async getGames(req:Request, res:Response) :Promise< GameInterface | any>{      
        return res.json( await GamesServices.getGames() );
    }
    
    public async getGamesByCategory(req:Request, res:Response) :Promise< GameInterface | any>{
        const nameCategory = req.params.nameCategory
        return res.json( await GamesServices.getGamesByCategory(nameCategory))
    }
    public async getAllDataGameById(req:Request, res:Response) :Promise< GameInterface | any>{
        const idGame = req.params.idGame
        return res.json( await GamesServices.getAllDataGameById(idGame))
    }

    public async getListaDeGamesByIdUserEncrypted(req:Request, res: Response){   
        const  idUserE  = req.body.idUserE.replace(/["]/g, '') 
        const username  = req.body.username.replace(/["]/g, '') 
       
        return res.json( await GamesServices.getListaDeGamesByIdUserEncrypted(idUserE,username) )
    }
    
    public async verifyJWTAutentication(req:Request, res: Response){
        return res.json({message:"message"})
    }

    public async addListingCode(req:Request, res: Response){
        const  idUserE  = req.body.idUser.replace(/["]/g, '')
        const username  = req.body.username.replace(/["]/g, '') 
        const listingCode = req.body.listingCode
        const idGame = req.body.idGame
        
        return res.json(await GamesServices.addUserListingCode(idUserE,username, idGame, listingCode))
    }

    public async deleteGameById(req:Request, res: Response){
        const idUserE  = req.body.idUserE.replace(/["]/g, '') 
        const username = req.body.username.replace(/["]/g, '') 
        const listingCode = req.body.listingCode
        const idGame = req.body.idGame



        return res.json(await GamesServices.deleteGameById(idUserE,username, idGame, listingCode))
    }

   
   
    
}
export default new GamesController()