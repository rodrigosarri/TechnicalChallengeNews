# React App

Este projeto foi construído com a versão mais recente do React (18.2.0), aproveitando as funcionalidades e melhorias mais atuais dessa biblioteca. Para obter mais informações sobre o React e aprender como desenvolver um aplicativo utilizando esta ferramenta, consulte a documentação oficial e os recursos de aprendizagem disponíveis.

[Create React App](https://github.com/facebook/create-react-app).

## Executanto o projeto

Para configurar corretamente o ambiente do projeto, é necessário adicionar um arquivo `.env` na raiz do diretório. Dentro deste arquivo, inclua a variável que especifica a URL e a porta utilizadas pelo backend, garantindo assim a comunicação adequada entre os serviços.

```
REACT_APP_API_BASE_URL=http://localhost:3001
```

Após incluir o arquivo executar a instalação utilizando o comando `npm install`
Abra o endereço [http://localhost:3000](http://localhost:3000) no navegador para ver a página em funcionamento em modo de **desenvolvimento**

Se o projeto foi inicializado utilizando Docker, a execução ocorrerá automaticamente segundo as configurações padrão estabelecidas. Se nenhuma confguração foi modificada, a execução se da em: http://localhost/

## Alguns numeros do projeto
O projeto conta com uma estrutura de **15 componentes**, cada um acompanhado por testes unitários, somando um total de **36 testes** realizados para assegurar a qualidade e o funcionamento correto dos componentes. Além disso, o projeto foi desenvolvido com **4 páginas (componentes)**, e a gestão de estados foi realizado com o uso do Redux. Para complementar, foram implementadas **3 funções de utilidade**, visando otimizar operações recorrentes e melhorar a eficácia do código. Por fim, o projeto adota práticas de código limpo e organizado, com a utilização de ferramentas de lint para garantir a padronização e a manutenção da qualidade do código-fonte.

## Cobertura de testes
Foi gerado de forma automática através do comando: `npm run test:coverage` até o momento da publicação deste projeto e o arquivo para visualização encontra-se na pasta `coverage/Icov-report/src/index.html`

[Clique aqui para visualizar o arquivo.](https://github.com/rodrigosarri/TechnicalChallengeNews/blob/main/frontend/coverage/Icov-report/src/index.html)

## Imagens do projeto

![Tela 1](https://github.com/rodrigosarri/TechnicalChallengeNews/blob/main/frontend/technical_challenge_news_screen1.png)

![Tela 2](https://github.com/rodrigosarri/TechnicalChallengeNews/blob/main/frontend/technical_challenge_news_screen2.png)

![Tela 3](https://github.com/rodrigosarri/TechnicalChallengeNews/blob/main/frontend/technical_challenge_news_screen3.png)