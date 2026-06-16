/* ==========================================
   AJ SPORTS WEAR
   COUNTER.JS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const counters =
        document.querySelectorAll(".counter");

    if (!counters.length) return;

    const counterObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    const counter =
                        entry.target;

                    const target =
                        +counter.dataset.target;

                    let current = 0;

                    const duration = 2000;

                    const increment =
                        target / (duration / 16);

                    function updateCounter() {

                        current += increment;

                        if (current < target) {

                            counter.innerText =
                                Math.floor(current);

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            if (target >= 1000) {

                                counter.innerText =
                                    target + "+";

                            } else {

                                counter.innerText =
                                    target + "+";

                            }

                        }

                    }

                    updateCounter();

                    counterObserver.unobserve(counter);

                });

            },

            {
                threshold: 0.4
            }

        );

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

});