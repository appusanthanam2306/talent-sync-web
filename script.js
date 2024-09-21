let header = document.querySelector(".header-main");
let navbar = document.querySelector(".navbar");
let requestorName = document.getElementById("name");
let requestorEmail = document.getElementById("email");
let requestorMessage = document.getElementById("message");
let requestorPhone = document.getElementById("phone");
let sendEmailButton = document.getElementById("emailButton");
let backdrop = document.getElementById("backdrop");

function checkFields() {
  if (
    requestorName.value.trim() !== "" &&
    requestorEmail.value.trim() !== "" &&
    requestorMessage.value.trim() !== "" &&
    requestorPhone.value.trim() !== ""
  ) {
    sendEmailButton.disabled = false; // Enable button if all fields are filled
  } else {
    sendEmailButton.disabled = true; // Disable button if any field is empty
  }
}
// let allInputFields = [...document.querySelectorAll("input")];

/* if (requestorName.length && requestorName.length && requestorMessage) {
  sendEmailButton.disabled = false;
} else {
  sendEmailButton.disabled = false;
} */

requestorName.addEventListener("input", checkFields);
requestorEmail.addEventListener("input", checkFields);
requestorPhone.addEventListener("input", checkFields);
requestorMessage.addEventListener("input", checkFields);

/* function checkRequestorName() {
  if (requestorName.value.trim() !== "") {
    sendEmailButton.disabled = false; // Enable button if input is not empty
  } else {
    sendEmailButton.disabled = true; // Disable button if input is empty
  }
}

function checkRequestorEmail() {
  if (requestorEmail.value.trim() !== "") {
    sendEmailButton.disabled = false; // Enable button if input is not empty
  } else {
    sendEmailButton.disabled = true; // Disable button if input is empty
  }
}

function checkRequestorPhone() {
  if (requestorPhone.value.trim() !== "") {
    sendEmailButton.disabled = false; // Enable button if input is not empty
  } else {
    sendEmailButton.disabled = true; // Disable button if input is empty
  }
}

function checkRequestorMessage() {
  if (requestorMessage.value.trim() !== "") {
    sendEmailButton.disabled = false; // Enable button if input is not empty
  } else {
    sendEmailButton.disabled = true; // Disable button if input is empty
  }
} */

document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");

  if (window.scrollY > 120) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

let accordions = document.querySelectorAll(".accordion-container .accordion");

accordions.forEach((acco) => {
  acco.onclick = () => {
    accordions.forEach((subAcco) => {
      subAcco.classList.remove("active");
    });
    acco.classList.add("active");
  };
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 7500,
    diableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
});

function openForm() {
  backdrop.style.display = "block";
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  backdrop.style.display = "none";
}

//Email Functionality
function sendEmail(event) {
  event.preventDefault();
  var params = {
    from_name: requestorName.value,
    email_id: requestorEmail.value,
    message: requestorMessage.value,
  };

  emailjs
    .send("service_29bj566", "template_5sawk7e", params)
    .then((val) => {
      alert("We have got your Registration Request!!!");
      document.getElementById("myForm").style.display = "none";
      requestorName.value = "";
      requestorEmail.value = "";
      requestorMessage.value = "";
      requestorPhone.value = "";
    })
    .catch((err) => {
      alert("Something Went Wrong!!! " + err);
    });
}
