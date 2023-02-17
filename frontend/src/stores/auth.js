import { computed, ref } from 'vue'
import http from '../services/http.js'
import { defineStore } from "pinia";

const useAuth = defineStore('auth', () => {
    const token = ref(localStorage.getItem('token'))
    const username = ref((JSON.stringify(localStorage.getItem('username'))))
    const idUserE = ref((JSON.stringify(localStorage.getItem('idUserE'))))

    function setToken(tokenValue){
        localStorage.setItem('token',tokenValue)
        token.value = tokenValue
    }
    function setUsername(usernameValue){
        localStorage.setItem('username',usernameValue)
        username.value = usernameValue
    }
    function setidUserE(idUserEValue){
        localStorage.setItem('idUserE',idUserEValue)
        idUserE.value = idUserEValue
    }
    function isAuthenticated(){
        return getToken() && getUsername() && getidUserE()
    }
    function userLogout(){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('idUserE')
        token.value = ''
        username.value = ''
        idUserE.value = ''
    }
    async function verifyToken(){
        try{
            const tokenBearer = 'Baerer'+ ' ' + token.value
            const { data } = await http.get('/users/auth/verify',
                {
                    headers:{
                        Authorization: tokenBearer
                    }
                }
            )
            return data 

        }catch(error){
            userLogout()
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
    function getidUserE(){
        return idUserE.value
    }
    return {
        setToken,
        setUsername,
        setidUserE,
        verifyToken,
        getToken,
        getUsername,
        getidUserE,
        isAuthenticated,
        userLogout
    }
})

export default useAuth