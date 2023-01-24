import { Router } from 'express'
import GamesController from '../controllers/games.controller'

const gamesRouter = Router()

gamesRouter.get('/images', GamesController.getGames)
gamesRouter.get('/category/:nameCategory', GamesController.getGamesByCategory)
gamesRouter.get('/:idGame', GamesController.getAllDataGameById)


export default gamesRouter