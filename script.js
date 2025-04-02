let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "flex";
    slides[slideIndex - 1].style.justifyContent = "center";
    slides[slideIndex - 1].style.alignItems = "center";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

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

