import dotenv from 'dotenv'
import Db from '../database/db.js'

dotenv.config()

class AlunoRepository {

    constructor(){
        this.db = new Db()
        this.db.conectar(process.env.DB_USER, process.env.DB_PASSWORD)
        // console.log(process.env.DB_USER, process.env.DB_PASSWORD)
    }

    // Buscar tudo
    async findAll(){
        const row = await this.db.sql_select_all("Alunos não encontrados")
        return row
    }

    // Buscar por ID
    async findById(id){
        const row = await this.db.sql_select_id(id, "Aluno não encontrado")
        return row
    }

    // Criar um novo elemento
    async create(aluno){
        const row = await this.db.sql_insert(aluno, "Não foi possível cadastrar")
        return row
    }

    // Atualizar
    async update(aluno, id){
        const row = await this.db.sql_update(aluno, id, "Aluno não encontrado")
        return row
    }

    // Delete
    async delete(id){
        const row = await this.db.sql_delete(id, "Aluno não encontrado")
        return row
    }
}

export default new AlunoRepository()