<h1 align="center">
    <img alt="Rocketseat" title="Rocketseat" src=".github/rocketseat.png" width="60px" />
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
  </p>
<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

</p>

<br>

<p align="center">
  <img alt="Sistema" src=".github/imagem1.PNG" width="100%">
</p>

## API rest para cadastro de usuario

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/) - v14.4.0
- [Mongo](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) - 19.03.8
- [Yarn](https://yarnpkg.com/) - 1.22.4
- [Npm](https://www.npmjs.com/) - 6.14.5


## 💻 Projeto

Projeto para cadastro de usuario usando NodeJS, Express, MongoDB e Docker.

Esse projeto foi feito acompanhando a video aula do Youtube:
 
- Aula 1[clique aqui](https://www.youtube.com/watch?v=BN_8bCfVp88).
- Aula 2[clique aqui](https://www.youtube.com/watch?v=KKTX1l3sZGk).
- Aula 3[clique aqui](https://www.youtube.com/watch?v=Zwdv9RllPqU).

## 🚀 Como Rodar

- Clone o projeto.
- Rode o comando "yarn install" para instalar as dependências.
- Rode o comando "docker run --name mongodb -p 27017:27017 -d -t mongo"
- docker ps para ver se o Mongo está rodando no Docker.
- Caso não esteja docker start mongo para rodar.
- Rode o comando "node src/index.js" para iniciar a API.
- Para testar a API acesse localhost:3000.

## 👩🏿‍💻 Rotas

- **`POST auth/register`**: Rota crair um usuario;
Envio
```
{
    "name": "João",
    "email": "joao3@joao.com",
    "password": "123456"
}

```
Retorno
```
{
    "user": {
        "_id": "6020684de0458a0c6c2ceaf6",
        "name": "João",
        "email": "joao4@joao.com",
        "createdAt": "2021-02-07T22:23:09.011Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6IjYwMjA2ODRkZTA0NThhMGM2YzJjZWFmNiJ9LCJpYXQiOjE2MTI3MzY1ODksImV4cCI6MTYxMjgyMjk4OX0.vbU6uG_RalGcVEfeEtErqedD8-BjBnKr_DHdy3H-liQ"
}
```

- **`POST auth/authenticate`**: Rota para autenticar o usuario;
Envio
```
{
    "email": "joao3@joao.com",
    "password": "123456"
}

```
Retorno
```
{
    "user": {
        "_id": "6020684de0458a0c6c2ceaf6",
        "name": "João",
        "email": "joao4@joao.com",
        "createdAt": "2021-02-07T22:23:09.011Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJpZCI6IjYwMjA2ODRkZTA0NThhMGM2YzJjZWFmNiJ9LCJpYXQiOjE2MTI3MzY1ODksImV4cCI6MTYxMjgyMjk4OX0.vbU6uG_RalGcVEfeEtErqedD8-BjBnKr_DHdy3H-liQ"
}
```

- **`POST auth/forgot_password`**: Rota para gerar token para mudar senha;
Envio
```
{
    "email": "jamjs7@gmail.com"
}

```
Retorno
```
{
    OK
}
```

- **`POST auth/reset_password`**: Rota para para mudar senha;
Envio
```
{
    "email": "jamjs7@gmail.com",
    "token": "7bc2403e52028b54fec0aa88357b708646549ce2",
    "password": "654321"
}

```

- **`POST auth/projects`**: Rota para usuarios autenticados verem os projetos;
Envio
```
{
    "title": "Novo projeto",
    "description": "Descrição do novo projeto"
}
```

Retorno
```
{
    "project": {
        "tasks": [],
        "_id": "60228e667396f122946439d4",
        "title": "Novo projeto",
        "description": "Descrição do novo projeto",
        "createdAt": "2021-02-09T13:30:14.165Z",
        "__v": 0
    }
}
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

