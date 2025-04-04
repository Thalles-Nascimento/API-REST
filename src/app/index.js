import Router from '../router.js'

const routers = Router

// GET
routers.get_all()

//GET id
routers.get_by_id()

// POST
routers.insert()

// UPDATE
routers.update()

// DELETE
routers.delete()


//Expor o objeto para outras rotas 
export default routers
