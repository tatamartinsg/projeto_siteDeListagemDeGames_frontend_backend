import ServicesUsuario from '../../services/usuario.services'
import { Request, Response } from 'express';
import UsuarioInterface from '../../services/interfaces/usuario.interface';

class UsuarioController{

    private async verificaUsername(req:Request, res: Response): Promise <UsuarioInterface | any>{
        try{
            const usuario: UsuarioInterface = req.body
        }catch(error){

        }
    }

    public async cadastrarUsuario(req:Request, res:Response) :Promise< UsuarioInterface | any>{
        try{
            const usuario: UsuarioInterface = req.body
            
            const  responseQuery  = await ServicesUsuario.cadastrarUser(usuario)

            if (responseQuery.message == ""){
                responseQuery.message = "Usuário cadastrado com sucesso!"
                responseQuery.error = false
            }
            const result = {
                message: responseQuery.message,
                _idUsuario: responseQuery.insertId,
                username: usuario.username,
                error: responseQuery.error
            }
            console.log(responseQuery)
            return res.json(result);
        }
        catch(error){
            console.log(error)
            const message = "Erro ao cadastrar usuário"
            return res.json({
                error: true,
                message: message
            })
        }
    }
}

export default new UsuarioController()