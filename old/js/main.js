/****************************** CONSTANTS & VARIABLES *********************/

var SECTIONS = {
  INTRODUCTION: "introduction",
  CAREER_GOALS: "career-goals",
  ACADEMIC_BACKGROUND: "academic-background",
  EXPERIENCE: "experience",
  SKILLS: "skills",
  PROJECTS: "projects",
};

var CONTACT_FIELDS = {
  NAME: "name",
  TELEPHONE: "number",
  EMAIL: "email",
  SUBJECT: "subject",
  PROPOSAL: "proposal",
};

var selectedSection;

/****************************** FUNCTIONS *********************/

function selectSection(section) {
  if (selectedSection === undefined) {
    selectedSection = section;
    if (selectedSection !== undefined) initSelectedSection();
  } else {
    $(".section")
      .children()
      .fadeOut()
      .promise()
      .done(() => {
        selectedSection = section;
        if (selectedSection !== undefined) initSelectedSection();
      });
  }
}

function getTotalHeight(selector) {
  var total = 0;
  selector.children().each(function (child) {
    total +=
      $(this).outerHeight() + getVerticalMargin($(this)) + getPadding($(this));
  });
  return total;
}

function getNewHeightForSection(sectionSelector) {
  return (
    getPadding(sectionSelector) +
    getTotalHeight(sectionSelector) +
    getVerticalMargin(sectionSelector)
  );
}

function getPadding(selector) {
  return parseInt(selector.css("padding").replace("px", "")) * 2;
}

function getVerticalMargin(selector) {
  return (
    parseInt(selector.css("margin-top").replace("px", "")) +
    parseInt(selector.css("margin-bottom").replace("px", ""))
  );
}

function sendMail(mailInfo) {
  var TOKEN = "4f546ef8-53a3-47d7-a3f8-a9204c81e283";
  Email.send({
    SecureToken: TOKEN,
    To: "cpinedocsb@gmail.com",
    From: "consultas@pages.github.com",
    Subject: "Nueva consulta: " + mailInfo.subject,
    Body: getEmailMessage(mailInfo),
  }).then((message) => {
    if (message === "OK") {
      console.debug("Mail sent succesfully.");
      $("#sending-icon")
        .fadeOut(100)
        .promise()
        .done(() => {
          $("#mail-sent-text").fadeIn();
        });
    } else console.error(message);
  });
}

function getEmailMessage(mailInfo) {
  var beginning =
    "Has recibido una nueva consulta en tu página personal.<br><br>";

  var name = "Nombre: " + mailInfo.name + "<br>";
  var number = mailInfo.number
    ? "Teléfono: " + mailInfo.number + "<br>"
    : undefined;
  var email = mailInfo.email ? "Correo: " + mailInfo.email + "<br>" : undefined;
  var message = "Mensaje: " + mailInfo.proposal;

  var completeMessage = beginning + name;
  if (number) completeMessage = completeMessage.concat(number);
  if (email) completeMessage = completeMessage.concat(email);

  completeMessage = completeMessage.concat(message);
  return completeMessage;
}

function openContactWindow() {
  var contactButton = $(".contact-button");
  var contactIcon = $("#contact-icon");
  var contactFormContainer = $("#contact-form-container");
  var contactTitle = $(".contact-title");
  var contactForm = $("#contact-form");

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
              contactForm.css("display", "flex");
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

function notifyEmptyField(field) {
  var field = $("#" + field);
  var interval = setInterval(() => {
    field.toggleClass("empty-field");
  }, 200);
  setTimeout(() => {
    clearInterval(interval);
    field.removeClass('empty-field');
  }, 3000);
}

/****************************** EVENT INTERCEPTORS *********************/

function submit() {
  var nameSelector = $("#" + CONTACT_FIELDS.NAME);
  var numberSelector = $("#" + CONTACT_FIELDS.TELEPHONE);
  var emailSelector = $("#" + CONTACT_FIELDS.EMAIL);
  var subjectSelector = $("#" + CONTACT_FIELDS.SUBJECT);
  var proposalSelector = $("#" + CONTACT_FIELDS.PROPOSAL);

  var name = nameSelector.val();
  var subject = subjectSelector.val();
  var proposal = proposalSelector.val();
  var number = numberSelector.val();
  var email = emailSelector.val();

  notifyEmptyField("name");

  if (name && subject && proposal && (number || email)) {
    $("#contact-form")
      .fadeOut(200)
      .promise()
      .done(() => {
        $("#sending-icon")
          .fadeIn(100)
          .promise()
          .done(() => {
            var mailInfo = {
              name: name,
              number: number,
              email: email,
              subject: subject,
              proposal: proposal,
            };

            sendMail(mailInfo);
          });
      });
  } else {
    console.error("Must complete form info first.");

    if (!name) notifyEmptyField(CONTACT_FIELDS.NAME);
    if (!subject) notifyEmptyField(CONTACT_FIELDS.SUBJECT);
    if (!proposal) notifyEmptyField(CONTACT_FIELDS.PROPOSAL);

    if (!number && !email) {
      notifyEmptyField(CONTACT_FIELDS.TELEPHONE);
      notifyEmptyField(CONTACT_FIELDS.EMAIL);
    }
  }
}

/****************************** INIT METHODS *********************/

function initResizeHandlers() {
  $(window).resize(function () {
    var section = $(".section");
    section.css("height", getNewHeightForSection(section));
  });
}

function initSelectedSection() {
  var section = $(".section");
  section.load("fragments/sections/" + selectedSection + ".html", () => {
    var height = section.outerHeight();
    section.animate({ height: getNewHeightForSection(section) }, 200, () => {
      section.children().fadeIn(150);
    });
  });
}

function initPresentationCard() {
  $(".presentation-card").load("fragments/presentation-card.html");
}

function initNavbar() {
  $(".navbar").load("fragments/nav-bar.html");
}

function initContactForm() {
  $(".contact").load("fragments/contact.html");
}

$(document).ready(function () {
  initPresentationCard();
  initNavbar();
  initContactForm();
  selectSection(SECTIONS.INTRODUCTION);
  initResizeHandlers();
});
