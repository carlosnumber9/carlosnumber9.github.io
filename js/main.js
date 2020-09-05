
function initPresentationCard() {
    $('.presentation-card').load('fragments/presentation-card.html');
}

function initNavbar() {
    $('.navbar').load('fragments/nav-bar.html');
}

$(document).ready(function() {
    initPresentationCard();
    initNavbar();
  });