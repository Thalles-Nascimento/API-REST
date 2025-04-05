import Conexao from "./conection.js"


class Db{

    conectar(login, pass){
        this.con = Conexao.connect(login, pass)
    }

    sql_select_all(){
        const select_sql = "SELECT * FROM alunos;"

        return new Promise((resolve, reject) =>{
            this.con.query(select_sql, (error, result)=>{
                if (error) return reject(error.sqlMessage)
                return resolve(result)
            })
        })
    }

    sql_select_id(id){
        const select_id_sql = "SELECT * FROM alunos WHERE alunos_id = ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(select_id_sql, id, (error, result) =>{
                // const row = result[0]
                if(error) return reject(error.sqlMessage)
                return resolve(result)
            })
        })

    }

    sql_insert(aluno,){
        const insert_sql = "INSERT INTO alunos SET ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(insert_sql, [aluno], (error, result) =>{
                if (error) return reject(error.sqlMessage)
                return resolve(result)
            })
        })
    }

    async sql_update(aluno, id){
        const resultado = await this.sql_select_id(id)
        const update_sql = "UPDATE `dbsenac`.`alunos` SET ? WHERE alunos_id = ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(update_sql, [aluno, id], (error, result) =>{
                if (resultado == undefined) return reject("Aluno não encontrado")
                return resolve("Aluno atualizado")
            })
        })
    }

    async sql_delete(id){
        const resultado = await this.sql_select_id(id)
        const delete_sql = "DELETE FROM `dbsenac`.`alunos` WHERE alunos_id = ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(delete_sql, id, (error, result) =>{
                if (resultado == undefined){ 
                    return reject("Aluno não encontrado") 
                }
                else{
                    return resolve(`Aluno ${resultado.nome} deletado!`)
                }
            })
        })
    }
}


export default Db
