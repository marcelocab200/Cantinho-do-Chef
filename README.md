Este é o Cantinho do Chef, um sistema de gestão de entregas que desenvolvi como desafio técnico para a IVARE.

O projeto envolveu utilizar uma API de Rotas com o objetivo de avaliar a integração do front em React com APIs.

Aqui, deixo um breve passo a passo de como você pode rodar o projeto localmente em sua máquina.

## Clone o repositório

`git clone git@github.com:marcelocab200/Desafio-IVARE.git`

## Crie o arquivo .env no diretório raiz
No Cantinho do Chef, utilizei a API Open Route Service. Mais informações você consegue obter na documentação, além de adquirir a chave da API:
https://openrouteservice.org

Após isso, crie na .env a variável `REACT_APP_OPEN_ROUTE_SERVICE_API_KEY`, onde você vai armazenar a chave da ORS.

## Então, basta instalar as dependências:

`npm install`

## E por fim rodar

`npm start`

## Comentários adicionais

Gostaria de comentar sobre a decisão técnica por trás do projeto. Por ser um sistema de estrutura simples, optei por utilizar o React Context API para realizar o gerenciamento de estados entre componentes. Além disso, utilizei Typescript para evitar erros de tipagem no projeto, que poderiam vir a atrasar a produção. Por fim, utilizei o React Router a fim de trazer uma organização de páginas ao projeto, utilizei outros recursos que iriam facilitar a codagem (como SASS) e recursos visuais (como o Swiper na página de Cadastro de Pedidos). 
