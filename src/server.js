import http from 'node:http';

// HTTP ( Métodos HTTP + URL)

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// GET /users => Buscando usuários do back-end
// POST /users => Criar um usuário no back-end

// Stateful - Stateless

// Cabeçalhos (Requisição/Resposta) = Metadados (informações adicionais que não tem haver com o dado retornado, mas sim como esse dado por ser interpretado pelo front e back-end)

//  JSON - JavaScript Object Notation

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
        return res.end('Criação de usuário')
    }
    return res.end('Hello Ignite')
})

server.listen(3333)
