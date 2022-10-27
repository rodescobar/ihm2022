$(document).ready(function () {
    $('.imagem').click(function () {
        if ($(this).parent().children('.itens').is(":hidden"))
            $(this).parent().children('.itens').show(500)
        else
            $(this).parent().children('.itens').hide(500)
    })

    $('#validar').click(function() {
        $('.fundo').find('input[type=text]').each(function() {
            console.log($(this).data("type"))
            console.log($(this).val())
        })
    })

})