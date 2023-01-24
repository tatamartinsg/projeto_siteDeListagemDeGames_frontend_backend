import query from '../model/queries.js'
import UsuarioInterface from './interfaces/usuario.interface.js'

class ServicesUsuario{

    verificaUsername(usuario: UsuarioInterface ){
        const sql = `SELECT idUsuario FROM usuario
                    WHERE username = '${usuario.username}';`
        return query(sql)
    }

    async cadastrarUser(usuario: UsuarioInterface){
        const resultUsername = await this.verificaUsername(usuario)

        if(resultUsername.length == 0){ //não existe esse username no banco, logo, pode cadastrar
            const sql = `INSERT INTO usuario SET ?; `
            return await query(sql, usuario)
        }
        const responseError = {
            message: "Username existente!",
            error: true
        }
        return responseError
    }


}

export default new ServicesUsuario() 