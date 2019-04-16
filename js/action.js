

$(document).ready(function() {


        
    //$('#bground').addClass("bgBlur"); 

    /*
    setTimeout(function() { 
        $('.cabecera').fadeIn(1000);
    }, 1500);
    */

    setTimeout(function() { 
        $('#retrato').fadeIn(1000);
    }, 500);

    setTimeout(function() { 
        $('#nombre').fadeIn(1000);
    }, 750);

    setTimeout(function() { 
        $('#estudiante').fadeIn(1000);
    }, 875);

    setTimeout(function() { 
        $('.cuadro').fadeIn(1000);
        $('.mtext').fadeIn(1000);
    }, 1000);

    setTimeout(function() { 
        $('.cuadro').animate({height: 'auto'}, 250);
    }, 1200);
    
    setTimeout(function() { 
        $('.cuadro *').not('.apcontent').not('.hback').fadeIn(1000);
    }, 1750);


    $('.apartado').mouseenter(function(){
        $('body').css('cursor', 'pointer');
        $(this).animate({'backgroundColor': "rgba(115,115,115,0.5)"}, 200);
        $(this).children('.ddown').animate({opacity: 1}, 100);
    });

    $('.apartado').mouseleave(function(){
        $('body').css('cursor', 'auto');
        $(this).animate({'backgroundColor': "rgba(153,153,153,0.5)"}, 200);
        $(this).children('.ddown').animate({opacity: 0}, 100);
    });

    $('.apartado.cerrado').click(function(){

        $(this).removeClass('cerrado');
        $(this).children('.hback').fadeIn(1000);
        $(this).children('.ddown').animate({opacity: 0}, 100);
        $(this).children('.dup').animate({opacity: 1}, 100);
        
        $(this).children('.apcontent').fadeIn(1000);
    });


    $('.hback').click(function(){
        $(this).parent().children('.ddown').animate({opacity: 1}, 100);
        $(this).parent().children('.dup').animate({opacity: 0}, 100);
        $(this).parent().children().not('.ddown').fadeOut(1000);
        $(this).parent().addClass('cerrado');
    });




})