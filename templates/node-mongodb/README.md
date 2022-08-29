# Template para Node

### Sobre

O objetivo deste projeto é fornecer um template com recursos comuns à todos os projetos em Node.js

### Tecnologias

- Node.js
- Express
- Mongodb

### Instalação do projeto (com o docker)

Acesse a pasta do projeto e rode o comando:

    docker-compose up -d

### Instalação do projeto (sem o docker)

Acesse a pasta do projeto e rode o comando para instalar as dependências npm:

    npm install

Criar arquivo .env e configurar as variáveis de ambiente, semelhantes ao arquivo ".env-example".

E, por fim, rode o projeto:

```
  npm start
```

### Observações

Os endpoints criados podem ser importados por meio do arquivo "endpoints.json" em um Software como o Postman (ou semelhante).
