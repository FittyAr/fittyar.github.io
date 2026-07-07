document.addEventListener("DOMContentLoaded", () => {
  console.log("fitty.ar portfolio initialized successfully!");

  // Topbar scroll effect
  const topbar = document.querySelector(".topbar");
  if (topbar) {
    // Initial check
    if (window.scrollY > 20) {
      topbar.classList.add("scrolled");
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        topbar.classList.add("scrolled");
      } else {
        topbar.classList.remove("scrolled");
      }
    });
  }

  // Active link highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    // Extract the filename from the href (e.g. "sobre.html" from "pages/sobre.html" or "sobre.html")
    const hrefFilename = href.split("/").pop();
    const pathFilename = currentPath.split("/").pop();

    if (pathFilename === hrefFilename || 
        ((hrefFilename === "index.html" || hrefFilename === "") && (pathFilename === "" || pathFilename === "index.html"))) {
      link.classList.add("active");
    }
  });

  // Contact form handler
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Clear any previous status
      formStatus.style.display = "none";
      formStatus.className = "form-status";

      // Check if hCaptcha is completed
      if (typeof hcaptcha !== "undefined") {
        const response = hcaptcha.getResponse();
        if (!response) {
          formStatus.textContent = "Por favor, completá el captcha antes de enviar.";
          formStatus.classList.add("error");
          formStatus.style.display = "block";
          return;
        }
      }

      // Basic styling change for submission progress
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalBtnText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando...";

      // Simulate network request
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;

        // Visual confirmation
        formStatus.textContent = "¡Gracias por tu mensaje! Me pondré en contacto con vos a la brevedad.";
        formStatus.classList.add("success");
        formStatus.style.display = "block";

        // Reset hCaptcha if available
        if (typeof hcaptcha !== "undefined") {
          hcaptcha.reset();
        }

        // Reset form fields
        contactForm.reset();
      }, 1500);
    });
  }
});
