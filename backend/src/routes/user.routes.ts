import { Router } from 'express'
import usuarioController from '../controllers/user.controller'

const usuarioRouter = Router()

usuarioRouter.post('/signUp', usuarioController.signUpUser)
usuarioRouter.post('/signIn', usuarioController.signInUser)


export default usuarioRouter