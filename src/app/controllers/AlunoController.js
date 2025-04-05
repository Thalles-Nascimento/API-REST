import AlunoRepository from "../repositories/AlunoRepository.js";

// Métodos assíncronos: async e await
class AlunoController{

    // GET all
    async index(req, res){
      const row = await AlunoRepository.findAll()
      if (row === "Não encontrados"){
        res.status(404).json({"Erro":"Alunos não encontrados"})
      }
      else{
        res.status(200).json(row)
      }

    }

    // GET id
    async show(req, res){
      let id = req.params.id
      const row = await AlunoRepository.findById(id)

      if (row === "Aluno não encontrado"){
        res.status(404).json({"Erro":"Aluno não encontrado"})
      }
      else{
        res.status(200).json(row)
      }

    }

    // INSERT/CREATE
    async store(req, res){
      let aluno = req.body
      const row = await AlunoRepository.create(aluno)
      if (row === "Não foi possível cadastrar"){
        res.status(400).json({"Erro":"Não foi possível cadastrar"})
      }
      else{
        res.status(201).json(row)
      }       
        
    }

    // UPDATE
    async update(req, res){
      let aluno = req.body
      let id = req.params.id
      const row = await AlunoRepository.update(aluno, id)

      if (row === "Aluno não encontrado" | row === "Não foi possível atualizar"){
        res.status(400).json({"Erro":"Não foi possível atualizar"})
      }
      else{
        res.status(200).json(row)
      }

    }

    // DELETE
    async delete(req, res){
      let id = req.params.id
      const row = await AlunoRepository.delete(id)

      if (row === "Aluno não encontrado" | row === "Não foi possível deletar"){
        res.status(400).json({"Erro":"Não foi possível deletar"})
      }
      else{
        res.status(200).json(row)
      }

    }

}

// Padrão Singleton -> Designer Patterns
export default new AlunoController()