import Conexao from "./conection.js"


class Db{

    constructor(login, pass){
        this.con = Conexao.connect(login, pass)
    }

    sql_select_all(){
        const select_sql = "SELECT * FROM alunos;"

        return new Promise((resolve, reject) =>{
            this.con.query(select_sql, (error, result)=>{
                if (error != null) {
                    console.log(error)
                    return reject("Não encontrados")
                }else {
                    return resolve(result)
                }
            })
        })
    }

    sql_select_id(id){
        const select_id_sql = "SELECT * FROM alunos WHERE alunos_id = ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(select_id_sql, id, (error, result) =>{
                const row = result[0]
                if(row === undefined){
                    return reject("Aluno não encontrado")
                }
                else{
                    return resolve(row)
                }
            })
        })

    }

    sql_insert(aluno){
        const insert_sql = "INSERT INTO alunos SET ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(insert_sql, [aluno], (error, result) =>{
                if (error != null) {
                    console.log(error)
                    return reject("Não foi possível cadastrar")
                }
                else {
                    return resolve(`${aluno.alunos_grupo}(a) ${aluno.alunos_nome} cadastrado!`)
                }
            })
        })
    }

    async sql_update(aluno, id){
        let resultado
        try{
            resultado = await this.sql_select_id(id)
        }catch(erro){
            return erro
        }

        const update_sql = "UPDATE `dbsenac`.`alunos` SET ? WHERE alunos_id = ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(update_sql, [aluno, id], (error, result) =>{
                if (resultado == undefined) {
                    console.log(error)
                    return reject("Não foi possível atualizar")
                }
                else {
                    return resolve(`${resultado.alunos_grupo} atualizado`)
                }
            })
        })
    }

    async sql_delete(id){
        let resultado
        try{
            resultado = await this.sql_select_id(id)
        }catch(erro){
            return erro
        }
        const delete_sql = "DELETE FROM `dbsenac`.`alunos` WHERE alunos_id = ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(delete_sql, id, (error, result) =>{
                if (resultado == undefined){ 
                    console.log(error)
                    return reject("Não foi possível deletar")
                }
                else{
                    return resolve(`${resultado.alunos_grupo}(a) ${resultado.alunos_nome} deletado!`)
                }
            })
        })
    }
}


export default Db
