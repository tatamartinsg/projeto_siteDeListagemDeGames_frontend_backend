import App from './app'
import conexao from './model/conexao'

conexao.connect(error => {
    if(error){
        console.log("Erro ao conectar com o banco de dados",error)
    }
    else{
        console.log("Conectou ao banco de dados com sucesso! =D")
        new App().getListen()
    }
})

