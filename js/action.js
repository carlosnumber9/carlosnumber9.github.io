// AUXILIAR FUNCTIONS


/**
 * Extends the size of a content DIV
 * @param {*} elementToExpand Content DIV to expand
 */
var expandContent = function(elementToExpand) {

    let totalHeight = 0;
    elementToExpand.children().not('.hback').not('.sdrop').each(function() {
        totalHeight += $(this).outerHeight(true); // true = include margins
    });
    return totalHeight;
};



/**
 * Makes every site DIV to appear with anmimations 
 */
var init = function() {

    const portrait = $('#portrait');
    const myName = $('#myName');
    const titulo = $('#estudiante');
    const card = $('#card');
    const cuadros = $('.cuadro');
    const tApartados = $('.mtext');
    const ancho = $(window).width();
    const sections = $('section');

    if (ancho <= 520) {
        card.removeClass('ml-5');
        card.addClass('tarjetaMovil');

        myName.removeClass('ml-5');
        myName.addClass('tarjetaMovil');

        titulo.removeClass('ml-5');
        titulo.addClass('tarjetaMovil');
    }

    if (ancho < 460) tApartados.css('font-size', '1rem');

    setTimeout(function() {
        portrait.fadeIn(1000);
    }, 500);

    setTimeout(function() {
        myName.fadeIn(1000);
    }, 750);

    setTimeout(function() {
        titulo.fadeIn(1000);
    }, 875);

    setTimeout(function() {
        cuadros.fadeIn(1000);
        card.fadeIn(500);
        tApartados.fadeIn(1000);
    }, 900);

    setTimeout(function() {
        if ((ancho <= 484) || (750 < ancho && ancho < 830)) {
            card.animate({ height: '175px' }, 250);
        } else card.animate({ height: expandContent(card) }, 250);
    }, 1200);

    setTimeout(function() {
        card.find('*').animate({ opacity: 1 }, 250);
        cuadros.find('*').not('.apcontent').not('.hback').fadeIn(1000);
    }, 1750);



    addMouseEnterEventListenersForSections(sections);

    addMouseLeaveEventListenersForSections(sections);

    addClickEventListenersForSections(sections);

};


/**
 * Defines the actions when mouse is inside a section container
 * @param {*} sectionsSelector 
 */
var addMouseEnterEventListenersForSections = function(sectionsSelector) {

    const body = $('body');
    sectionsSelector.mouseenter(function() {
        let section = $(this);
        body.css('cursor', 'pointer');
        section.animate({ 'backgroundColor': "rgba(115,115,115,0.5)" }, 200);
        section.children('.sdrop').animate({ opacity: 1 }, 100);
    });

};



/**
 * Defines the actions when mouse goes outside of a section container
 * @param {*} sectionsSelector 
 */
var addMouseLeaveEventListenersForSections = function(sectionsSelector) {

    const body = $('body');
    sectionsSelector.mouseleave(function() {
        let section = $(this);
        body.css('cursor', 'auto');
        section.animate({ 'backgroundColor': "rgba(153,153,153,0.5)" }, 200);
        section.children('.sdrop').animate({ opacity: 0 }, 100);
        section.finish();
    });

};


/**
 * Defines the actions when clicking inside a section container
 * @param {*} sectionsSelector 
 */
var addClickEventListenersForSections = function(sectionsSelector) {

    sectionsSelector.click(function() {
        let section = $(this);

        if (section.hasClass('cerrado')) {
            section.children('.sdrop').children('.ddown').removeClass('fa-angle-down').addClass('fa-angle-up');
            section.children('.hback').fadeIn(1000);
            section.animate({ height: expandContent(section) }, 250);
            section.children('.apcontent').fadeIn(500);
        } else {
            section.children('.sdrop').children('.ddown').removeClass('fa-angle-up').addClass('fa-angle-down');
            section.children().not('.sdrop').fadeOut(250);
            section.animate({ height: '60px' }, 250);
        }
        section.toggleClass('cerrado');
    });

};





/**
 * action.js actions
 */
$(document).ready(function() {

    init();

    const card = $('#card');
    expandContent(card);

    $(document).on('resize', function() {
        init();
    });

});