// Netflix e Spotify (Ajudam a entender o conceito)

// Conseguir obeter pequenas partes de algo e já conseguir
// trabalhar com aqueles dados sem ter que ler o arquivo por completo.

// Importação de clientes via CSV (Excel)
// 1gb - 1.000.000
// POST /upload import.csv

// (Client) Internet de 10mb/s - 100s

// a cada 10mb eu tenho 10.000 linhas

//  Por que já não ir importando o que já foi lido antes da tarefa ser completada?

// Readable Streams (Importação de csv) / Writable Streams (Netflix e Spotify)
// Readable Streams (Client => Servidor) / Writable Streams (Servidor => Client)

// process.stdin.pipe(process.stdout)
import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1
    _read() {
        const i = this.index++

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000)
    }
}
new OneToHundredStream().pipe(process.stdout)