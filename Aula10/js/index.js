$(document).ready(function() {
    
    $('#testar').click(function(){
        alert("Olá mundo.")
    })

    var aux = 0

    $("#campo3").keydown(function() {
        //aux = aux + 1
        aux += 1

        if ( aux > 10 ) {
            console.log('Ultrapassou o número máximo de caracteres')
        }

    })


    $('#campo5').keydown(function() {
        var valor = $("#campo5").val() //digitado
        var total = valor.length + 1

        var num_maximo = $("#campo5").attr("maxlength")
        
        var texto = `${total} / ${num_maximo}`
        // 5 / 10

        $(".numero").empty() //apagar o que tem dentro dela
        $(".numero").append( texto ) //adiciono


    })

})