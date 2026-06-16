/* ==========================================
   AJ SPORTS WEAR
   MAIN.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       STICKY HEADER
    ====================================== */

    const header = document.querySelector(".header");

    function handleHeader() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    handleHeader();

    window.addEventListener("scroll", handleHeader);

    /* ======================================
       MOBILE MENU
    ====================================== */

    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");

    if (hamburger && navbar) {

        hamburger.addEventListener("click", () => {

            navbar.classList.toggle("active");
            hamburger.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    navbar.classList.remove("active");
                    hamburger.classList.remove("active");

                });

            });

    }

    /* ======================================
       SMOOTH ACTIVE NAV LINK
    ====================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (
                pageYOffset >= top &&
                pageYOffset < top + height
            ) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === `#${current}`
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    /* ======================================
       INTERSECTION OBSERVER
    ====================================== */

    const animatedElements = document.querySelectorAll(
        ".fade-up, .slide-left, .slide-right, .zoom-in"
    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("animate");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    /* ======================================
       GALLERY FILTER
    ====================================== */

    const filterButtons =
        document.querySelectorAll(".gallery-filters button");

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    if (filterButtons.length) {

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                filterButtons.forEach(btn =>
                    btn.classList.remove("active")
                );

                button.classList.add("active");

                const filter =
                    button.getAttribute("data-filter");

                galleryItems.forEach(item => {

                    if (
                        filter === "all" ||
                        item.classList.contains(filter)
                    ) {

                        item.classList.remove("hide");

                        item.style.display = "block";

                    } else {

                        item.classList.add("hide");

                        setTimeout(() => {
                            item.style.display = "none";
                        }, 300);

                    }

                });

            });

        });

    }

    /* ======================================
       REVEAL FILTERED ITEMS
    ====================================== */

    const revealItems = () => {

        galleryItems.forEach(item => {

            if (!item.classList.contains("hide")) {

                setTimeout(() => {
                    item.style.opacity = "1";
                }, 100);

            }

        });

    };

    revealItems();

    /* ======================================
       BACK TO TOP BUTTON (OPTIONAL)
    ====================================== */

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});