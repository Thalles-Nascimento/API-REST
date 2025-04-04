import Conexao from "./index.js"


class Db{

    conectar(login, pass){
        this.con = Conexao.connect(login, pass)
    }

    sql_select_all(messageReject){
        const select_sql = "SELECT * FROM alunos;"

        return new Promise((resolve, reject) =>{
            this.con.query(select_sql, (error, result)=>{
                if (error) return reject(messageReject)
                return resolve(result)
            })
        })
    }

    sql_select_id(id, messageReject){
        const select_id_sql = "SELECT * FROM alunos WHERE id = ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(select_id_sql, id, (error, result) =>{
                const row = result[0]
                if(error) return reject(messageReject)
                return resolve(row)
            })
        })

    }

    sql_insert(aluno,  messageReject){
        const insert_sql = "INSERT INTO alunos SET ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(insert_sql, [aluno], (error, result) =>{
                if (error) return reject(messageReject)
                return resolve(result)
            })
        })
    }

    sql_update(aluno, id, messageReject){
        const update_sql = "UPDATE `dbsenac`.`alunos` SET ? WHERE id = ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(update_sql, [aluno, id], (error, result) =>{
                if (error) return reject(messageReject)
                return resolve(result)
            })
        })
    }

    async sql_delete(id, messageReject){
        const resultado = await this.sql_select_id(id, "Aluno não encontrado")
        const delete_sql = "DELETE FROM `dbsenac`.`alunos` WHERE id = ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(delete_sql, id, (error, result) =>{
                if (resultado == undefined){ 
                    return reject(messageReject) 
                }
                else{
                    return resolve(`Aluno ${resultado.nome} deletado!`)
                }
            })
        })
    }
}


export default Db
