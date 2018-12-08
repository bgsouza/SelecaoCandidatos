class JsonBD {

    constructor(file, data) {
        this.file = file;
        this.data = data;
    }

    get() {
        fs.readFile(`${this.file}.json`, function readFileCallback(err, data){
            if (err){
                console.log(err);
            } else {
                obj = JSON.parse(data); 
                for (i=0; i<5 ; i++){
                obj.table.push({id: i, square:i*i});
            }
            var json = JSON.stringify(obj); 
            
        }});
    }

    find() {

    }

    write(data) {
        fs.writeFile(`${this.file}.json`, data); 
    }
}