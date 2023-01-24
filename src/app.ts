import expressConfig from './config/express'
import usuarioRouter from './routes/usuario.routes'

class App{
    private app = expressConfig.getExpress()
    private port = 3000

    constructor(){
       
    }

    public getListen():void{
        this.listen()
        this.routes()
    }

    private async listen(): Promise<void>{
        await this.app.listen(this.port, () => {
            console.log('Servidor iniciado na porta:', this.port)
        })
    }
    private routes(): void{
        this.app.use('/usuarios', usuarioRouter)
    }
}

export default App