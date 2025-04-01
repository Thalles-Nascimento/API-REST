import conexao from "../database/index.js";

class AlunoRepository {

    // Buscar tudo
    findAll(){
        const sql = "SELECT * FROM alunos;"

        // Promise possui dois parâmetros: Resolve(sucesso) e Reject(erro)
        return new Promise((resolve, reject)=>{
            conexao.query(sql, (error, result)=>{
                if (error) return reject('Erro: ', error)
                // Stringfy: Resultado de forma adequada
                // JSON.stringify(result)
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)            
            })
        })
    }

    // Criar um novo elemento
    create(aluno){
        const sql = "INSERT INTO `dbsenac`.`alunos` SET ?;"
        return new Promise((resolve, reject) =>{
            conexao.query(sql, aluno, (error, result)=>{
                if (error) return reject(error)
                return resolve("Aluno inserido")
            })
        })
    }


    // Buscar por ID
    findById(id){
        const sql = "SELECT * FROM alunos WHERE alunos_id = ?;"

        return new Promise((resolve, reject) =>{
            conexao.query(sql, id, (error,result)=>{
                const row = result[0]
                if (row == null) return reject("Aluno não encontrado")
                return resolve(row)
            })
        })
    }

    // Atualizar
    update(){

    }

    // Delete
    delete(){

    }


}

export default new AlunoRepository()