// TODO: Realizar em casa
import Conexao from "./index.js"


class Db{

    conectar(login, pass){
        this.con = Conexao.connect(login, pass)
    }

    sql_select_all(messageReject){
        const sql_select = "SELECT * FROM alunos;"

        return new Promise((resolve, reject) =>{
            this.con.query(sql_select, (error, result)=>{
                if (error) return reject(messageReject)
                return resolve(result)
            })
        })
    }

    sql_select_id(id, messageReject){
        const sql_select_by_id = "SELECT * FROM alunos WHERE alunos_id = ?;"

        return new Promise((resolve, reject) =>{
            this.con.query(sql_select_by_id, id, (error, result) =>{
                const row = result[0]
                if(error) return reject(messageReject)
                return resolve(row)
            })
        })

    }
}




export default Db
