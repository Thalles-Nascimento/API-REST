import AlunoRepository from "../repositories/AlunoRepository.js";

/**
 * Classe responsável por receber e processar as requisições HTTP
 * @author Thalles Nascimento
 * @class
 */
class AlunoController{

  /**
   * Construtor para injeção da instância da classe AlunoRepository
   * @constructor
   */
    constructor(){
      this.repository = AlunoRepository
  
    }

    /**
     * Método para retornar todos os registros do Banco de Dados
     * @param {JSON | Number | String | List} req É a Requisão do Cliente: Body/Headers
     * @param {JSON | Number | String | List} res É a Resposta do Servidor
     */
    async index(req, res){
      const row = await this.repository.findAll()
      if (row === "Não encontrados"){
        res.status(404).json({"Erro":"Alunos não encontrados"})
      }
      else{
        res.status(200).json(row)
      }

    }

    /**
     * Método para retornar o registro com ID específico do Banco de Dados
     * @param {JSON | Number | String | List} req É a Requisão do Cliente: Body/Headers
     * @param {JSON | Number | String | List} res É a Resposta do Servidor
     */
    async show(req, res){
      let id = req.params.id
      const row = await this.repository.findById(id)

      if (row === "Aluno não encontrado"){
        res.status(404).json({"Erro":"Aluno não encontrado"})
      }
      else{
        res.status(200).json(row)
      }

    }

    /**
     * Método para inserir um registro no Banco de Dados
     * @param {JSON | Number | String | List} req É a Requisão do Cliente: Body/Headers
     * @param {JSON | Number | String | List} res É a Resposta do Servidor
     */
    async store(req, res){
      let aluno = req.body
      const row = await this.repository.create(aluno)
      if (row === "Não foi possível cadastrar"){
        res.status(400).json({"Erro":"Não foi possível cadastrar"})
      }
      else{
        res.status(201).json(row)
      }       
        
    }

    /**
     * Método para atualizar um registro no Banco de Dados
     * @param {JSON | Number | String | List} req É a Requisão do Cliente: Body/Headers
     * @param {JSON | Number | String | List} res É a Resposta do Servidor
     */
    async update(req, res){
      let aluno = req.body
      let id = req.params.id
      const row = await this.repository.update(aluno, id)

      if (row === "Aluno não encontrado" | row === "Não foi possível atualizar"){
        res.status(400).json({"Erro":"Não foi possível atualizar"})
      }
      else{
        res.status(200).json(row)
      }

    }

    /**
     * Método para atualizar um registro no Banco de Dados
     * @param {JSON | Number | String | List} req É a Requisão do Cliente: Body/Headers
     * @param {JSON | Number | String | List} res É a Resposta do Servidor
     */
    async delete(req, res){
      let id = req.params.id
      const row = await this.repository.delete(id)

      if (row === "Aluno não encontrado" | row === "Não foi possível deletar"){
        res.status(400).json({"Erro":"Não foi possível deletar"})
      }
      else{
        res.status(200).json(row)
      }

    }

}

/**
 * Padrão Singleton -> Designer Patterns
 *      Foi criada e exportada apenas uma instância da classe AlunoController
 *  */ 
export default new AlunoController()