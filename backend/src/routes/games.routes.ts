import { Router } from 'express'
import GamesController from '../controllers/games.controller'
import verifyJWT from '../middleware/user.auth'

const gamesRouter = Router()

gamesRouter.post('/listaDeGames', GamesController.getListaDeGamesByIdUserEncrypted)

gamesRouter.get("/list", verifyJWT , GamesController.teste)

gamesRouter.get('/images', GamesController.getGames)

gamesRouter.get('/category/:nameCategory', GamesController.getGamesByCategory)

gamesRouter.get('/:idGame', GamesController.getAllDataGameById)



export default gamesRouter