import AlunoRepository from "../repositories/AlunoRepository.js";

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
    update(req, res){
      //   const id = req.params.id
      //   const aluno = req.body
    
      //   const checkSQL = "SELECT * FROM alunos WHERE alunos_id = ?;"
      //   conexao.query(checkSQL, [id], (error,result)=>{
      //     if (error) {
      //       console.log(error)
      //       res.status(404).json({'message': error})
      //     }

      //     if (result === 0) {
      //       console.log(error)
      //       res.status(404).json({'Message': `Aluno com id ${id} não encontrado`})
      //     }
    
      //   const sql = 'UPDATE dbsenac.alunos SET ? WHERE alunos_id = ?;'
      //   conexao.query(sql, [aluno, id], (error, result) =>{
      //     const row = result[0]
      //     if (error){
      //       console.log(error)
      //       return res.status(500).json({'Error': 'Erro interno no servidor', 'Details': error})
      //     }
    
      //     if (update.affectedRows === 0){
      //       res.status(404).json({'Message': `Aluno com id ${id} não encontrado`})
      //     }
    
      //     res.status(200).json({'Message':`Aluno com id ${id} Atualizado`})
      //   })
      // })        
    }

    async update2(req, res){
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

    // DELETE 2
    delete2(req, res){
        // const id = req.params.id
        // const sql = "DELETE FROM dbsenac.alunos WHERE alunos_id = ?;"
      
        // conexao.query(sql, [id], (error, result)=>{
        //   if (error){
        //     return res.status(500).json({'Error': 'Erro interno no servidor', 'Details': error})
        //   }
      
        //   if (result.affectedRows === 0){
        //     return res.status(404).json({'message': `Aluno com ID ${id} não encontrado`})
        //   }
      
        //   res.status(200).json({'message': `Aluno com id ${id} excluido com sucesso.`})
        // })    
    }

}

// Padrão Singleton -> Designer Patterns
export default new AlunoController()