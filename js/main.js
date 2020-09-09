

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

function sendMail(mailInfo) {
    var TOKEN = '4f546ef8-53a3-47d7-a3f8-a9204c81e283';
    Email.send({
        SecureToken : TOKEN,
        To : 'cpinedocsb@gmail.com',
        From : "consultas@pages.github.com",
        Subject : 'Nueva consulta: ' + mailInfo.subject,
        Body : getEmailMessage(mailInfo)
    }).then(
      message => { 
          if(message === 'OK') console.debug('Mail sent succesfully.');
          else console.error(message);
      }
    );
}

function getEmailMessage(mailInfo) {

    var beginning = 'Has recibido una nueva consulta en tu página personal.<br><br>';

    var name = 'Nombre: ' + mailInfo.name + '<br>';
    var number = (mailInfo.number) ? 'Teléfono: ' + mailInfo.number + '<br>' : undefined; 
    var email = (mailInfo.email) ? 'Correo: ' + mailInfo.email + '<br>' : undefined; 
    var message = 'Mensaje: ' + mailInfo.proposal;

    var completeMessage = beginning + name;
    if(number) completeMessage = completeMessage.concat(number);
    if(email) completeMessage = completeMessage.concat(email);

    completeMessage = completeMessage.concat(message);
    return completeMessage;
}

function openContactWindow() {
  var contactButton = $(".contact-button");
  var contactIcon = $("#contact-icon");
  var contactFormContainer = $("#contact-form-container");
  var contactTitle = $(".contact-title");
  var contactForm = $('#contact-form');

  contactIcon
    .fadeOut(100)
    .promise()
    .done(() => {
      contactButton.animate(
        {
          width: "0px",
          height: "0px",
          bottom: "40px",
          right: "40px",
        },
        400,
        () => {
          contactButton.fadeOut();
          contactFormContainer
            .fadeIn(200)
            .promise()
            .done(() => {
              contactFormContainer.css("display", "flex");
              contactTitle.fadeIn();
              contactForm.fadeIn();
              contactForm.css('display', 'flex');
            });
        }
      );
    });
}

function closeContactWindow() {
  var contactButton = $(".contact-button");
  var contactIcon = $("#contact-icon");
  var contactFormContainer = $("#contact-form-container");

  contactFormContainer
    .fadeOut(200)
    .promise()
    .done(() => {
      contactButton
        .fadeIn(50)
        .promise()
        .done(() => {
          contactButton.animate(
            {
              width: "50px",
              height: "50px",
              bottom: "10px",
              right: "10px",
            },
            400,
            () => {
              contactIcon.fadeIn(100);
            }
          );
        });
    });
}


/****************************** EVENT INTERCEPTORS *********************/


function submit() {

    var name = $('#name').val();
    var subject = $('#subject').val();
    var proposal = $('#proposal').val();
    var number = $('#number').val();
    var email = $('#email').val();

    if((name && subject && proposal) && (number || email)) {

        var mailInfo = {
            name: name,
            number: number,
            email: email,
            subject: subject,
            proposal: proposal
        }

        sendMail(mailInfo);
    }
    else {
        console.error('Must complete form info first.');
    }
    
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

function initContactForm() {
    $('.contact').load('fragments/contact.html');
}


$(document).ready(function() {
    initPresentationCard();
    initNavbar();
    initContactForm();
    selectSection(SECTIONS.INTRODUCTION);
    initResizeHandlers();
  });