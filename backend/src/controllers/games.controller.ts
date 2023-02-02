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

    public async teste(req:Request, res: Response){
        return res.json({message:"message"})
    }

    public async getListaDeGamesByIdUserEncrypted(req:Request, res: Response){
        // console.log(req)
        console.log("entrouuuuuuuuuuuuu")
        const username  = req.body.username.replace(/["]/g, '') 
        const  idUserE  = req.body.idUserE.replace(/["]/g, '') 

        return res.json( await GamesServices.getListaDeGamesByIdUserEncrypted(idUserE,username) )
    }
}
export default new GamesController()