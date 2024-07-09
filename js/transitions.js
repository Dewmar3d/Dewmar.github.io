document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a");
    const body = document.querySelector("body");

    // Add transition class to body
    body.classList.add("page-transition-active");

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            const target = link.getAttribute("href");

            // Only handle internal links
            if (target && target.startsWith("#") === false && link.hostname === window.location.hostname) {
                event.preventDefault();

                // Fade out
                body.classList.remove("page-transition-active");

                setTimeout(() => {
                    // Navigate to the new page
                    window.location.href = target;
                }, 300); // Match the CSS transition duration
            }
        });
    });
});
