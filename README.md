# Teste - Selecão de Vagas
Api para cadastro de vagas, candidatos e busca ordenada pelo melhor score

## Dependências
 - NodeJS >= 8.0.0 
 - Express >= 4.0

## Rodando a aplicação
 - Localmente:
  - $ cd <raiz>
  - $ npm i
  - $ npm run start
 - Docker:
  - build: $ docker build -t bgsouza/apiselecao .
  - run: $ docker run --name apiselecao -itd -p 5000:5000 bgsouza/apiselecao

**Acessar a api:** http://127.0.0.1:5000

## Testes
  - $ npm run test

## Endpoints
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
  - POST: /v1/vagas/:id/candidaturas/ranking
    - body: (nada)
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
  - POST: /v1/candidaturas
    - body:
      ``
      {
        "id_vaga": 1,
        "id_pessoa": 2
      }
      ``
      
**Disponivel no POSTMAN**: https://www.getpostman.com/collections/e1461c78e0e35f05c408

## Notas
 - Utiliza a implementação [Dijkstra's](https://github.com/andrewhayward/dijkstra/blob/master/graph.js) para resolução de rotas

## TODO
 - [TODO] Uso de injeção de dependência para usar o JsonDB
 - [OK] Melhoria na gestão de rotas (pois tem muitos arquivos)
 - [TODO] Inclusão de Logs
 - [OK] Cobertura de testes (90%): falta score e graph
 - [OK] Docker
