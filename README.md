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
- **`GET auth/projects`**: Rota para usuarios autenticados verem os projetos;
Retorno
```
{
    "projects": [
        {
            "tasks": [
                {
                    "completed": false,
                    "_id": "60229802b6776f3a00c9fcfc",
                    "title": "Novo tarefa 1",
                    "assignedTo": "602292c0630f3d4aec44526b",
                    "project": "60229802b6776f3a00c9fcfb",
                    "createdAt": "2021-02-09T14:11:14.857Z",
                    "__v": 0
                },
                {
                    "completed": false,
                    "_id": "60229802b6776f3a00c9fcfd",
                    "title": "Novo tarefa 2",
                    "assignedTo": "602292c0630f3d4aec44526b",
                    "project": "60229802b6776f3a00c9fcfb",
                    "createdAt": "2021-02-09T14:11:14.857Z",
                    "__v": 0
                }
            ],
            "_id": "60229802b6776f3a00c9fcfb",
            "title": "Novo projeto 6",
            "description": "Descrição do novo projeto 6",
            "user": {
                "_id": "6021c427e6d27b282cad985c",
                "name": "João",
                "email": "jamjs7@gmail.com",
                "createdAt": "2021-02-08T23:07:19.427Z",
                "__v": 0
            },
            "createdAt": "2021-02-09T14:11:14.848Z",
            "__v": 1
        }
    ]
}
```

- **`GET auth/projects/:projetecId`**: Rota para usuarios autenticados verem detalhe do projeto;
Retorno
```
{
    "tasks": [
        {
            "completed": false,
            "_id": "60229802b6776f3a00c9fcfc",
            "title": "Novo tarefa 1",
            "assignedTo": "602292c0630f3d4aec44526b",
            "project": "60229802b6776f3a00c9fcfb",
            "createdAt": "2021-02-09T14:11:14.857Z",
            "__v": 0
        },
        {
            "completed": false,
            "_id": "60229802b6776f3a00c9fcfd",
            "title": "Novo tarefa 2",
            "assignedTo": "602292c0630f3d4aec44526b",
            "project": "60229802b6776f3a00c9fcfb",
            "createdAt": "2021-02-09T14:11:14.857Z",
            "__v": 0
        }
    ],
    "_id": "60229802b6776f3a00c9fcfb",
    "title": "Novo projeto 6",
    "description": "Descrição do novo projeto 6",
    "user": {
        "_id": "6021c427e6d27b282cad985c",
        "name": "João",
        "email": "jamjs7@gmail.com",
        "createdAt": "2021-02-08T23:07:19.427Z",
        "__v": 0
    },
    "createdAt": "2021-02-09T14:11:14.848Z",
    "__v": 1
}
```

- **`DELETE auth/projects/:projetecId`**: Rota para usuarios autenticados excluírem projeto;

- **`POST auth/projects`**: Rota para usuarios autenticados criarem projetos;
Envio
```
{
    "title": "Novo projeto 6",
    "description": "Descrição do novo projeto 6",
    "tasks":[
        {
            "title": "Novo tarefa 1",
            "assignedTo": "602292c0630f3d4aec44526b"
        },
        {
            "title": "Novo tarefa 2",
            "assignedTo": "602292c0630f3d4aec44526b"
        }
    ]
}
```

Retorno
```
{
    "project": {
        "tasks": [
            {
                "completed": false,
                "_id": "60229802b6776f3a00c9fcfc",
                "title": "Novo tarefa 1",
                "assignedTo": "602292c0630f3d4aec44526b",
                "project": "60229802b6776f3a00c9fcfb",
                "createdAt": "2021-02-09T14:11:14.857Z",
                "__v": 0
            },
            {
                "completed": false,
                "_id": "60229802b6776f3a00c9fcfd",
                "title": "Novo tarefa 2",
                "assignedTo": "602292c0630f3d4aec44526b",
                "project": "60229802b6776f3a00c9fcfb",
                "createdAt": "2021-02-09T14:11:14.857Z",
                "__v": 0
            }
        ],
        "_id": "60229802b6776f3a00c9fcfb",
        "title": "Novo projeto 6",
        "description": "Descrição do novo projeto 6",
        "user": "6021c427e6d27b282cad985c",
        "createdAt": "2021-02-09T14:11:14.848Z",
        "__v": 1
    }
}
```

- **`PUT auth/projects`**: Rota para usuarios autenticados alterarem projetos;
Envio
```
{
    "title": "Novo projeto 6",
    "description": "Descrição do novo projeto 6",
    "tasks":[
        {
            "title": "Novo tarefa 1",
            "assignedTo": "602292c0630f3d4aec44526b"
        },
        {
            "title": "Novo tarefa 2",
            "assignedTo": "602292c0630f3d4aec44526b"
        },
        {
            "title": "Novo tarefa 3",
            "assignedTo": "602292c0630f3d4aec44526b"
        }
    ]
}
```

Retorno
```
{
    "project": {
        "tasks": [
            {
                "completed": false,
                "_id": "60229a68c6444d4e2c73c17f",
                "title": "Novo tarefa 1",
                "assignedTo": "602292c0630f3d4aec44526b",
                "project": "60229802b6776f3a00c9fcfb",
                "createdAt": "2021-02-09T14:21:28.514Z",
                "__v": 0
            },
            {
                "completed": false,
                "_id": "60229a68c6444d4e2c73c180",
                "title": "Novo tarefa 2",
                "assignedTo": "602292c0630f3d4aec44526b",
                "project": "60229802b6776f3a00c9fcfb",
                "createdAt": "2021-02-09T14:21:28.515Z",
                "__v": 0
            },
            {
                "completed": false,
                "_id": "60229a68c6444d4e2c73c181",
                "title": "Novo tarefa 3",
                "assignedTo": "602292c0630f3d4aec44526b",
                "project": "60229802b6776f3a00c9fcfb",
                "createdAt": "2021-02-09T14:21:28.515Z",
                "__v": 0
            }
        ],
        "_id": "60229802b6776f3a00c9fcfb",
        "title": "Novo projeto 6",
        "description": "Descrição do novo projeto 6",
        "user": "6021c427e6d27b282cad985c",
        "createdAt": "2021-02-09T14:11:14.848Z",
        "__v": 2
    }
}
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

