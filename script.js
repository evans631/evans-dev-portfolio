
"use strict";

// 1. Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.textContent = "☰";
        });
    });
}

// 2. Automatically update the copyright year
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// 3. Contact email
// Replace this with your real email address before publishing.
const contactEmail = "your-email@example.com";

const emailLink = document.getElementById("emailLink");
const emailText = document.getElementById("emailText");

if (emailLink && emailText) {
    emailLink.href = "mailto:" + contactEmail;
    emailText.textContent = contactEmail;
}

// 4. Learn More button
const learnButton = document.getElementById("learnButton");
const learnMessage = document.getElementById("learnMessage");

if (learnButton && learnMessage) {
    learnButton.addEventListener("click", function () {
        learnMessage.textContent =
            "I'm Evans Addo, and I am learning to become a web developer!";
    });
}

// 5. Coding practice counter
let practiceCount = 0;

const counterDisplay = document.getElementById("counter");
const countButton = document.getElementById("countButton");
const resetButton = document.getElementById("resetButton");

if (counterDisplay && countButton && resetButton) {
    countButton.addEventListener("click", function () {
        practiceCount = practiceCount + 1;
        counterDisplay.textContent = practiceCount;
    });

    resetButton.addEventListener("click", function () {
        practiceCount = 0;
        counterDisplay.textContent = practiceCount;
    });
}
