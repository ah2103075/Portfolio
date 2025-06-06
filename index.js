// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
    });
});

// Typed.js Animation
var typed = new Typed(".text", {
  strings: ["a CS Undergraduate Student of RUET","enthusiastic in machine learning."],
  typeSpeed: 100,
  backSpeed: 10,
  backDelay: 100,
  loop: true,
});

// Read More/Show Less Functionality
let textEl = document.getElementById("jstext");
const text = `
I was born on 15 December 2002. Currently, I'm living in Rajshahi, Bangladesh. My childhood was spent in a village. I'm a foodie, and my favorite food is "Kacci Biriyani," a beef item with rice. My hobbies include playing cricket and table tennis, watching television, dramas, and movies, and traveling. I love exploring new places and experiencing different cultures.
`;

function showText() {
  textEl.innerHTML = text;
}

function hideText() {
  textEl.innerHTML = "";
}

// EmailJS Form Submission
(function() {
  emailjs.init("gJl_QD212ZEDdx-6g");
})();

function sendEMail(event) {
    event.preventDefault(); 

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_skledt1", "template_p95jaeq", params)
    .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("✅ Email sent successfully!");
        document.getElementById("myForm").reset(); 
    })
    .catch((error) => {
        console.error("FAILED...", error);
        alert("❌ Failed to send email. Please try again.");
    });
}

document.getElementById("myForm").addEventListener("submit", sendEMail);