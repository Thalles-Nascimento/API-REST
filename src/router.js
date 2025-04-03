import express from 'express'
import AlunoController from './app/controllers/AlunoController.js'

class Router{

    constructor(){
        this.router = express()
        this.router.use(express.json())
    }

    listen(port){
        this.router.listen(port,() =>{
            console.log(`Servidor rodando no endereço http://localhost:${port}`)
        })

    }

    get_all(){
        this.router.get('/listas', AlunoController.index)
    }

    get_by_id(){
        this.router.get('/listas/:id', AlunoController.show)
    }

}


export default new Router()
