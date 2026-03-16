document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse).toggle();
            }
        });
    });
        
        const revealSections = document.querySelectorAll("section");

        revealSections.forEach(section => {
            section.classList.add("reveal-hidden");
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target;
                if (entry.isIntersecting) {
                 
                    el.classList.remove("reveal-visible");
                    void el.offsetWidth; 
                    el.classList.add("reveal-visible");
                } else {
               
                    el.classList.remove("reveal-visible");
                }
            });
        }, {
            threshold: 0.15
        });

        revealSections.forEach(section => {
            observer.observe(section);
        });

        let depoCarousel = document.querySelector('#carouselDepoimentos');
        let depo = new bootstrap.Carousel(depoCarousel, {
            interval: 6000, 
            pause: "hover"
        });

        
});
