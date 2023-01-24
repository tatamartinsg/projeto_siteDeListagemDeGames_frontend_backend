import UserRepositories from '../repositories/user.repositories'
import UserInterface from '../services/interfaces/user.interface'
import bcrypt from 'bcrypt'
class UserServices{    

    async singUpUser(User: UserInterface):Promise< UserInterface | any>{
        try{
            const resultUsername = await UserRepositories.verifyUsername(User)
    
            if(resultUsername.length == 0){ //não existe esse username no banco, logo, pode cadastrar
                User.password = await bcrypt.hash(User.password, 8) 
                const  response = await UserRepositories.signUpUser(User)

                const resultFinal = {
                    message: "User was sign up sucessfuly!",
                    _idUser: response.insertId,
                    username: User.username,
                    error: false
                }
                return resultFinal
            }
            const responseError = {
                message: "Username alredy exists!",
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
                            idUser: resultUsername[0].idUser
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
                            idUser: resultEmail[0].idUser
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