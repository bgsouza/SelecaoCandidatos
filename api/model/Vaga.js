class Vaga {

  constructor(empresa, titulo, descricao, localizacao, nivel) {
    this.id = 0;
    this.empresa = empresa;
    this.titulo = titulo;
    this.descricao = descricao;
    this.localizacao = localizacao;
    this.nivel = nivel;
  }
}

module.exports = Vaga;