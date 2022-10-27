$(document).ready(function() {

    $('.btn_aum').click(function () {
        
        var pessoa = $(this).data("value")

        if ( pessoa == "scorpion" ) {
            $('.jogador1').hide(2000)
        }
        else {
            console.log( $('.jogador_2_vida')   )

            $('.jogador_2_vida').attr("width", "100%")
        }

    })

})