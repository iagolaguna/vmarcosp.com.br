+++
title = "Criando Projeto Vuejs"
date = 2017-10-07T11:30:02-03:00
image = "images/posts/criando-projeto-vuejs/vuejs-vue-gs.png"
tags = ["javascript","vuejs"]
categories = ["Front-End"]
+++

Fala pessoal, tudo certo ? Esse vai ser o primeiro post do blog pra valer mesmo rs. Não sei ainda se a maioria dos posts vão ser nesse formato, vou descobrindo aos poucos. 

Pra quem me conhece, sabe que sou um amante de [VueJS](https://vuejs.org/). Posso dizer que foi amor à primeira vista, mas acho que essa história toda pode ficar pra um próximo post :). Pensando nisso decidi criar um post explicando como criar um projeto vue que utilize webpack, eslint e etc. Bom vamos ao que interessa!

> *Obs.: O foco deste post é ensinar como criar o projeto utilizando vue-cli, estou presumindo que você conheça o básico das tecnologias envolvidas (npm, webpack e etc.).*

## vue-cli

A forma mais simples de criar um projeto vue é utilizando o [*vue-cli*](https://github.com/vuejs/vue-cli). Ele é um CLI desenvolvido pela core team do VueJS que permite criar projetos facilmente, todo configurado para o ambiente de desenvolvimento e produção. Atualmente o vue-cli possui possui quatro templates de projeto:

- [webpack](https://github.com/vuejs-templates/webpack)
- [webpack-simple](https://github.com/vuejs-templates/webpack-simple)
- [browserify](https://github.com/vuejs-templates/browserify)
- [browserify-simple](https://github.com/vuejs-templates/browserify-simple)
- [simple](https://github.com/vuejs-templates/simple)

Eu gosto muito dos templates que utilizam wepback. Neste post iremos utilizar o *webpack*, quem sabe em outro post eu fale um pouco do *webpack-simple*.

## Instalação

Para instalar o *vue-cli* vamos utilizar o **npm**. Execute o seguinte comando no seu terminal:
```sh
npm i -g vue-cli
```
Esse comando irá instalalr o vue-cli globalmente no seu computador. Vamos testar se ele já está funciando utilizando o comando:
```sh
vue --version
```
Quando escrevi esse post, a versão mais atual do vue-cli era 2.9.1, o resultado então foi esse:
```sh
2.9.1
```

## Criando o projeto

Para criar o projeto vamos utilizar o seguinte comando:
```sh
vue init webpack my-project # Esse último parâmetro você pode trocar pelo nome que achar melhor
```

Se já tiver a pasta do projeto criada é só trocar o nome do projeto por ponto, fica assim:
```sh
vue init webpack .
```

Ele vai exibir uma mensagem de download e logo fará algumas perguntas que são necessárias pra configuração do projeto.
A primeira, segunda e terceira perguntas são simples apenas aperte *enter*.

- 4ª pergunta:


```sh
Install vue-router?(Y/n) 
```
Não irei incluir o vue-router nesse projeto, isso fica pra um próximo post. Então apenas aperte *n + enter*.

- 5ª

```sh
Use ESLint to lint your code? (Y/n)
```
Aperte enter e logo virá outra pergunta ainda sobre o *ESLint*, perguntando qual o padrão de lint que você utiliza:
```sh
Pick an ESLint preset (Use arrow keys)
❯ Standard (https://github.com/feross/standard) 
  Airbnb (https://github.com/airbnb/javascript) 
  none (configure it yourself) 
```
Aqui é uma escolha pessoal, eu utilizo *Standard*, mas você está livre para escolher qual seu padrão preferido.

- 6ª e 7ª

```sh
Setup unit tests with Karma + Mocha? (Y/n) 
```
```sh
Setup e2e tests with Nightwatch? (Y/n) 
```

Iremos deixar o ambiente configurado para tests, mas não falaremos sobre eles ainda, farei um post apenas para falar sobre testes com VueJS.

Pronto! O projeto já está criado, agora vamos intalar todas as dependências do projeto com o comando:
```sh
npm install
```

Feito isso, podemos observar a seguinte estrutura de pastas gerado pelo vue-cli:
![Imagem](/images/posts/criando-projeto-vuejs/estrutura-pastas.png)

## Rodando o projeto

Depois de tudo instalado e configurado, podemos inicializar o projeto utilizando o comando:
```sh
npm run dev
```
Esse comando irá startar um servidor *localhost* na porta *8080*, que está escutando todas as alterações nos arquivos da pasta **src**, para atualizar a página assim que salvos.
Se tudo der certo a aplicação já deve estar rodando, acesse no seu browser **localhost:8080**, você deve ver essa tela aqui:
![Imagem](/images/posts/criando-projeto-vuejs/vuejs-tela-inicial.png)

Bom galera, acho que é isso. Espero tenha ajudado, pretendo fazer muito mais posts sobre vue.
Até mais :)

> *<span style="font-size:30px;font-style:bold;">"</span>Se tu o desejas, podes voar, só tens de confiar muito em ti.*

> Steve Jobs
