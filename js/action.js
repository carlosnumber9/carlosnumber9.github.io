

function extenderDiv(selector){

    /*
    let despTotal;

    selector.each(function(){
        despTotal = 0;
        let hijo = $(this);
        hijo.children().each(function(){

            if($(this).is('a')) {
                console.log("Encontrado un link con longitud " + extenderDiv($(this)));

                despTotal = despTotal + extenderDiv($(this));  
            }
            else {
                despTotal = despTotal + $(this).outerHeight();
                console.log("Elemento con longitud " + $(this).outerHeight());
            }

            
            
        });
    });

    return despTotal;
    */
   totalHeight = 0;
   selector.children().each(function(){
        totalHeight += $(this).outerHeight(true); // true = include margins
    });
    console.log("Total Height: " + totalHeight + "px");

    return totalHeight;



}





$(document).ready(function() {

    retrato = $('#retrato');
    nombre = $('#nombre');
    titulo = $('#estudiante');
    tarjeta = $('#tarjeta');
    
    initHeight1 = '40px';
    expHeight = extenderDiv(tarjeta);


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
        $('.cuadro').fadeIn(1000);
        tarjeta.fadeIn(500);
        $('.mtext').fadeIn(1000);
    }, 900);

    setTimeout(function() { 
        tarjeta.animate({height: extenderDiv(tarjeta)}, 250);
    }, 1200);
    
    setTimeout(function() { 
        tarjeta.find('*').animate({opacity: 1}, 250);
        $('.cuadro *').not('.apcontent').not('.hback').fadeIn(1000);
    }, 1750);


    $('.apartado').mouseenter(function(){
        let apartado = $(this);

        $('body').css('cursor', 'pointer');
        apartado.animate({'backgroundColor': "rgba(115,115,115,0.5)"}, 200);
        if(apartado.hasClass('cerrado')) apartado.children('.ddown').animate({opacity: 1}, 100);
        else apartado.children('.dup').animate({opacity: 1}, 100);
    });

    $('.apartado').mouseleave(function(){
        let apartado = $(this);

        $('body').css('cursor', 'auto');
        apartado.animate({'backgroundColor': "rgba(153,153,153,0.5)"}, 200);
        if(apartado.hasClass('cerrado')) apartado.children('.ddown').animate({opacity: 0}, 100);
        else apartado.children('.dup').animate({opacity: 0}, 100);
    });


    $('.apartado').click(function(){
        let apartado = $(this);

        if(apartado.hasClass('cerrado')){

            apartado.children('.hback').fadeIn(1000);
            apartado.children('.ddown').animate({opacity: 0}, 100);
            apartado.children('.dup').animate({opacity: 1}, 100);

            apartado.animate({height: extenderDiv()}, 250);

            apartado.children('.apcontent').fadeIn(1000);

        }
        else {

            apartado.children('.ddown').animate({opacity: 1}, 100);
            apartado.children('.dup').animate({opacity: 0}, 100);
            apartado.children().not('.ddown').fadeOut(1000);
            apartado.animate({height: ''}, 250);
            
            
        }

        apartado.toggleClass('cerrado'); 
    });



/*
    $('.apartado.cerrado').click(function(){

        $(this).toggleClass('cerrado');

        $(this).children('.hback').fadeIn(1000);

        $(this).children('.ddown').animate({opacity: 0}, 100);
        $(this).children('.dup').animate({opacity: 1}, 100);
        
        $(this).children('.apcontent').fadeIn(1000);
    });


    $('.hback').click(function(){

        $(this).parent().children('.ddown').animate({opacity: 1}, 100);
        $(this).parent().children('.dup').animate({opacity: 0}, 100);

        setTimeout(function(){
            $(this).parent().children().not('.ddown').fadeOut(1000);
        }, 500);
        
        $(this).parent().each().animate({height: '40px'}, 250);
        
        $(this).parent().toggleClass('cerrado');
    });
*/



});