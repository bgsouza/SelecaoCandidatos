# Teste - Selecão de Vagas
Api para cadastro de vagas, candidatos e busca ordebada pelo melhor score

## Dependências
 - NodeJS >= 8.0.0 
 - Express >= 4.0

## Rodando a aplicação
 - Localmente:
  - $ cd <raiz>
  - $ npm i
  - $ npm run start
 - Docker:
  - todo

Acessar a api: http://127.0.0.1:5000

# Endpoints
 - GET: /
 - POST: /v1/vagas
   - body: 
      ``
      {
        "empresa": "Teste",
        "titulo": "Vaga teste",
        "descricao": "Criar os mais diferentes tipos de teste",
        "localizacao": "A",
        "nivel": 3
      }
    ``
 - POST: /v1/pessoas
   - body:
      ``
      {
        "nome": "John Doe",
        "profissao": "Engenheiro de Software",
        "localizacao": "C",
        "nivel": 2
      }
      `` 
 - GET: /v1/...

## Notas
 - Utiliza a implementação [Dijkstra's](https://github.com/andrewhayward/dijkstra/blob/master/graph.js) para resolução de rotas

## Uso

## Testes
