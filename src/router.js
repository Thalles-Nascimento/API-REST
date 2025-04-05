import express from 'express'
import AlunoController from './app/controllers/AlunoController.js'


/**
 * Classe reponsável por criar as rotas da API
 * @author Thalles Nascimento
 * @description Criar rotas para APIs configuradas na @class AlunoController
 * 
 * @class
 */
class Router{

    /**
     * Construtor da Classe Router
     * @constructor 
     */
    constructor(){
        /**
         * Aliás para a função express
         */
        this.router = express()
        this.router.use(express.json())
    }
    /**
     * Método para liberar uma porta no servidor para ser ouvida
     * 
     * @param {String} patch Caminho para o Servidor 
     * @param {Number} port Porta para acesso ao Servidor
     */
    listen(patch, port){
        this.router.listen(port,() =>{
            console.log("Conexão estabelecida")
            console.log(`Endereço: ${patch}:${port}`)
        })

    }
    /**
     * Método para buscar todos os registro do Banco de Dados
     */
    get_all(){
        this.router.get('/listas', AlunoController.index)
    }
    /**
     * Método para buscar um registro com ID específico no Banco de Dados
     */
    get_by_id(){
        this.router.get('/listas/:id', AlunoController.show)
    }
    /**
     * Método para inserção de dados no Banco de Dados
     */
    insert(){
        this.router.post('/listas', AlunoController.store)
    }
    /**
     * Método para atualizar um registro do Banco de Dados
     */
    update(){
        this.router.put('/listas/:id', AlunoController.update)
    }
    /**
     * Método para deletar um registro no Banco de Dados
     */
    delete(){
        this.router.delete('/listas/:id', AlunoController.delete)
    }

}

/**
 * Padrão Singleton -> Designer Patterns
 *      Foi criada e exportada apenas uma instância da classe Router
 * 
 * @Instância
 *  */ 
export default new Router()
