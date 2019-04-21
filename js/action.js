

function extenderDiv(selector){

   totalHeight = 0;
   selector.children().not('.hback').not('.sdrop').each(function(){
        totalHeight += $(this).outerHeight(true); // true = include margins
    });
    console.log("Total Height: " + totalHeight + "px");

    return totalHeight;

}





$(document).ready(function() {

    cuerpo = $('body');
    retrato = $('#retrato');
    nombre = $('#nombre');
    titulo = $('#estudiante');
    tarjeta = $('#tarjeta');
    cuadros = $('.cuadro');
    apartados = $('.apartado');
    tApartados = $('.mtext');

    initHeight1 = '40px';
    expHeight = extenderDiv(tarjeta);

    ancho = $(window).width();

    if (ancho <= 520) {
        tarjeta.removeClass('ml-5');
        tarjeta.addClass('tarjetaMovil');
    }


    setTimeout(function() { 
        retrato.fadeIn(1000);
    }, 500);

    setTimeout(function() { 
        nombre.fadeIn(1000);
    }, 750);

    setTimeout(function() { 
        titulo.fadeIn(1000);
    }, 875);

    setTimeout(function() { 
        cuadros.fadeIn(1000);
        tarjeta.fadeIn(500);
        tApartados.fadeIn(1000);
    }, 900);

    setTimeout(function() { 
        if ((ancho <= 450) || (750 < ancho && ancho < 830) ){
            tarjeta.animate({height: '175px'}, 250);
        }
        else tarjeta.animate({height: extenderDiv(tarjeta)}, 250);
    }, 1200);
    
    setTimeout(function() { 
        tarjeta.find('*').animate({opacity: 1}, 250);
        cuadros.find('*').not('.apcontent').not('.hback').fadeIn(1000);
    }, 1750);


    apartados.mouseenter(function(){
        let apartado = $(this);

        cuerpo.css('cursor', 'pointer');
        apartado.animate({'backgroundColor': "rgba(115,115,115,0.5)"}, 200);

        apartado.children('.sdrop').animate({opacity: 1}, 100);
    
    });

    apartados.mouseleave(function(){
        let apartado = $(this);

        cuerpo.css('cursor', 'auto');
        apartado.animate({'backgroundColor': "rgba(153,153,153,0.5)"}, 200);
       
       apartado.children('.sdrop').animate({opacity: 0}, 100);

        apartado.finish();
    });


    apartados.click(function(){
        let apartado = $(this);

        if(apartado.hasClass('cerrado')){

            apartado.children('.sdrop').children('.ddown').removeClass('fa-angle-down').addClass('fa-angle-up');
            apartado.children('.hback').fadeIn(1000);
            apartado.animate({height: extenderDiv(apartado)}, 250);

            apartado.children('.apcontent').fadeIn(500);

        }
        else {

            apartado.children('.sdrop').children('.ddown').removeClass('fa-angle-up').addClass('fa-angle-down');
            
            apartado.children().not('.sdrop').fadeOut(250);
            apartado.animate({height: '60px'}, 250);
            
            
        }

        apartado.toggleClass('cerrado'); 
    });




});