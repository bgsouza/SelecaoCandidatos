class ScoreService {
    constructor() {

    }

    calc(nivelVaga, nivelCandidato, distance) {
        let n = (100 - 25) *  (nivelVaga % nivelCandidato)
        let score = (n + distance) / 2
        return score
    }
}

module.exports = ScoreService