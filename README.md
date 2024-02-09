<div align="center">
  
# Quest Formulário

<a href="https://rafinha-dev.github.io/QuestJsForm/" > 
  <img 
    src="https://media.licdn.com/dms/image/C4D0BAQG9RVtXwXXxfQ/company-logo_200_200/0/1663864652596/devquest_dev_em_dobro_logo?e=2147483647&v=beta&t=H03oiCKR11eeezclXLSZ8IvipbGFl61T_ESnjIVzXYc" 
    width="70px">
</a>
  
`clique na logo para abrir o site`  
  
</div>

Essa foi o exercício para treinar responsividade, cópia de um wireframe do figma e a lógica de programação com preênchimento dos campos corretos. 
Ao submeter o formulário com campo não preênchidos o campo mudará de cor para vermelho, e caso tenha sido preênchido sera submetido como verde. 

Atualmente no html existe o regex, agora não sendo necessário javascript para se beneficiar dos seus requisitos no formulário. 
Porém existem algumas resalvas no uso desse atributo no HTML que não atenderiam ao projeto.

1. O atributo **_requied_** faz com que os campos sejam obrigatórios, porém ele usa um prevent defaut padrão que não permite que as bordas fiquem vermelhas até ser preênchido corretamente.
2. **_patern_** é outro atributo que poderia ser solicitado, porém o projeto só citou campos vazios, e o patens contem o mesmo problema em relação a proposta do projeto, o preventdefaut padrão exibirá uma flag até o campo ser preenchido corretamente.

A lógica de programação do projeto que a principio parece complicada, só se manifesta praticidade a partir do conhecimento do metodo **forEach()**, este que por meio do callback percorre todos os inputs
tornando possível usar um listner dentro dele que já percorreu o array.
Outro problema seria inserir o label nos campos corretos. Mas que com o método **nextElementSibling()** torna possível acessar o elemento filho sem criar um novo **forEach()** para o array de **label** dos elementos de **input**.

 

## Tecnologias utilizadas
- [x] HTML
- [x] CSS
- [x] JS 

### Desafio 

Para cumprir o desafio do projeto acesse o folder com o PDF:  <a href="src/assets/desafio/Desafio HTML + CSS + JS Intermediário.pdf" >Desafio</a>

Figma do projeto na descrição do desafio.

# Contato 
Para saber como foi o processo de criação visite meu blog ou meu linkedin, mais projetos como esse entre em contato e me acompanhe nas redes sociais. 

[![linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafinhadev/)&nbsp;
[![instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/rafinhadev/)&nbsp; 📫
<a href="https://dev.to/rafinhadev" target="blank"><img src="https://custom-icon-badges.demolab.com/badge/-Blog_dev.to-808080?style=for-the-badge&logo=dev.to&logoColor=white"></a>
[contactrodrigues21@gmail.com](mailto:contactrodrigues21@gmail.com) 📫
