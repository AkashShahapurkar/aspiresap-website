document.addEventListener('DOMContentLoaded', function () {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    setInterval(nextSlide, 3000);
});
    /*** Flip Card Hover Effect ***/
    document.querySelectorAll('.flip-card').forEach(card => {
        const inner = card.querySelector('.flip-card-inner');
        if (inner) {
            card.addEventListener('mouseenter', () => inner.style.transform = 'rotateY(180deg)');
            card.addEventListener('mouseleave', () => inner.style.transform = 'rotateY(0deg)');
        }
    });

    /*** Scroll-Based Animations ***/
    const sections = document.querySelectorAll("section");
    const vmvBoxes = document.querySelectorAll(".vmv-box");

    function checkScroll() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            if (section.getBoundingClientRect().top < windowHeight - 50) {
                section.classList.add("visible");
            }
        });

        vmvBoxes.forEach(box => {
            if (box.getBoundingClientRect().top < windowHeight - 50) {
                box.style.opacity = "1";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once on load

    /*** Back to Top Button ***/
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
});
