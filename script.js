document.addEventListener("DOMContentLoaded", function () {
    setActiveMenuItem();
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", handleSubmit);

    function setActiveMenuItem() {
        const currentUrl = window.location.href;
        const navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach((navLink) => {
            if (navLink.href === currentUrl) {
                navLink.classList.add("active");
            } else {
                navLink.classList.remove("active");
            }
        });
    }
});

function updateFormFields() {
    const category = document.getElementById("category").value;
    const quantityGroup = document.getElementById("quantityGroup");

    if (category === "large_sales") {
        quantityGroup.style.display = "block";
    } else {
        quantityGroup.style.display = "none";
    }
}

// this part darkens the nav bar when the window is scrolled up to prevent the parallax text from overlapping with the text of the "transparent" navbar
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 170) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});
//and the toggler for mobile menu expand feature
const navbarToggler = document.querySelector(".navbar-toggler");
navbarToggler.addEventListener("click", function () {
    nav.classList.toggle("bg-dark");
    nav.classList.toggle("shadow");
});



function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    /*https://www.w3schools.blog/validate-email-regular-expression-regex-java*/
    const isValidEmail = emailPattern.test(emailInput.value);

    if (isValidEmail) {
        emailInput.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    } else {
        emailInput.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    }
}

function handleSubmit(e) {
    e.preventDefault();

    const isValidForm = true;

    if (isValidForm) {
        const contactForm = document.getElementById("contactForm");
        const successMessage = document.createElement("div");
        successMessage.innerHTML = `
            <h2>Thank you for reaching out!</h2>
            <p>We have received your message successfully.</p>
        `;
        successMessage.classList.add("alert", "alert-success");
        contactForm.parentNode.insertBefore(successMessage, contactForm);
        contactForm.style.display = "none";
    }
}

if (/iPhone|iPod/i.test(navigator.userAgent)) {
    // Remove background-attachment: fixed; for old iOS devices
    var bgElements = document.querySelectorAll('.bg');
    for (var i = 0; i < bgElements.length; i++) {
        bgElements[i].style.backgroundAttachment = 'initial';
    }
}