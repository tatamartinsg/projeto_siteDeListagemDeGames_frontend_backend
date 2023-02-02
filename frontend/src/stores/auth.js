import { computed, ref } from 'vue'
import http from '../services/http.js'
import { defineStore } from "pinia";

const useAuth = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token'))
    const username = ref((JSON.stringify(localStorage.getItem('username'))))

    function setToken(tokenValue){
        localStorage.setItem('token',tokenValue)
        token.value = tokenValue
    }
    function setUsername(usernameValue){
        localStorage.setItem('username',usernameValue)
        username.value = usernameValue
    }
    function isAuthenticated(){
        return getToken() && getUsername()
    }
    function userLogout(){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        token.value = ''
        username.value = ''
    }
    async function verifyToken(){
        try{
            console.log(token.value)
            const tokenBearer = 'Baerer'+ ' ' + token.value
            const { data } = await http.get('/users/auth/verify',
                {
                    headers:{
                        Authorization: tokenBearer
                    }
                }
            )
            console.log(username)
            console.log(data)
            return data 

        }catch(error){
            console.log("Erro verifyToken")
            console.log(error.response.data)
            return ({error: true, message: "Erro verifyToken"})
        }
    }
    function getToken(){
        return token.value
    }
    function getUsername(){
        if(username.value != ''){
            return username.value
        }  
        return username.value  
    }
    return {
        setToken,
        setUsername,
        verifyToken,
        getToken,
        getUsername,
        isAuthenticated,
        userLogout
    }
})

export default useAuth