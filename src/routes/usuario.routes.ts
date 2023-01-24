import { Request, Response, Router } from 'express'
import usuarioController from '../controllers/Usuario/usuario.controller'

const usuarioRouter = Router()

usuarioRouter.post('/cadastrar', usuarioController.cadastrarUsuario)


export default usuarioRouter