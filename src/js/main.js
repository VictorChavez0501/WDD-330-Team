// Newsletter sign-up basic functionality
const newsletterForm = document.getElementById("newsletter-form");
const newsletterEmail = document.getElementById("newsletter-email");
const newsletterMessage = document.getElementById("newsletter-message");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    newsletterMessage.textContent = "Thank you for subscribing!";
    newsletterMessage.style.color = "green";

    newsletterEmail.value = "";
  });
}
