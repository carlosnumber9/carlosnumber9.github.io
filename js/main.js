
function initPresentationCard() {
    $('.presentation-card').load('fragments/presentation-card.html', function() {
        // console.debug('Presentation card was initialized succesfully');
    });
}

$(document).ready(function() {
    initPresentationCard();
  });