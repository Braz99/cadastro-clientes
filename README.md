# Cadastro de clientes

## Índice

[Sobre](#sobre)
[Passos](#passos)
[Pastas](#pastas)
[Licença](#licença)
[Autor](#autor)



## Sobre

Este site foi feito com base no tutorial feito pela Cod3r Cursos no youtube: [Vídeo](https://www.youtube.com/watch?v=HJN5rX-3SDM). Como a versão atual do firebase é diferente da mostrada no vídeo tive que refazer a parte da configuração e integração, aprendendo mais sobre o firebase no processo. O projeto consiste em registrar dados de um cliente, dando a possibilidade de alterar os dados ou excluí-los. Tudo isso é registrado usando o firestore.  


Link: [Cadastro Clientes Vercel](https://cadastro-clientes-simples.vercel.app/) - Somente uma demonstração, não cadastre clientes, pois resultará em erro por não ter o firestore configurado.

### Tecnologias

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/?hl=pt)

## Instalação
Você vai precisar ter instalado em sua máquina:

[GIT](https://git-scm.com)

[Node.js](https://nodejs.org/en/)

E também de um editor de códigos, de preferência o [VSCode](https://code.visualstudio.com/)

### Passos

- Primeiro clone o projeto, use o terminal git bash, pode ser também o cmd, com o comando <code>git clone https://github.com/Braz99/cadastro-clientes.git</code>
- Depois abra a pasta no terminal usando o comando <code> cd caminho da pasta </code>
- Com a pasta selecionada é hora de instalar todas as dependências do projeto com o comando <code>npm install</code>
- Para este projeto será necessário criar um projeto no [Firebase](https://firebase.google.com/?hl=pt) e adicionar um app a ele, basta seguir a etapa 1 neste link: [Criar um projeto e adicionar um app](https://firebase.google.com/docs/web/setup?hl=pt-br)
- De posse com os dados da configuração do firebase, abra no seu editor de códigos a pasta do projeto clonado e crie um arquivo chamado de *__.env.local__* (Variáveis de ambiente)
- Dentro deste arquivo(.env.local) registre a configuração, siga a seguinte nomenclatura(Se alterar, lembre-se de mudar também no arquivo que se encontra em __src/backend/config.ts__) :

NEXT_PUBLIC_FIREBASE_APP_KEY= coloque aqui a app key

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= coloque aqui o auth domain

NEXT_PUBLIC_FIREBASE_PROJECT_ID= coloque aqui o project id 

- Com tudo pronto, basta executar a aplicação em modo de desenvolvimento, use o comando <code>npm run dev</code> no terminal de sua preferência
- O servidor inciará na porta:3000 - acesse http://localhost:3000


### Pastas

Na pasta src há:
- A pasta backend que configura o firebase e a integração deste ao projet
- A pasta Components onde estão todos os componentes do projeto
- A pasta Core que contém a classe Client e a interface para as funçoes do CRUD
- A pasta Hooks que serve para colocar os hooks personalizados, criados para isolar a lógica da aplicação, retirando assim dos compoentes ou das páginas, deixando o código mais limpo
- A pasta pages contém todas as páginas do projeto, que no caso é somente o index pois é feito uma lógica nela mesma para exibir ou a tabela de dados ou o formulário para cadastrar/alterar os dados do cliente
- A pasta styles que importa o Tailwind para ser usado na aplicação

Na pasta public há somente o ícone do projeto.

Informação: As configurações do tailwind se encontram no arquivo **tailwind.config.js** e as do typescript no **tsconfig.json**, ambos na raiz do projeto.



## Licença 
License MIT

## Autor 
Fabrício Brazil
