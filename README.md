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

Esse projeto foi feito acompanhando a video aula do Youtube, [clique aqui](https://www.youtube.com/watch?v=BN_8bCfVp88) para acessar.

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
        "_id": "601e9eb52ed5e925a01e1c05",
        "name": "João",
        "email": "joao3@joao.com",
        "createdAt": "2021-02-06T13:50:45.656Z",
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

