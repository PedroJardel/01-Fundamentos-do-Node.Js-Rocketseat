import http from 'node:http';
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1
        console.log(transformed)
        callback(null, Buffer.from(String(transformed))) // Conversão para tipo Buffer
    }
}

// req => ReadbleStream
// res => WritebleStream

const server = http.createServer(async (req, res) => {
    const buffers = []

    for await (const chunk of req) { // me permite percorrer toda a stream da requisição e injeto no array de buffers, para depois trabalhar com os dados
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString()

    console.log(fullStreamContent)

    return res.end(fullStreamContent)
    // return req // ReadbleStream
    // .pipe(new InverseNumberStream())
    // .pipe(res) //  WritebleStream
})

server.listen(3334)