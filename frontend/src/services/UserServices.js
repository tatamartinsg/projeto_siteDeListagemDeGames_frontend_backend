import api from './api.js'


class UserServices{
    async cadastrarUser(body){
        try{
            const { data } = await api.post('/users/signUp', body)
            return data

        }catch(error){
            console.log(error)
            return error
        }
    }

    async fazerLogin(body){
        try{
            const { data } = await api.post('/users/signIn', body)
            return data

        }catch(error){
            console.log(error)
            return error
        }
    }

}

export default new UserServices()