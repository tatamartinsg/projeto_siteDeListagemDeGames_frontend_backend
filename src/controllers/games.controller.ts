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
}
export default new GamesController()