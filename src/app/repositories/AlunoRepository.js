import dotenv from 'dotenv'
import Db from '../database/db.js'

/**
 * Configurar o DotEnv para ocultar informações sensíveis: login e senha do Banco de Dados
 */
dotenv.config()

/**
 * Classe para realizar requisições no Banco de Dados
 * @author Thalles Nascimento
 * @class
 */
class AlunoRepository {

    /**
     * Construtor que realiza a injeção da instância da classe db
     * @constructor
     */
    constructor(){
        this.db = Db.conection(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST, process.env.DB_PORT, process.env.DB_NAME)
    }

    /**
     * 
     * @returns Retorna Todos os Registros do Banco de Dados
     */
    async findAll(){
        try{
            const row = await this.db.sql_select_all()
            return row
        }
        catch (erro){
            return erro
        }
    }

    /**
     * 
     * @param {Number} id ID do registro que quer buscar
     * @returns Retorna o registro com um ID específico
     */
    async findById(id){
        try{
            const row = await this.db.sql_select_id(id)
            return row
        }
        catch (erro){
            return erro
        }
    }

    /**
     * 
     * @param {JSON} aluno Nome e grupo
     * @returns Retorna a inserção do objeto no Banco de Dados
     */
    async create(aluno){
        try{
            const row = await this.db.sql_insert(aluno)
            return row
        }
        catch (erro){
            return erro
        }

    }

    /**
     * 
     * @param {JSON} aluno Nome e/ou Grupo que deseja atualizar
     * @param {Number} id ID do registro que deseja atualizar
     * @returns Retorna a atualização do objeto no Banco de Dados
     */
    async update(aluno, id){
        const row = await this.db.sql_update(aluno, id)
        return row
    }

    /**
     * 
     * @param {Number} id ID do registro que deseja Deletar
     * @returns Retorna o objeto deletado do Banco de Dados
     */
    async delete(id){
        const row = await this.db.sql_delete(id)
        return row
    }
}

/**
 * Padrão Singleton -> Designer Patterns
 *      Foi criada e exportada apenas uma instância da classe AlunoRepository
 *  */ 
export default new AlunoRepository()
