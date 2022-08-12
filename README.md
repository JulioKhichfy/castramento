# Cadastramento

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Objetivo

Criar um sistema contendo a inclusão, alteração, exclusão, consulta e listagem dos registros da 
tabela Cadastramento. 

Deverá criar API de interação com as telas a serem desenvolvidas, utilizando Java com autenticação 
através de token. 

O campo Estado será carregado através de um endpoint que será criado. 

Deverá existir uma tela principal, contendo os botões de acesso as funcionalidades, conforme 
mockup existentes; 

## Install

Execute `npm install` para gerar a pasta node_modules com as dependências do projeto, em seguida execute
`ne serve` e navegue até `http://localhost:4200/`

## Debug
https://javascript.plainenglish.io/debugger-for-chrome-is-dead-4f2c1175c26c

setup inicial:

1 - Open the extensions view (ctrl+shift+x) and search for @builtin @id:ms-vscode.js-debug

2 - Right click on the JavaScript Debugger extension and Disable it.

3 - Search for @id:ms-vscode.js-debug-nightly in the extensions view. Install that extension

Então:

1 - View -> Command Palette (shortcut — cmd+shift+p): Debug: JavaScript Debug Terminal

2 - No terminal de debug execute o ng serve

Finalmente:

1 - After starting your app again open View -> Command Palette and search for: Debug Open Link

2 - Now copy the url app is running with port number, exemplo: http://localhost:4200