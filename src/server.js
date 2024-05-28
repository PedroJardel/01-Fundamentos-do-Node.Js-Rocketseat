import http from 'node:http';

// HTTP ( Métodos HTTP + URL)

// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// GET /users => Buscando usuários do back-end
// POST /users => Criar um usuário no back-end

const server = http.createServer((req, res) => {
    const { method, url } = req

    if(method === 'GET' && url === '/users') {
        return res.end('Listagem de usuário')
    }
    if(method === 'POST' && url === '/users') {
        return res.end('Criação de usuário')
    }
    return res.end('Hello Ignite')
})

server.listen(3333)
