

/****************************** CONSTANTS & VARIABLES *********************/

var SECTIONS = {
    INTRODUCTION: 'introduction',
    CAREER_GOALS: 'career-goals',
    ACADEMIC_BACKGROUND: 'academic-background',
    EXPERIENCE: 'experience',
    SKILLS: 'skills',
    PROJECTS: 'projects',
}

var selectedSection;







/****************************** FUNCTIONS *********************/

function selectSection(section) {
    if(selectedSection === undefined) {
        selectedSection = section;
        if(selectedSection !== undefined) initSelectedSection();
    }
    else {
        $('.section').children().fadeOut().promise().done(() => {
            selectedSection = section;
            if(selectedSection !== undefined) initSelectedSection();
        });
    }
}

function getTotalHeight(selector) {
    var total = 0;
    selector.children().each(function(child){
        total += $(this).outerHeight() + 
            getVerticalMargin($(this)) + 
            getPadding($(this));
    });
    return total;
}

function getNewHeightForSection(sectionSelector) {
    return getPadding(sectionSelector) + 
    getTotalHeight(sectionSelector) +
    getVerticalMargin(sectionSelector);
}

function getPadding(selector) {
    return parseInt(selector.css('padding').replace('px', ''))*2;
}

function getVerticalMargin(selector) {
    return parseInt(selector.css('margin-top').replace('px', '')) + parseInt(selector.css('margin-bottom').replace('px', ''));
}





/****************************** INIT METHODS *********************/

function initResizeHandlers() {
    $(window).resize(function() {
        var section = $('.section');
        section.css('height', getNewHeightForSection(section));
      });
}

function initSelectedSection() {
    var section = $('.section');
    section.load('fragments/sections/' + selectedSection + '.html', () => {
        var height = section.outerHeight();
        section.animate(
            { height: getNewHeightForSection(section) }, 
            200, 
            () => { section.children().fadeIn(150); }
        );
    });
}

function initPresentationCard() {
    $('.presentation-card').load('fragments/presentation-card.html');
}

function initNavbar() {
    $('.navbar').load('fragments/nav-bar.html');
}


$(document).ready(function() {
    initPresentationCard();
    initNavbar();
    selectSection(SECTIONS.INTRODUCTION);
    initResizeHandlers();
  });