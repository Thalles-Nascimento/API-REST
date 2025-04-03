// Código necessário para a conexão com o banco de dados
import mysql from 'mysql'

class Conexao{

    connect(login, pass){
        
        const con = mysql.createConnection({
            host: 'localhost',
            port: '3306',
            user: login,
            password: pass,
            database: 'dbsenac'
        })
        
        return con
    }

}
export default new Conexao()
