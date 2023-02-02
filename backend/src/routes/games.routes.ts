import { Router } from 'express'
import GamesController from '../controllers/games.controller'
import authMiddleware from '../middleware/user.auth.middleware'
import verifyJWT from '../middleware/auth'

const gamesRouter = Router()

gamesRouter.get("/list", verifyJWT , GamesController.teste)

gamesRouter.get('/images', GamesController.getGames)

gamesRouter.get('/category/:nameCategory', GamesController.getGamesByCategory)

gamesRouter.get('/:idGame', GamesController.getAllDataGameById)



export default gamesRouter