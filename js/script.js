document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.querySelector("a[href='#contact-form']");
    const contactForm = document.getElementById("contact-form");

    contactLink.addEventListener("click", function(e) {
        e.preventDefault();
        contactForm.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");
    const luckyButton = document.querySelector(".hero-text button");

    luckyButton.addEventListener("click", () => {
        if (heroSection.classList.contains("lucky")) {
            // Revert to original background
            heroSection.classList.remove("lucky");
            luckyButton.textContent = "I'm Feeling Lucky";
        } else {
            // Change to new background
            heroSection.classList.add("lucky");
            luckyButton.textContent = "Go Back";
        }
    });
});
