import { Router } from 'express'
import usuarioController from '../controllers/user.controller'
import verifyJWT from '../middleware/user.auth'

const usuarioRouter = Router()

usuarioRouter.post('/signUp', usuarioController.signUpUser)
usuarioRouter.post('/signIn', usuarioController.signInUser)
usuarioRouter.get('/auth/verify', verifyJWT, usuarioController.verifyAuth)

export default usuarioRouter