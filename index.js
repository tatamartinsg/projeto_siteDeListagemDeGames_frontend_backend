const expressConfig = require('./src/config/express.js')
const conexao = require('./src/api/infrastructure/conexao.js')
const PORT = 3000

conexao.connect( error => {
    if(error){
        console.log("Erro ao conectar com o banco de dados:", error)
    }else{
        console.log("Conectou ao banco de dados com sucesso! =D")
        const app = expressConfig()
        // o servidor irá rodar dentro da porta 3000
        app.listen(PORT, () => {
            console.log(`Express started at http://localhost:${PORT}`)
        });

        // app.use((req,res,next) => {
        //     const erro = new Error("Não encontrado")
        //     erro.status = 404
        //     next(erro)
        // })
        
        // app.use((error,req,res,next) => {
        //     res.status(error.status || 500)
        //     return res.send({
        //         erro:{
        //             mensagem: error.message
        //         }
        //     })
        // })

    }
})


















