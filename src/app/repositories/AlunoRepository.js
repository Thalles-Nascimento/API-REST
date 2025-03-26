import conexao from "../database/index.js";

class AlunoRepository {

    // Buscar todos
    async findAll(){
        const sql = "SELECT * FROM alunos;"

        conexao.query(sql, (error,result)=>{

            if (error) {
                return 'Erro: ', error
            } else {
                return result
            }

        })
    }

    // Criar um novo elemento
    create(){
    
    }


    // Buscar por ID
    findById(){

    }

    // Atualizar
    update(){

    }

    // Delete
    delete(){

    }


}

export default new AlunoRepository()