$(document).ready(function() {
    
    $('.imagem').click(function () {
        var item = $(this).parent().children('.itens')

        console.log(item.is(":hidden"))

        if ( !item.is(":hidden") ) {
            item.hide('2000')
        } 
        else {
            item.show('2000')
        }
    })

})