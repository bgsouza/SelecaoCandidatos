const fs = require('fs')
class JsonBD {

    constructor(file) {
        this.file = file;
        this.path = __dirname.replace('api/adpters','') + 'data/' // mover para .env
    }

    get() {
        return JSON.parse(fs.readFileSync(`${this.path}${this.file}.json`, 'utf8'));
    }

    find() {

    }

    lastId() {
        let json = this.get();
        console.log('[lastId]', json);
        return json !== undefined && json.length > 0 ? json[json.length-1].id : 0; 
    }

    append(data) {
        fs.readFile(`${this.path}${this.file}.json`, (err, d) => {
            if (err){
                console.log(`[JsonDB][append] ${err}`)
            } else {
                let json = JSON.parse(d);
                json.push(data);
                this.write(json);
            }
        });
    }

    write(data) {
        fs.writeFile(`${this.path}${this.file}.json`, JSON.stringify(data), (err) => {
            console.log(`[JsonDB][write] ${err}`)
        }); 
    }
}

module.exports = JsonBD