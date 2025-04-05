import Conexao from "./conection.js"

/**
 * Classe de manipulação do Banco de Dados
 * @author Thalles Nascimento
 * @class
 */
class Db{

    /**
     * Método para conexão com o Banco de Dados
     * @param {String} login Usuário do Banco de Dados
     * @param {String | Number} key Senha do Banco de Dados
     * @returns Retorna a conexão com o Banco de Dados
     */
    conection(login, pass){
        this.con = Conexao.conection(login, pass)
    }

    /**
     * SQL: SELECT * FROM table 
     * @returns Retorna todos os registros da tabela alunos
     */
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

    /**
     * SQL: SELECT * FROM table WHERE id_column = [ID] 
     * @param {Number} id ID e um registro do Banco de Dados
     * @returns Retorna um registro específico da tabela alunos
     */
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

    /**
     * SQL: INSERT INTO table SET [JSON]
     * @param {JSON} aluno Dados para inserção no Banco de Dados
     * @returns Retorna a inserção de um registro no Banco de Dados
     */
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

    /**
     * SQL: UPDATE table SET [JSON] WHERE id_column = [ID]
     * @param {JSON} aluno Dados para Atualização no Banco de Dados
     * @param {Number} id ID do registro à ser atualizado
     * @returns Retorna a atualização de um registro no Banco de Dados
     */
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

    /**
     * SQL: DELETE FROM table WHERE id_column = [ID]
     * @param {Number} id ID do registro à ser Deletado
     * @returns Retorna um registro Deletado
     */
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

/**
 * Padrão Singleton -> Designer Patterns
 *      Foi criada e exportada apenas uma instância da classe Db
 *  */ 
export default new Db()
