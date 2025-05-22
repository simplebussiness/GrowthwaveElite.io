// Smooth scroll to anchors (for same-page navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Check if `menuToggle` is already defined before declaring it
if (typeof menuToggle === 'undefined') {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-menu");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
}

// Check if `contactForm` is already defined before declaring it
if (typeof contactForm === 'undefined') {
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
            contactForm.reset();
        });
    }
}

// Handle the "Learn More" button click event for the service page
document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent page from jumping to top
        alert('You can edit this to go to a specific page or trigger a feature!');
        // You can replace the alert with any custom action the buyer needs
    });
});
