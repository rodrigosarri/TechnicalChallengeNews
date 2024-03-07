# Node.js

**Informações sobre a API em Node.js**

Esta API foi desenvolvida utilizando **TypeScript**, aderindo às melhores práticas de desenvolvimento. A biblioteca **Sequelize** foi selecionada como ferramenta ORM. Além disso, existem dois scripts de desenvolvimento e teste pré-produção para atender às necessidades específicas de desenvolvedores: um para ambientes Windows e outro para ambientes Linux.

## Configuração Inicial

Adicione um arquivo `.env` na raiz do projeto com as seguintes variáveis (substitua os dados pelos dados corretos de banco de dados):

```
API_HOST=localhost
API_PORT=3000
DB_HOST=localhost
DB_USER=app_user
DB_NAME=app_db
DB_PASS=app_password
DB_DIALECT=mysql
```

## Executando o projeto em Ambiente de Desenvolvimento.

Para simular o ambiente de desenvolvimento, siga os passos:

Instale os pacotes através do comando
	`npm install`

-   Execute o script correspondente ao seu sistema operacional:
	-   **Windows**:
	`npm run develop`

	-   **Linux**:
	 `npm run developLinux`

## Testando em Ambiente Pré-Produção

Para simular o ambiente pré-produção, siga os passos:

Instale os pacotes através do comando
	`npm install`

Gere o build do projeto com o comando:
    `npm run build`

-   Execute o script correspondente ao seu sistema operacional:
	-   **Windows**:
	`npm run homologWindows`

	-   **Linux**:
	 `npm run homologLinux`

## Swagger
Para otimizar o processo de execução e monitoramento dos endpoints deste projeto, incorporamos o Swagger. Esta ferramenta disponibiliza detalhes sobre cada endpoint, os quais podem ser facilmente acessados após a inicialização do projeto. Para visualizá-los, navegue até
http://localhost:3001/api/docs/#/ se o projeto for executado em modo de desenvolvedor sem Docker,
ou até http://localhost/api/docs/#/ caso esteja utilizando Docker para a execução.

## Dados simulados
Para facilitar a visualização e o teste do projeto, empregou-se a biblioteca Faker (https://fakerjs.dev/) para a geração automática de dados fictícios em notícias. É crucial remover este componente antes de migrar o projeto para o ambiente de produção, a fim de assegurar a integridade e a relevância dos dados apresentados.