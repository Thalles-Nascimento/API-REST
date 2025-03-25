import express from 'express'
import conexao from '../../infra/index.js'
const app = express()

//indcar para o express para usar o body com jason
app.use(express.json())

// ROTAS

// GET
app.get('/listas', (req,res)=>{
    const sql = "SELECT * FROM alunos;"
    conexao.query(sql, (error,result)=>{
      if (error) {
        console.log(error)
        res.status(404).json({'error':error})
      } else {
        res.status(200).send(result);
      }
    }) 
})

//GET id
app.get('/listas/:id', (req,res)=>{
  let id = parseInt(req.params.id)
  const sql = "SELECT * FROM alunos WHERE alunos_id = ?;"
  conexao.query(sql, id, (error,result)=>{
    const row = result[0]
    if (row == null) {
      console.log(error)
      res.status(404).json({"Alunos":error})

    } else {
      res.status(200).send(row);
    }
  })
})

// POST
app.post('/listas', (req,res)=>{
    // listas.push(req.body)
    const aluno = req.body
    const sql = "INSERT INTO `dbsenac`.`alunos` SET ?;"
    conexao.query(sql, aluno, (error, result)=>{
      if (error) {
        console.log(error)
        res.status(404).json(error)
  
      } else {
        console.log(result)
        res.status(201).send({"cadastrado com sucesso": aluno})
      }
    })
})

// DELETE 
app.delete('/listas', (req,res)=>{
    listas.pop(req.body)
    res.status(201).send('Aluno apagado com sucesso!')
})


//Expor o objeto para outras rotas 
export default app


// // Rota de exemplo teste: Retorna uma mensagem simples
// app.get('/teste', (req, res) => {
//     res.status(200).send('Não é vc que testa');
//   });
//   // Rota de exemplo 4: Retorna dados em formato JSON
//   app.get('/listasAlunos', (req, res) => {
//     const dados = [
//         {
//           nome: 'José',
//           idade: 23,
//           curso: 'Programação Web',
//           status: 'Ativo',
//         },
//         {
//           nome: 'Maria',
//           idade: 30,
//           curso: 'Design Gráfico',
//           status: 'Inativo',
//         },
//         {
//           nome: 'Carlos',
//           idade: 27,
//           curso: 'Engenharia de Software',
//           status: 'Ativo',
//         }
//       ];
//     res.status(200).json(dados);
//   });



