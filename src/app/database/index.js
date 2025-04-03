// Código necessário para a conexão com o banco de dados
import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

class Conexao{

    connect(login, pass){
        const host = process.env.DB_HOST
        const databases = process.env.DB_NAME
        const con = mysql.createConnection({
            host: host,
            port: '3306',
            user: login,
            password: pass,
            database: databases
        })
        
        return con
    }

}
export default new Conexao()
