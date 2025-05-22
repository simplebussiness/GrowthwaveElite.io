// Smooth scroll to anchors (for same-page navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if(target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Toggle mobile menu if you have one
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-menu");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// Contact Form Submission Handler
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        contactForm.reset();
    });
}

// "Learn More" button click handler on Services page
document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent page jump
        alert('You can edit this to go to a specific page or trigger a feature!');
    });
});
