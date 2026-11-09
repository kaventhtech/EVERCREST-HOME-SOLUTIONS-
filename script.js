
// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    const isOpen = nav.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Demonstration contact form
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    formStatus.textContent =
      "Thank you! This is a portfolio demonstration. No message was sent.";

    contactForm.reset();
  });
}
