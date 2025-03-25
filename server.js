import app from './src/app/index.js'

const port = 3000

// Escutando a porta 3000
app.listen(port,() =>{
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})



// conexao.connect((error) =>{
//     if (error) {
//         console.log(error)
//     }else{
//         console.log("Conexão realizada com secesso!")
//         //Escutando a porta 3000
//         app.listen(port,() =>{
//         console.log(`Servidor rodando no endereço http://localhost:${port}`)
//         })
//     }
// })

//Estabelecer a conexao
// conexao.connect((error) =>{
//     if (error) {
//         console.log(error)
//     }else{
//         console.log("Conexão realizada com secesso!")
//     }
// }

// )



