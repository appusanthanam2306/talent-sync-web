let header = document.querySelector(".header-main");
let navbar = document.querySelector(".navbar");
let requestorName = document.getElementById("name");
let requestorEmail = document.getElementById("email");
let requestorMessage = document.getElementById("message");
let requestorPhone = document.getElementById("phone");
let sendEmailButton = document.getElementById("emailButton");
let backdrop = document.getElementById("backdrop");
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function checkFields() {
  if (
    requestorName.value.trim() !== "" &&
    requestorName.value.length > 6 &&
    requestorEmail.value.trim() !== "" &&
    emailRegex.test(requestorEmail.value) &&
    requestorMessage.value.trim() !== "" &&
    requestorPhone.value.trim() !== "" &&
    requestorPhone.value.length == 10
  ) {
    sendEmailButton.disabled = false; // Enable button if all fields are filled
  } else {
    sendEmailButton.disabled = true; // Disable button if any field is empty
  }
}

requestorName.addEventListener("input", checkFields);
requestorEmail.addEventListener("input", checkFields);
requestorPhone.addEventListener("input", checkFields);
requestorMessage.addEventListener("input", checkFields);

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
      backdrop.style.display = "none";
      sendEmailButton.disabled = true;
      requestorName.value = "";
      requestorEmail.value = "";
      requestorMessage.value = "";
      requestorPhone.value = "";
    })
    .catch((err) => {
      alert("Something Went Wrong!!! " + err);
    });
}
