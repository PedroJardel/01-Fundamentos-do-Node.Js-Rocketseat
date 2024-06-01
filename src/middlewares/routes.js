import { randomUUID } from 'node:crypto'
import { Database } from "./database.js"

const database = new Database()

// Query Parameters: http://localhost:3333/users?userId=1&name=Diego => (URL Stateful) => FILTROS, PAGINAÇÃO, NÃO-OBRIGATÓRIOS
// Route Parameters: [GET | PUT | PATH | DELETE] http://localhost:3333/users/1 => (Identificação de recurso) => MÉTODO + URL/RECURSO + REQUEST BODY(PUT || PATH)
// Request Body:[ POST] http://localhost:3333/users => (Envio de informações de  um formulário) => MÉTODO + URL + REQUEST BODY(Obrigatório)

export const routes = [
    {
        method: 'GET',
        path: '/users',
        handler: (req, res) => {
            const users = database.select('users')
            return res.end(JSON.stringify(users))
        }
    },
    {
        method: 'POST',
        path: '/users',
        handler: (req, res) => {
            const { name, email } = req.body

            const user = {
                id: randomUUID(),
                name: name,
                email: email
            }
            database.insert('users', user)
            return res.writeHead(201).end('Created')
        }
    },
    {
        method: 'DELETE',
        path: '/users/:id',
        handler: (req, res) => {
            res.writeHead(201).end(`Deleted user from id ${id}`)
        }
    }
]