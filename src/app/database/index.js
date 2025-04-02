// Código necessário para a conexão com o banco de dados
import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'dbsenac',
})

conexao.connect()

/**
 * Executa o código SQL com ou sem argumentos
 * @param {string} sql Instruções para serem executadas
 * @param {string=id | [aluno, id]} params Parâmetros para a Consulta SQL 
 * @param {string} messageReject Mensagem do Promise a ser exibidas
 * @returns Objeto Promise
 */
export const consulta = (sql, params='', messageReject)=>{
    return new Promise((resolve, reject) =>{
        conexao.query(sql, params, (error, result)=>{
            if (error) return reject(messageReject)
            return resolve(result)
        })
    })
}


export default conexao
