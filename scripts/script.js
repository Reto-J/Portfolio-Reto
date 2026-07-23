console.log("Hello, World! RetoIn the house");

// ===========================
// Portfolio JavaScript
// ===========================

// DOM Elements
const introImage = document.querySelector('.intro-image');
const introContent = document.querySelector('.intro');
const homeSection = document.querySelector('#home');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-items a");
const cursor = document.querySelector('.cursor');
const hoverItems = document.querySelectorAll("a, button, .project, .service, .skill");

// Scroll Effects
window.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    const scrollPosition = window.scrollY;
    const homeHeight = homeSection.offsetHeight;
    const homeRect = homeSection.getBoundingClientRect();

    if (homeRect.bottom > 0 && homeRect.top < window.innerHeight) {
        const progress = -homeRect.top;
    introImage.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    introContent.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }

    
    if (scrollPosition > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    updateActiveLink();
    revealSections();
});

// Navbar
function updateActiveLink() {
    try {
    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
            console.log("Current Section:", currentSection);
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });
        
    } catch (error) {
        console.error("Error updating active link:", error);
    }
}


// Animations
function revealSections() {
    sections.forEach((section) => {
        const triggerPoint = window.innerHeight * 0.8;
        const sectionTop =
            section.getBoundingClientRect().top;
        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }
    });
}

// Event Listeners