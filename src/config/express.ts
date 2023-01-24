import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

class ExpressConfig{
    private express: express.Application

    constructor(){
        this.express = express()
        this.middlewares()
    }

    public getExpress():express.Application{
        return this.express
    }
    
    private middlewares():void{
        this.express.use(morgan('dev'))
        this.express.use(bodyParser.urlencoded({ extended: false }))
        this.express.use(bodyParser.json())
        this.express.use(cors())
        
    }
}

export default new ExpressConfig()