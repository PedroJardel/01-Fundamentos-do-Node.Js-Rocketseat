import http from 'node:http';

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

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if(method === 'GET' && url === '/users') {
        return res.setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
    if(method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            nome: "Jhon Doe",
            email: "jhondoe@example.com"
        })
        return res.writeHead(201).end('Created')
    }
    return res.writeHead(404).end('Not Found')
})

server.listen(3333)
