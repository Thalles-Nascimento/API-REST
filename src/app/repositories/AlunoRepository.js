import conexao, { consulta } from "../database/index.js";

class AlunoRepository {

    // Buscar tudo
    findAll(){
        const sql_select_all = "SELECT * FROM alunos;"
        return consulta(sql_select_all, "Alunos não encontrados")
    }

    // Buscar por ID
    findById(id){
        const sql_select_id = "SELECT * FROM alunos WHERE alunos_id = ?;"
        return consulta(sql_select_id, id, "Aluno não encontrado")
    }

    // Criar um novo elemento
    create(aluno){
        const sql_insert = "INSERT INTO `dbsenac`.`alunos` SET ?;"
        return consulta(sql_insert, aluno, "Erro ao inserir")
    }

    // Atualizar
    update(aluno, id){
        const sql_update = 'UPDATE `dbsenac`.`alunos` SET ? WHERE alunos_id = ?;'
        return consulta(sql_update, [aluno, id], "Aluno não encontrado")
    }

    // Delete
    delete(id){
        const sql_delete = "DELETE FROM `dbsenac`.`alunos` WHERE alunos_id = ?;"
        return consulta(sql_delete, id, "Aluno não encontrado")
    }
}

export default new AlunoRepository()