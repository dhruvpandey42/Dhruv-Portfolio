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

    // Initialize Animations
    AOS.init({ duration: 1200 });

    // Load Particles.js Animation
    particlesJS.load("particles-js", "libs/particles.json");
});
