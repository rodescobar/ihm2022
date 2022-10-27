# Aula 10 - jQuery

## jQuery

### Importando o jQuery para a aplicação.

- Criar uma _TAG_ `<script>` antes do `</body>`
- Adicionar a o parâmetro *src* à _TAG_ criada e colocar o endereço abaixo
    - https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js

## Criar nosso arquivo JS
- Este arquivo possuirá nosso desenvolvimento
- O jQuery é apenas o core para nos auxiliar
- Criando nosso _JS_
    - Adicionando uma _TAG_ `<script>`
    - Abaixo da _TAG_ com o parâmetro do jQuery
    - Adiciono a nossa _TAG_ o parâmetro *src* e o caminho do arquivo

OBS: O ideal é criar uma pasta *JS* e criar o arquivo dentro dela.

OBS2: Procure nomear o arquivo, com o mesmo nome do HTML

## Desenvolvento nosso primeiro Hello World em JS

1) Sempre que for utilizar jQuery, todos o desenvolvimento deve estar dentro do bloco 
```js
$(document).ready(function() {
    .....
})
```
