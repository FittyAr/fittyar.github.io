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
});
