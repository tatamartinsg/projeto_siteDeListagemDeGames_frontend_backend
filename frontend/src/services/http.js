import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:3000',
    headers:{
        'Accept': 'application/json',
        'Content' : 'application/json'
    }
})

// http.interceptors.request.use(
//     (config)=>{
//         const token = provedor.state.token
//         if(token){
//             config.headers.Authorization = `Bearer ${token}`
//         }
//         return config     
//     }, 
//     (error) => {
//         return Promise.reject(error)
//     })

export default http