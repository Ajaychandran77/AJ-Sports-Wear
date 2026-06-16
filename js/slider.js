/* ==========================================
   AJ SPORTS WEAR
   SLIDER.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       TESTIMONIAL AUTO SLIDER
    ====================================== */

    const slider =
        document.querySelector(".testimonial-slider");

    const cards =
        document.querySelectorAll(".testimonial-card");

    if (!slider || cards.length === 0) return;

    let current = 0;

    function showSlide(index) {

        cards.forEach((card, i) => {

            card.style.display =
                i === index ? "block" : "none";

        });

    }

    function nextSlide() {

        current++;

        if (current >= cards.length) {
            current = 0;
        }

        showSlide(current);

    }

    /* Desktop layout fallback */

    if (window.innerWidth > 992) {

        cards.forEach(card => {
            card.style.display = "block";
        });

    } else {

        showSlide(current);

        setInterval(() => {

            nextSlide();

        }, 4000);

    }

    /* ======================================
       TRUST LOGO PAUSE ON HOVER
    ====================================== */

    const track = document.querySelector(".logo-track");

    if (track) {

        track.addEventListener("mouseenter", () => {

            track.style.animationPlayState = "paused";

        });

        track.addEventListener("mouseleave", () => {

            track.style.animationPlayState = "running";

        });

    }

});