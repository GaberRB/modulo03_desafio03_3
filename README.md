<h1> # modulo_03_desafio </h1>

<b># Modulo 3 Desafio 3.3</b>

Construção portfolio desafio 3.3 fullstack do bootcamp <a href="https://rocketseat.com.br/" target="_blank">Launchbase Rocketseat.</a> <img src="https://img.icons8.com/emoji/24/000000/rocket-emji.png"/>

Criação do servidor utilizando Express NodeJS , injetando template engine com Nunjucks trazendo dados do back-end para o front. 
Ao clicar nos cartões referente aos cursos será redirecionado para a pagina do curso, atráves do ID buscado no navegado onde o mesmo será encontrado no servidor.
Caso não encontre, execeção para pagina não encontrada (404). 
Ps: Transição do background, gif embutindo o estilo direto na DOM com Javascript. 

<h3> Dependências</h3>
<code> npm install express </code>
<code> npm install nunjucks </code>

<h3> Como usar </h3>
<code> npm start </code>
      <p> No navegador : http://localhost:5000/ </p>
 
Exemplo: 

<code> {% for stack in about.stacks %}<br>
      < li > {{stack.name}}</ li ><br>
{% endfor %}<br></code>



<h3>Na Pratica</h3>

<img src="https://user-images.githubusercontent.com/28874479/85216703-4d18f380-b35e-11ea-99d2-733222002766.gif"/>

Tecnologias utilizadas :


<img src="https://img.icons8.com/color/24/000000/html-5.png"/><a href="https://www.w3schools.com/html/" target="_blank">HTML</a>

<img src="https://img.icons8.com/color/24/000000/css3.png"/><a href="https://www.w3schools.com/css/" target="_blank">CSS</a>

<img src="https://img.icons8.com/color/24/000000/javascript.png"/><a href="https://www.w3schools.com/js/" target="_blank">JS</a>

<img src="https://user-images.githubusercontent.com/28874479/85187872-6f851100-b279-11ea-874c-68e52bff3864.png"/><a href="https://nodejs.org/en/" target="_blank">NodeJS</a> </br>

<img src="https://user-images.githubusercontent.com/28874479/85187819-07cec600-b279-11ea-8df6-0c714527f704.png"/><a href="https://mozilla.github.io/nunjucks/" target="_blank">Nunjucks</a>

<img src="https://img.icons8.com/fluent/24/000000/github.png"/><a href="https://guides.github.com/" target="_blank">GIT/GITHUB</a>
