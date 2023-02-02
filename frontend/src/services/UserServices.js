import http from './http.js'


class UserServices{
    async cadastrarUser(body){
        try{
            const { data } = await http.post('/users/signUp', body)
            return data

        }catch(error){
            console.log(error)
            return error
        }
    }

    async fazerLogin(body){
        try{
            const { data } = await http.post('/users/signIn', body)
            return data

        }catch(error){
            console.log(error)
            return error
        }
    }

}

export default new UserServices()