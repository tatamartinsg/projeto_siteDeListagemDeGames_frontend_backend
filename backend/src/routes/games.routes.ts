import { Router } from 'express'
import GamesController from '../controllers/games.controller'
import verifyJWT from '../middleware/user.auth'

const gamesRouter = Router()


gamesRouter.delete('/deleteGameById', GamesController.deleteGameById)

gamesRouter.post('/listaDeGames', GamesController.getListaDeGamesByIdUserEncrypted)

gamesRouter.post('/add/listingCode', GamesController.addListingCode)

gamesRouter.get("/list", verifyJWT , GamesController.verifyJWTAutentication)

gamesRouter.get('/images', GamesController.getGames)

gamesRouter.get('/category/:nameCategory', GamesController.getGamesByCategory)

gamesRouter.get('/:idGame', GamesController.getAllDataGameById)



export default gamesRouter