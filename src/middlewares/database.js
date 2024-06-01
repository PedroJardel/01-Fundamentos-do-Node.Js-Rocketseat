export class Database {
    #database = {}

    select(table) {
        const data = this.#database[table] ?? []
        return data
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.database[table].push(data)
        } else {
            this.#database[table] = [data]
        }
        return data
    }
}

//  O uso da "#" garante que o método é privado e não pode ser acessado fora do arquivo que foi criado