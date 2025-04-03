import Router from '../router.js'

const routers = Router

// GET
routers.get_all()

//GET id
routers.get_by_id()

// POST
// router.post('/listas', AlunoController.store)

// // DELETE e DELETE 2
// router.delete('/listas/:id', AlunoController.delete)

// // UPDATE e UPDATE V2
// router.put('/atualizar/:id', AlunoController.update)

//Expor o objeto para outras rotas 
export default routers
