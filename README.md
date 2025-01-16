# Trybe Futebol Clube

Bem-vindo ao repositório do projeto **Trybe Futebol Clube (TFC)**, uma aplicação web desenvolvida para gerenciar partidas e classificações de times de futebol.

## Descrição

O TFC é uma plataforma que simula a organização de partidas de futebol. Com ela, é possível:
- Cadastrar e visualizar partidas.
- Verificar a classificação dos times com base nos resultados.
- Atualizar o placar de partidas em andamento.

## Funcionalidades

- **Partidas**: Cadastro, listagem e atualização de resultados.
- **Classificação**: Exibe a tabela de classificação geral, de mandantes e de visitantes.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Sequelize
- Express
- MySQL
- JWT (JSON Web Token)
- Docker
- Mocha, Chai, Sinon (para testes)

## Instalação e Execução

<details>
  <summary><strong>Clonando o repositório e configurando o ambiente</strong></summary>

  1. Clone o repositório usando o link SSH:

     ```bash
     git clone git@github.com:l7coutinho/Projeto-TFC.git
     ```

  2. Navegue até o diretório do projeto:

     ```bash
     cd Projeto-TFC
     ```

  3. Instale as dependências:

     ```bash
     npm install
     ```

</details>

<details>
  <summary><strong>Rodando a aplicação</strong></summary>

  Para executar o projeto com Docker:

  ```bash
  npm run compose:up
  ```

  Para parar os containers:

  ```bash
  npm run compose:down
  ```
</details>

## O que foi desenvolvido por mim:

- `backend/src/controller`
- `backend/src/database`
- `backend/src/interfaces`
- `backend/src/middlewars`
- `backend/src/models`
- `backend/src/routes`
- `backend/src/service`
- `backend/src/tests`
- `backend/src/utils`
- `backend/app.ts`
