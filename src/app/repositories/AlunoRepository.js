import dotenv from 'dotenv'
import Db from '../database/db.js'

dotenv.config()

class AlunoRepository {

    constructor(){
        this.db = new Db(process.env.DB_USER, process.env.DB_PASSWORD)
    }

    // Buscar tudo
    async findAll(){
        try{
            const row = await this.db.sql_select_all()
            return row
        }
        catch (erro){
            return erro
        }

    }

    // Buscar por ID
    async findById(id){
        try{
            const row = await this.db.sql_select_id(id)
            return row
        }
        catch (erro){
            return erro
        }
    }

    // Criar um novo elemento
    async create(aluno){
        try{
            const row = await this.db.sql_insert(aluno)
            return row
        }
        catch (erro){
            return erro
        }

    }

    // Atualizar
    async update(aluno, id){
        const row = await this.db.sql_update(aluno, id)
        return row
    }

    // Delete
    async delete(id){
        const row = await this.db.sql_delete(id)
        return row
    }
}

export default new AlunoRepository()
