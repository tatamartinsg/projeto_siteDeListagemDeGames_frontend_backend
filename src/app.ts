import expressConfig from './config/express'
import usuarioRouter from './routes/user.routes'
import gamesRouter from './routes/games.routes'

class App{
    private app = expressConfig.getExpress()
    private port = 3000

    public getListen():void{
        this.listen()
        this.routes()
    }

    private async listen(): Promise<void>{
        await this.app.listen(this.port, () => {
            console.log('Server was started at port:', this.port)
        })
    }
    private routes(): void{
        this.app.use('/users', usuarioRouter)
        this.app.use('/games', gamesRouter)
    }
}

export default App