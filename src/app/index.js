import express from 'express'
import AlunoController from './controllers/AlunoController.js'

const app = express()

//indicar para o express para usar o body com jason
app.use(express.json())

// ROTAS

// GET
app.get('/listas', AlunoController.index)

//GET id
app.get('/listas/:id', AlunoController.show)

// POST
app.post('/listas', AlunoController.store)

// DELETE e DELETE 2
app.delete('/listas/:id', AlunoController.delete)

// UPDATE e UPDATE V2
app.put('/atualizar/:id', AlunoController.update)

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



