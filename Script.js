document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".toggle-menu");
    const navMenu = document.querySelector("nav ul");

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // Dark Mode Toggle
    const toggleModeBtn = document.querySelector(".toggle-mode");
    toggleModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        toggleModeBtn.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
    });

    // Typing Effect
    const text = "Network Engineer | Cybersecurity | Cloud Enthusiast";
    let index = 0;
    function typeEffect() {
        document.getElementById("typing-text").innerText = text.slice(0, index);
        index++;
        if (index <= text.length) {
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Scroll Indicator
    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        let docHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollPercent = (scrollTop / docHeight) * 100;
        document.getElementById("scroll-progress").style.width = scrollPercent + "%";
    });

    // Back to Top Button
    const backToTop = document.getElementById("back-to-top");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
