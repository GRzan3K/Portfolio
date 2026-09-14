document.addEventListener("DOMContentLoaded", () => {

    /*
        ========================================
        CURRENT YEAR
        ========================================
    */

    const yearElement =
        document.querySelector("#current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /*
        ========================================
        HEADER ON SCROLL
        ========================================
    */

    const header =
        document.querySelector(".site-header");


    function updateHeader() {

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader
    );


    /*
        ========================================
        SCROLL REVEAL
        ========================================
    */

    const revealElements =
        document.querySelectorAll(
            `
            .section-heading,
            .project-card,
            .about-intro,
            .about-box,
            .skills-title,
            .skill-group,
            .contact-box
            `
        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("visible");


                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach((element) => {

        observer.observe(element);

    });

    const menuToggle =
    document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".main-navigation");


    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            navigation.classList.toggle("active");

            const isOpen =
                navigation.classList.contains("active");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        const navigationLinks =
            navigation.querySelectorAll("a");


        navigationLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navigation.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }

});