import express from 'express'
import AlunoController from './app/controllers/AlunoController.js'

class Router{

    constructor(){
        this.router = express()
        this.router.use(express.json())
    }

    listen(port){
        this.router.listen(port,() =>{
            console.log("Conexão estabelecida")
            console.log(`Endereço: http://localhost:${port}`)
        })

    }

    get_all(){
        this.router.get('/listas', AlunoController.index)
    }

    get_by_id(){
        this.router.get('/listas/:id', AlunoController.show)
    }

    insert(){
        this.router.post('/listas', AlunoController.store)
    }

    update(){
        this.router.put('/listas/:id', AlunoController.update)
    }

    delete(){
        this.router.delete('/listas/:id', AlunoController.delete)
    }

}


export default new Router()
