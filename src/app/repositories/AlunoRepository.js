import conexao from "../database/index.js";

class AlunoRepository {

    // Buscar tudo
    findAll(){
        const sql = "SELECT * FROM alunos;"

        // Promise possui dois parâmetros: Resolve(sucesso) e Reject(erro)
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, result)=>{
                if (error) return reject('Erro: ', error)
                return resolve(result)            
            })
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