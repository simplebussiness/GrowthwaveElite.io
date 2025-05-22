// Smooth scroll for same-page anchors (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Toggle mobile menu (assumes you add a .menu-toggle button and .nav-menu for nav)
(() => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-menu");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
})();

// Contact form submission alert for your Contact Us page
(() => {
  // Your contact form currently has no ID — add id="contact-form" to <form> tag
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }
})();

// "Learn More" button click alerts on Services page
document.querySelectorAll(".learn-more-btn").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();
    alert("You can edit this to go to a specific page or trigger a feature!");
  });
});
