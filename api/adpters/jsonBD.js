const fs = require('fs')
const _ = require('underscore');
class JsonBD {

    constructor(file) {
        this.file = file;
        this.path = __dirname.replace('api/adpters','') + 'data/' // mover para .env
    }

    getFile() {
        return this.file;
    }

    get(file) {
        let json = [];
        try {
            json = JSON.parse(fs.readFileSync(`${this.path}${file != undefined ? file : this.file}.json`, 'utf8'));
        } catch (err) {
            console.log(`[JsonDB][get] ${err}`)
        }
        return json;
    }

    find(model, query) {
        let jsonModel = this.get(model);
        let jsonFiltered = _.where(jsonModel, query);
        console.log(`json filtered: ${model}`, jsonFiltered);
        return jsonFiltered;
    }

    lastId() {
        let json = this.get();
        return json !== undefined && json.length > 0 ? json[json.length-1].id : 0; 
    }

    append(data) {
        fs.readFile(`${this.path}${this.file}.json`, (err, d) => {
            if (err){
                console.log(`[JsonDB][append] ${err}`)
            } else {
                let json = d == "" || null ? [] : JSON.parse(d);
                json.push(data);
                this.write(json);
            }
        });
    }

    write(data) {
        fs.writeFile(`${this.path}${this.file}.json`, JSON.stringify(data), (err) => {
            if(err) { console.log(`[JsonDB][write] ${err}`) }
        }); 
    }
}

module.exports = JsonBD