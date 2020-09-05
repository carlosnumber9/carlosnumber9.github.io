
var SECTIONS = {
    INTRODUCTION: 'introduction',
    CAREER_GOALS: 'career-goals',
    ACADEMIC_BACKGROUND: 'academic-background',
    EXPERIENCE: 'experience',
    SKILLS: 'skills',
    PROJECTS: 'projects',
}

var selectedSection;

function initPresentationCard() {
    $('.presentation-card').load('fragments/presentation-card.html');
}

function initNavbar() {
    $('.navbar').load('fragments/nav-bar.html');
}

function selectSection(section) {
    selectedSection = section;
    if(selectedSection !== undefined) initSelectedSection();
}

function initSelectedSection() {
    $('.section').load('fragments/sections/' + selectedSection + '.html');
}

$(document).ready(function() {
    initPresentationCard();
    initNavbar();
    selectSection(SECTIONS.INTRODUCTION);
  });