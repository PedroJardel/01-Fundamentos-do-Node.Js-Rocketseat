import http from 'node:http';
import { json } from './middlewares/json.js';
import { Database } from './middlewares/database.js';

const database = new Database()

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)

    if(method === 'GET' && url === '/users') {
        const users = database.select('users')

        return res.end(JSON.stringify(users))
    }

    if(method === 'POST' && url === '/users') {
        const { name, email } = req.body

        const user = {
            id: 1,
            name: name,
            email: email
        }
        database.insert('users', user)
        return res.writeHead(201).end('Created')
    }
    return res.writeHead(404).end('Not Found')
})

server.listen(3333)

// HTTP ( Métodos HTTP + URL)

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// GET /users => Buscando usuários do back-end
// POST /users => Criar um usuário no back-end

// Stateful (reseta a memória) - Stateless

// Cabeçalhos (Requisição/Resposta) => Metadados (informações adicionais que não tem haver com o dado retornado, mas sim como esse dado por ser interpretado pelo front e back-end)

// JSON - JavaScript Object Notation

// HTTP Status Code (mdn http status code) 
// Codes Informativos 100 - 199
// Codes de Sucesso 200 - 299
// Codes de Redirecionamento 300 - 399
// Codes de Erro de requisição (client) 400 - 499
// Codes de Server Error 500 - 599