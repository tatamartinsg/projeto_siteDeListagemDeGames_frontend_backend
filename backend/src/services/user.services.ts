import UserRepositories from '../repositories/user.repositories'
import UserInterface from '../services/interfaces/user.interface'
import bcrypt from 'bcrypt'
import JWT from '../config/jwt'

class UserServices{    

    async singUpUser(user: UserInterface):Promise< UserInterface | any>{
        try{
            const resultUsername = await UserRepositories.verifyUsername(user)
    
            if(resultUsername.length == 0){ //não existe esse username no banco, logo, pode cadastrar
                const resultEmail = await UserRepositories.verifyEmail(user)

                if(resultEmail.length == 0 ){
                    user.password = await bcrypt.hash(user.password, 8) 
                    const  response = await UserRepositories.signUpUser(user)
    
                    const resultFinal = {
                        message: "Usuário cadastrado com sucesso!",
                        _idUser: response.insertId,
                        username: user.username,
                        error: false
                    }
                    return resultFinal
                }               
            }
            const responseError = {
                message: "Username ou Email já existe!",
                error: true
            }
            return responseError
        }catch(error){
            console.log(error)
            return error
        }
    }
    async singInUser(user: UserInterface):Promise <UserInterface | any> {
        try{
            if(user.username){ //para logar usando o username
                const resultUsername = await UserRepositories.verifyUsername(user)
                if(resultUsername.length == 1){ //tem usuario com esse username          
                    const passwordIsValid = await bcrypt.compare(user.password,resultUsername[0].password)  
                    if(passwordIsValid){
                        return ({
                            error:false,
                            auth: true,
                            message: "Logged with sucessful!",
                            idUser: resultUsername[0].idUser,
                            username: resultUsername[0].username,
                            token: JWT.generateToken(user)
                        })
                    }
                    return {error: true, message: "Password is incorrect!"}
                }
                return {message: "Username not found.", error: true}
            }

            if(user.email){ //para logar usando o email
                const resultEmail = await UserRepositories.verifyEmail(user)
                if(resultEmail.length == 1){ //tem usuario com esse Email                    
                    const passwordIsValid = await bcrypt.compare(user.password,resultEmail[0].password)  
                    if(passwordIsValid){
                        return ({
                            error:false,
                            auth: true,
                            message: "Logged with sucessful!",
                            idUser: resultEmail[0].idUser,
                            username: resultEmail[0].username,
                            token: JWT.generateToken(user)
                        })
                    }
                    return {error: true, message: "Password is incorrect!"}
                }
                return {message: "Email not found.", error: true}
            }
        }catch(error){
            console.log(error)
            return error
        }
    }

}

export default new UserServices() 