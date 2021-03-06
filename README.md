# Serviço de busca de CEP
A API receberá um CEP, verifica se o mesmo é válido e retorna o endereço correspondente. 
Está sendo utilizada a API de busca do site viacep.com.br para obeter o endereço. 
Quando o CEP informado não possua endereço, faz se a substituição do último caractere da direita para esquerda que não seja 0, até encontrar um endereço. 

### Estratégia utilizada
1. Recebemos o parametro CEP no corpo de uma requisição. 
O CEP é convertido para string e validado se possui 8 caracteres. Caracteres especiais como '-' são removidos. 

2. É feita a requisição para busca do endereço. Em caso de sucesso, preparamos o retorno e devolvemos para o usuário. Se falhar é removido o último caracter, depois verifica quantos caracteres tem o cep, se menor que 8 adicionamos 0 até completar 8 caractes, e refeito o passo 1. 

3. Após terminar a troca de todos caracteres e não houver sucesso na requisição retorna-se 'CEP Inválido'. 

4. Foi criado um token simulação, que podera ser acessado na rota auth/. Você precisa dele para acessar a funcionalidade de CEP. O intuito é somente mostrar uma visão de autorização, por isso descartei utilizar mecanismos para gerar o token (como passport), para deixar o código mais simples.

## Pré-Requisitos
* node 10.12.0
* npm 6.4.1

## Porque NODE JS?
Escolhi está plataforma por ter mais destreza e conhecimento. Quando comecei a programar me deparei com diversos conceitos e tecnologias que deveria aprender (HTML, CSS, JavaScript e uma linguagem back-end). Como iria aprender JavaScript optei por manter a mesma linguagem no back-end com o NODE JS. Fiquei curioso sobre como rodar uma aplicação 
completa utilizando JavaScript, achei incrível utilizar JSON em tudo, e a facilidade de iniciar uma aplicação. A paixão pelo NODE ainda continua, e busco sempre evoluir e conhecer mais esta plataforma :)

## Arquitetura e Padrões
A estrutura do projeto foi pensada no padrão MVC, porém como não temos conexões a banco de dados e acesso a views as camadas MV foram ignoradas. 
A pasta service do projeto faz o papel do controller, recebendo e retornando as requisições. 
O projeto está separado em módulos: 
- Test
- Docs
- Src
    1. Routes
    2. Services

## Componentes
* eslint 5.10.0
* eslint-config-airbnb-base 13.1.0
* eslint-plugin-import 2.14.0
* jest 23.6.0
* supertest 3.3.0
* axios 0.20.0
* body-parser 1.19.0
* consign 0.1.6
* express 4.17.1
* swagger-ui-express 4.1.4

## Instalação
* npm i
* npm start
* Acesse http://localhost:3000

## O que ocorre nesse processo do protocolo HTTP entre o Client e o Server?
Quando um cliente digita um link no navegador e preciona enter, é feita uma requisição para um servidor de DNS. Este é responsável por encontrar o IP referente ao link. Por exemplo, quando o cliente digita www.netshoes.com.br o servidor DNS relaciona o link ao IP 201.48.47.74, este é o IP do servidor onde a aplicação está hospedada. O servidor recenbendo está requisição prepara uma resposta, com o conteúdo da página (html, css, corpo da resposta), e envia para o cliente. O Browser do cliente recebe está resposta e monta a página.

O HTTP é um protocolo de transferência de Hiper Texto. 