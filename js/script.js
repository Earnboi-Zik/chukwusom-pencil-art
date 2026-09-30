document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // MOBILE MENU
  // =========================

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      const icon = menuToggle.querySelector("i");

      if (navMenu.classList.contains("active")) {
        icon.classList.remove("bi-list");
        icon.classList.add("bi-x-lg");
      } else {
        icon.classList.remove("bi-x-lg");
        icon.classList.add("bi-list");
      }
    });

    // Close menu when a navigation link is clicked
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("bi-x-lg");
        icon.classList.add("bi-list");
      });
    });
  }

  // =========================
  // COPYRIGHT YEAR
  // =========================

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // =========================
  // CONTACT FORM
  // =========================

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const artType = document.getElementById("artType").value;
      const message = document.getElementById("message").value.trim();

      const whatsappMessage = `Hello Chukwusom Pencil Art,

My name is ${name}.

Phone: ${phone}

Artwork Type: ${artType}

Message:
${message}

I would like to make an enquiry about your artwork.`;

      const encodedMessage = encodeURIComponent(whatsappMessage);

      const whatsappURL = `https://wa.me/2348134806979?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    });
  }
});
