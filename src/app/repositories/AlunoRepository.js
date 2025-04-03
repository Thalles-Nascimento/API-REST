import dotenv from 'dotenv'

dotenv.config()

class AlunoRepository {

    constructor(db){
        this.db = db
        // const login = process.env.DB_USER
        // const password = process.env.DB_PASSWORD
        // this.db = Db
        // this.db.conectar(login, password)
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
    create(aluno){
        const sql_insert = "INSERT INTO `dbsenac`.`alunos` SET ?;"
        return consulta(sql_insert, aluno, "Erro ao inserir")
    }

    // Atualizar
    update(aluno, id){
        const sql_update = 'UPDATE `dbsenac`.`alunos` SET ? WHERE alunos_id = ?;'
        return consulta(sql_update, [aluno, id], "Não foi possível cadastrar")
    }

    // Delete
    delete(id){
        const sql_delete = "DELETE FROM `dbsenac`.`alunos` WHERE alunos_id = ?;"
        return consulta(sql_delete, id, "Aluno não encontrado")
    }
}

export default AlunoRepository