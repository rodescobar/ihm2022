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

2) Entendimento do código do item 1
- $ representa que você irá utilizar jQuery
- (document) indica qual objeto será utilizado
- .ready() em qual momento que será ativado
- function() {} bloco onde existirá sua codificação.

*Exemplo* Ao clicar no botão que possui o _id_:_teste_, uma mensagem será apresentada na tela
```js
$(document).ready(function() {

    $("#teste").click(function() {
        alert("Olá Mundo")
    })
})
```

No exemplo é possível ver que:
- `$` utilizando jQuery
- `("#teste")` no objeto com id teste
- `.click()` no evento click
- `function(){ ... }` mostra em tela a mensagem _Olá mundo_
