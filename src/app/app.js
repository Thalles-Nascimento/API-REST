import Router from '../router.js'

/**
 * Instância da classe @Router
 */
const routers = Router

/**
 * Método para acessar a rota que lista todos os registros do banco de dados
 */
routers.get_all()

/**
 * Método para acessar a rota que lista os registros com um determinado @ID
 */
routers.get_by_id()

/**
 * Método para acessar a rota que insere registros no Banco de Dados
 */
routers.insert()

/**
 * Método para acessar a rota que atualiza registros no Banco de Dados
 */
routers.update()

/**
 * Método para acessar a rota que deleta registros no Banco de Dados
 */
routers.delete()


//Expor a instância da classe Router
export default routers
