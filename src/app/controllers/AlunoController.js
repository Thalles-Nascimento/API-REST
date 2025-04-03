import AlunoRepository from "../repositories/AlunoRepository.js";
import Db from "../database/db.js" 
import dotenv from 'dotenv'

dotenv.config()
// Métodos assíncronos: async e await
class AlunoController{

    // GET all
    async index(req, res){
      const row = await AlunoRepository.findAll()
      res.json(row)
    }

    // GET id
    async show(req, res){
      let id = req.params.id
      const row = await AlunoRepository.findById(id)
      res.json(row)
    }

    // INSERT/CREATE
    async store(req, res){
      let aluno = req.body
      const row = await AlunoRepository.create(aluno)
      res.send(row)    
        
    }

    // UPDATE
    async update(req, res){
      let aluno = req.body
      let id = req.params.id
      const row = await AlunoRepository.update(aluno, id)
      res.json(row)
    }

    // DELETE
    async delete(req, res){
      let id = req.params.id
      const row = await AlunoRepository.delete(id)
      res.send(row)

    }

}

// Padrão Singleton -> Designer Patterns
export default new AlunoController()