class IndexController {

    constructor() {

    }

    getHome() {
        return { status: true, 'title' : 'Selecao API'}
    }
}

module.exports = IndexController