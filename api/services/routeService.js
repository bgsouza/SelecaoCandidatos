const Graph = require('../helpers/dijkstras')
const JsonDB = require('../adpters/jsonBD');

class RouteService {
    
    constructor() {
        this.map = [];
        this.grap = null;
        this.jsonDB = new JsonDB();
    }

    trace(ori, dest) {
        let route = this.graph.findShortestPath(ori, dest);
        return (route == undefined) ? -1 : route.cost 
    }

    mapRoutes(ori, data) {
        this.map = this.jsonDB.get('graph');
        this.graph = new Graph(this.map);
        return data.map(c => { c['d'] = this.trace(ori, c.localizacao); return c })
    }
}

module.exports = RouteService