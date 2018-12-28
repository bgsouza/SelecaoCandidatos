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
        return (route == undefined) ? 0 : this.dist(route.cost)
    }

    dist(d) {
        if(d <= 5) {
            return 100
        } else if(d > 5 && d <= 10) {
            return 75
        } else if(d > 10 && d <= 15) {
            return 50
        } else if(d > 15 && d <= 20) {
            return 25
        } else {
            return 0
        }
    }

    mapRoutes(ori, data) {
        this.map = this.jsonDB.get('graph');
        this.graph = new Graph(this.map);
        return data.map(c => { c['d'] = this.trace(ori, c.localizacao); return c })
    }
}

module.exports = RouteService