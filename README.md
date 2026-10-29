# API REST — Cadastro de Alunos

API REST simples para cadastro de alunos, construída em **Node.js** com **Express** e **MySQL** (sem ORM), usando uma arquitetura em camadas.

`Node.js` · `Express 4` · `MySQL` · `dotenv`

## Sobre o projeto

Projeto de estudo focado em praticar a construção de uma API REST com operações CRUD completas (Create, Read, Update, Delete), aplicando o padrão de projeto **Singleton** nas principais classes (`Router`, `AlunoController`, `AlunoRepository`, `Db`, `Conexao`).

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/) (ES Modules)
- [Express](https://expressjs.com/) `^4.21.2`
- [MySQL](https://www.mysql.com/) via driver [`mysql`](https://www.npmjs.com/package/mysql) `^2.18.1` (sem ORM — queries SQL manuais)
- [dotenv](https://www.npmjs.com/package/dotenv) `^16.4.7` — variáveis de ambiente
- [nodemon](https://www.npmjs.com/package/nodemon) `^3.1.9` — recarregamento automático em desenvolvimento

## Arquitetura

O fluxo de uma requisição passa pelas seguintes camadas:

```
Requisição HTTP
      │
      ▼
   Router            (src/router.js)
      │  define as rotas Express
      ▼
AlunoController       (src/app/controllers/AlunoController.js)
      │  trata req/res e chama o repository
      ▼
AlunoRepository       (src/app/repositories/AlunoRepository.js)
      │  intermedia Controller e Banco de Dados
      ▼
    Db                (src/app/database/db.js)
      │  monta e executa as queries SQL
      ▼
  Conexao             (src/app/database/conection.js)
      │  abre a conexão com o MySQL
      ▼
   MySQL (tabela `alunos`)
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Uma instância **MySQL** acessível, com a tabela `alunos` já criada (veja o script SQL abaixo)

## Instalação e configuração

1. Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd API-REST
npm install
```

2. Copie o arquivo de exemplo de variáveis de ambiente e preencha com seus dados:

```bash
cp exemplo.env .env
```

```env
DB_USER = <usuário do banco>
DB_PASSWORD = <senha do banco>
DB_HOST = <host/IP do banco>
DB_NAME = <nome do banco>
DB_PORT = <porta do banco>
PATCH_SERVER = <endereço do servidor, ex: http://localhost>
PORT_SERVER = <porta do servidor, ex: 3000>
```

3. Crie a tabela `alunos` no banco configurado (não há migrations no projeto, então isso precisa ser feito manualmente):

```sql
CREATE TABLE alunos (
  alunos_id INT AUTO_INCREMENT PRIMARY KEY,
  alunos_nome VARCHAR(255) NOT NULL,
  alunos_grupo VARCHAR(255) NOT NULL
);
```

> **Atenção:** as queries de `UPDATE` e `DELETE` em [src/app/database/db.js](src/app/database/db.js) referenciam o schema fixo `dbsenac` (ex: `` UPDATE `dbsenac`.`alunos` ... ``). Garanta que o banco configurado em `DB_NAME` tenha esse nome, ou ajuste essas queries no código.

## Executando o projeto

Não há script `start`; o projeto é executado em modo de desenvolvimento com `nodemon`:

```bash
npm run dev
```

Alternativamente, sem recarregamento automático:

```bash
node server.js
```

Se tudo estiver configurado corretamente, o terminal exibirá:

```
Conexão estabelecida
Endereço: <PATCH_SERVER>:<PORT_SERVER>
```

## Endpoints da API

Todas as rotas são relativas ao recurso `alunos` (sem prefixo `/api`).

| Método | Rota | Descrição | Sucesso | Erro |
|---|---|---|---|---|
| `GET` | `/listas` | Lista todos os alunos | `200` | `404` |
| `GET` | `/listas/:id` | Busca um aluno pelo ID | `200` | `404` |
| `POST` | `/listas` | Cadastra um novo aluno | `201` | `400` |
| `PUT` | `/listas/:id` | Atualiza um aluno existente | `200` | `400` |
| `DELETE` | `/listas/:id` | Remove um aluno | `200` | `400` |

O corpo (`body`) esperado em `POST` e `PUT` é:

```json
{
  "alunos_nome": "Nome do Aluno",
  "alunos_grupo": "Grupo do Aluno"
}
```

### Exemplos

**Listar todos os alunos**
```bash
curl http://localhost:3000/listas
```

**Buscar aluno por ID**
```bash
curl http://localhost:3000/listas/1
```

**Cadastrar aluno**
```bash
curl -X POST http://localhost:3000/listas \
  -H "Content-Type: application/json" \
  -d '{"alunos_nome": "Maria Silva", "alunos_grupo": "Turma A"}'
```

**Atualizar aluno**
```bash
curl -X PUT http://localhost:3000/listas/1 \
  -H "Content-Type: application/json" \
  -d '{"alunos_nome": "Maria Silva", "alunos_grupo": "Turma B"}'
```

**Remover aluno**
```bash
curl -X DELETE http://localhost:3000/listas/1
```

## Estrutura de pastas

```
API-REST/
├── exemplo.env              # modelo de variáveis de ambiente
├── package.json
├── server.js                # ponto de entrada: carrega o .env e inicia o servidor
└── src/
    ├── router.js             # define as rotas Express (Singleton)
    └── app/
        ├── app.js            # registra as rotas no Router
        ├── controllers/
        │   └── AlunoController.js   # trata as requisições HTTP
        ├── database/
        │   ├── conection.js  # cria a conexão com o MySQL
        │   └── db.js         # contém as queries SQL (select/insert/update/delete)
        └── repositories/
            └── AlunoRepository.js   # camada entre Controller e Db
```

## Limitações conhecidas / possíveis melhorias futuras

- Não há autenticação ou autorização — todas as rotas estão abertas.
- Não há suíte de testes automatizados.
- Não há Docker nem pipeline de CI/CD configurados.
- Não há migrations/seeds — a tabela `alunos` precisa ser criada manualmente.
- O nome do schema (`dbsenac`) está fixo (hardcoded) nas queries de `UPDATE` e `DELETE` em [db.js](src/app/database/db.js).

## Autor

Thalles Nascimento

## Licença

Este projeto está sob a licença **ISC** (conforme declarado em `package.json`).
