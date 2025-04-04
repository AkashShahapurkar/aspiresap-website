document.addEventListener('DOMContentLoaded', function () {
    /*** Slideshow Functionality ***/
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
        showSlide(currentSlide);
    }

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
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        window.addEventListener("scroll", function () {
            backToTopButton.classList.toggle("show", window.scrollY > 300);
        });

        backToTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
