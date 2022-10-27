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

})