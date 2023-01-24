import App from './app'
import conecction from './model/conecction.js'

conecction.connect(error => {
    if(error){
        console.log("Erro ao conectar com o banco de dados",error)
    }
    else{
        console.log("Conectou ao banco de dados com sucesso! =D")
        new App().getListen()
    }
})

