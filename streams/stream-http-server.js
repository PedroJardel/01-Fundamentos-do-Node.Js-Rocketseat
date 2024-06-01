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

const server = http.createServer((req, res) => {
    return req // ReadbleStream
    .pipe(new InverseNumberStream())
    .pipe(res) //  WritebleStream
})

server.listen(3334)