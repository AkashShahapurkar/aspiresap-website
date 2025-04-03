let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === currentSlide) {
            slide.classList.add("active");
        }
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

// Start the slideshow
setInterval(showSlides, 4000);
showSlides();

document.addEventListener("DOMContentLoaded", showSlides);

document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)';
    });

    card.addEventListener('mouseleave', () => {
        card.querySelector('.flip-card-inner').style.transform = 'rotateY(0deg)';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 50) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// Show/hide Back to Top button based on scroll position
window.onscroll = function () {
    var button = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
};

// Scroll smoothly to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
