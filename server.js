import routers from "./src/app/app.js"
import dotenv from 'dotenv'

dotenv.config()

const patch = process.env.PATCH_SERVER
const port = process.env.PORT_SERVER

// Escutando a porta
routers.listen(patch, port)
